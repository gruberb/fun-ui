import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-D16BNjX-.js";import{n,t as r}from"./StatCard-C6xQElbC.js";var i,a,o,s,c,l,u;e((()=>{n(),i=t(),a={title:`Data/StatCard`,component:r,argTypes:{trend:{control:`select`,options:[`up`,`down`,`neutral`,void 0]}}},o={args:{label:`Total Points`,value:142}},s={args:{label:`Goals`,value:68,trend:`up`}},c={args:{label:`Assists`,value:12,trend:`down`}},l={render:()=>(0,i.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 1fr)`,gap:`1rem`},children:[(0,i.jsx)(r,{label:`Goals`,value:68,trend:`up`}),(0,i.jsx)(r,{label:`Assists`,value:74,trend:`neutral`}),(0,i.jsx)(r,{label:`Total Points`,value:142,trend:`up`})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Total Points",
    value: 142
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Goals",
    value: 68,
    trend: "up"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Assists",
    value: 12,
    trend: "down"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1rem"
  }}>
      <StatCard label="Goals" value={68} trend="up" />
      <StatCard label="Assists" value={74} trend="neutral" />
      <StatCard label="Total Points" value={142} trend="up" />
    </div>
}`,...l.parameters?.docs?.source}}},u=[`Default`,`TrendUp`,`TrendDown`,`Grid`]}))();export{o as Default,l as Grid,c as TrendDown,s as TrendUp,u as __namedExportsOrder,a as default};