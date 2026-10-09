import type { Meta, StoryObj } from "@storybook/react-vite";
import MatchTile from "./MatchTile";
import MatchTiles from "./MatchTiles";
import LogoTile from "../LogoTile/LogoTile";

const team = (name: string, label: string, score?: number | null) => ({ name, label, logo: <LogoTile code={label} size={22} />, score });

const meta = {
  title: "Data Display/MatchTile",
  component: MatchTile,
  args: { time: "Sat 15:30", home: team("Alpha FC", "ALP", 2), away: team("Bravo United", "BRV", 1) },
  decorators: [(Story) => <MatchTiles><Story /></MatchTiles>],
} satisfies Meta<typeof MatchTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Played: Story = {};

export const Draw: Story = { args: { home: team("Alpha FC", "ALP", 1), away: team("Bravo United", "BRV", 1) } };

export const Upcoming: Story = { args: { home: team("Alpha FC", "ALP"), away: team("Bravo United", "BRV"), time: "Sun 17:30" } };

export const Current: Story = { args: { current: true } };

export const AllTiles: Story = {
  decorators: [],
  render: () => (
    <MatchTiles ariaLabel="Matchday 12">
      <MatchTile time="Fri 20:30" home={team("Alpha FC", "ALP", 2)} away={team("Bravo United", "BRV", 1)} onSelect={() => {}} />
      <MatchTile time="Sat 15:30" home={team("Charlie Athletic", "CHA", 0)} away={team("Delta Town", "DEL", 3)} onSelect={() => {}} />
      <MatchTile time="Sat 15:30" home={team("Echo Rovers", "ECH", 1)} away={team("Foxtrot City", "FOX", 1)} current />
      <MatchTile time="Sun 17:30" home={team("Golf Wanderers", "GOL")} away={team("Hotel Sporting", "HOT")} onSelect={() => {}} />
    </MatchTiles>
  ),
};
