import{a as e,n as t}from"./chunk-BneVvdWh.js";import{O as n}from"./iframe-BWKH6M8r.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./TabNavigation-CFARjYIT.js";var o,s,c,l,u,d,f;t((()=>{o=e(n(),1),i(),s=r(),c={title:`Navigation/TabNavigation`,component:a},l={args:{tabs:[{id:`status`,label:`Status`},{id:`schedule`,label:`Schedule`},{id:`swimmers`,label:`Swimmers`}],activeTab:`status`,onTabChange:()=>{}}},u={render:()=>{let[e,t]=(0,o.useState)(`games`);return(0,s.jsx)(a,{tabs:[{id:`games`,label:`Games`},{id:`rankings`,label:`Rankings`},{id:`teams`,label:`Teams`},{id:`players`,label:`Players`}],activeTab:e,onTabChange:t})}},d={args:{tabs:[{id:`this-week`,label:`This Week`},{id:`next-week`,label:`Next Week`}],activeTab:`this-week`,onTabChange:()=>{}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: "status",
      label: "Status"
    }, {
      id: "schedule",
      label: "Schedule"
    }, {
      id: "swimmers",
      label: "Swimmers"
    }],
    activeTab: "status",
    onTabChange: () => {}
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = useState("games");
    return <TabNavigation tabs={[{
      id: "games",
      label: "Games"
    }, {
      id: "rankings",
      label: "Rankings"
    }, {
      id: "teams",
      label: "Teams"
    }, {
      id: "players",
      label: "Players"
    }]} activeTab={active} onTabChange={setActive} />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: "this-week",
      label: "This Week"
    }, {
      id: "next-week",
      label: "Next Week"
    }],
    activeTab: "this-week",
    onTabChange: () => {}
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`Interactive`,`TwoTabs`]}))();export{l as Default,u as Interactive,d as TwoTabs,f as __namedExportsOrder,c as default};