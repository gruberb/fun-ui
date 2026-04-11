import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-D16BNjX-.js";import{n,t as r}from"./DataTable-CMSM3UcQ.js";var i,a,o,s,c,l,u,d,f,p,m,h;e((()=>{n(),i=t(),a=[{key:`rank`,header:`#`},{key:`name`,header:`Name`},{key:`points`,header:`Points`,sortable:!0},{key:`goals`,header:`Goals`,sortable:!0},{key:`assists`,header:`Assists`,sortable:!0,responsive:`md`},{key:`gamesPlayed`,header:`GP`,responsive:`lg`}],o=[{id:1,rank:1,name:`Team Alpha`,points:142,goals:68,assists:74,gamesPlayed:82},{id:2,rank:2,name:`Team Beta`,points:138,goals:71,assists:67,gamesPlayed:82},{id:3,rank:3,name:`Team Gamma`,points:125,goals:59,assists:66,gamesPlayed:82},{id:4,rank:4,name:`Team Delta`,points:119,goals:54,assists:65,gamesPlayed:82},{id:5,rank:5,name:`Team Epsilon`,points:112,goals:51,assists:61,gamesPlayed:82},{id:6,rank:6,name:`Team Zeta`,points:108,goals:49,assists:59,gamesPlayed:82},{id:7,rank:7,name:`Team Eta`,points:101,goals:46,assists:55,gamesPlayed:82},{id:8,rank:8,name:`Team Theta`,points:95,goals:42,assists:53,gamesPlayed:82}],s={title:`Data/DataTable`,component:r},c={args:{title:`Season Rankings`,subtitle:`2024-25 Season`,columns:a,data:o,initialSortKey:`points`}},l={args:{title:`Daily Rankings`,dateBadge:`Apr 7, 2026`,columns:a,data:o}},u={args:{title:`Rankings`,columns:a,data:[],isLoading:!0}},d={args:{title:`Rankings`,columns:a,data:[],emptyMessage:`No rankings data for this date.`}},f={args:{title:`Top 3`,columns:a,data:o,limit:3,viewAllHref:`#`,viewAllText:`View All Rankings`}},p={args:{title:`Players`,columns:a,data:o,showRankColors:!1}},m={args:{title:`Custom Cells`,columns:[{key:`rank`,header:`#`},{key:`name`,header:`Team`,render:e=>(0,i.jsx)(`strong`,{children:e})},{key:`points`,header:`Points`,sortable:!0,render:e=>(0,i.jsx)(`span`,{className:`brutal-badge bg-[var(--color-brutal-yellow)] text-[var(--color-brutal-black)]`,children:e})}],data:o.slice(0,5)}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Season Rankings",
    subtitle: "2024-25 Season",
    columns: sampleColumns,
    data: sampleData,
    initialSortKey: "points"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Daily Rankings",
    dateBadge: "Apr 7, 2026",
    columns: sampleColumns,
    data: sampleData
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Rankings",
    columns: sampleColumns,
    data: [],
    isLoading: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Rankings",
    columns: sampleColumns,
    data: [],
    emptyMessage: "No rankings data for this date."
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Top 3",
    columns: sampleColumns,
    data: sampleData,
    limit: 3,
    viewAllHref: "#",
    viewAllText: "View All Rankings"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Players",
    columns: sampleColumns,
    data: sampleData,
    showRankColors: false
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Custom Cells",
    columns: [{
      key: "rank",
      header: "#"
    }, {
      key: "name",
      header: "Team",
      render: (value: string) => <strong>{value}</strong>
    }, {
      key: "points",
      header: "Points",
      sortable: true,
      render: (value: number) => <span className="brutal-badge bg-[var(--color-brutal-yellow)] text-[var(--color-brutal-black)]">
            {value}
          </span>
    }],
    data: sampleData.slice(0, 5)
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`WithDateBadge`,`Loading`,`Empty`,`WithLimit`,`NoRankColors`,`CustomRenderers`]}))();export{m as CustomRenderers,c as Default,d as Empty,u as Loading,p as NoRankColors,l as WithDateBadge,f as WithLimit,h as __namedExportsOrder,s as default};