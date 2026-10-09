import type { ReactNode } from "react";

export type MatchTileTeam = {
  name: string;
  /** Compact text shown in the tile; defaults to `name`. */
  label?: string;
  /** Logo slot, e.g. a LogoTile. */
  logo?: ReactNode;
  /** Null or undefined renders as not played. */
  score?: number | null;
};

export type MatchTileProps = {
  home: MatchTileTeam;
  away: MatchTileTeam;
  /** Kick-off or status line, e.g. "Sat 15:30". */
  time?: ReactNode;
  /** Highlights the tile as the one being viewed and disables selection. */
  current?: boolean;
  /** Overrides the winner derived from the scores. */
  winner?: "home" | "away" | null;
  onSelect?: () => void;
  /** Accessible name; defaults to "Home 2:1 Away". */
  ariaLabel?: string;
};

function derivedWinner({ home, away }: Pick<MatchTileProps, "home" | "away">) {
  if (home.score == null || away.score == null) return null;
  return home.score > away.score ? "home" : home.score < away.score ? "away" : null;
}

/** Renders an `li`; place inside MatchTiles. */
export default function MatchTile({ home, away, time, current = false, winner, onSelect, ariaLabel }: MatchTileProps) {
  const played = home.score != null && away.score != null;
  const decided = winner === undefined ? derivedWinner({ home, away }) : winner;
  const label = ariaLabel ?? `${home.name} ${played ? `${home.score}:${away.score}` : "vs"} ${away.name}`;
  return (
    <li>
      <button type="button" className="fui-match-tile" aria-current={current ? "true" : undefined} aria-label={label} onClick={() => !current && onSelect?.()}>
        {time && <span className="fui-match-tile__time">{time}</span>}
        {([["home", home], ["away", away]] as const).map(([side, team]) => (
          <span key={side} className={`fui-match-tile__team${decided === side ? " is-winner" : ""}`}>
            {team.logo ?? <span />}
            <span>{team.label ?? team.name}</span>
            <b>{played ? team.score : "–"}</b>
          </span>
        ))}
      </button>
    </li>
  );
}
