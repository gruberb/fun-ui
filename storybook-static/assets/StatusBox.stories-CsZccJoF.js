import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-D16BNjX-.js";import{n,t as r}from"./StatusBox-B2aw8N2q.js";var i,a,o,s,c,l,u,d;e((()=>{n(),i=t(),a={title:`Feedback/StatusBox`,component:r,argTypes:{status:{control:`select`,options:[`positive`,`negative`,`warning`,`info`]}}},o={args:{title:`Lane Swimming`,status:`positive`,label:`YES`,description:`Open until 4:00 PM`}},s={args:{title:`Kids Pool`,status:`negative`,label:`NO`,description:`Opens at 1:00 PM`}},c={args:{title:`Members Only`,status:`warning`,label:`MAYBE`,description:`Restricted access until noon`}},l={args:{title:`Library`,status:`info`,label:`OPEN`,description:`Closes in 3 hours`}},u={render:()=>(0,i.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`1rem`},children:[(0,i.jsx)(r,{title:`Lane Swimming`,status:`positive`,label:`YES`,description:`Open now`}),(0,i.jsx)(r,{title:`Kids Pool`,status:`negative`,label:`NO`,description:`Closed today`})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lane Swimming",
    status: "positive",
    label: "YES",
    description: "Open until 4:00 PM"
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Kids Pool",
    status: "negative",
    label: "NO",
    description: "Opens at 1:00 PM"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Members Only",
    status: "warning",
    label: "MAYBE",
    description: "Restricted access until noon"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Library",
    status: "info",
    label: "OPEN",
    description: "Closes in 3 hours"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem"
  }}>
      <StatusBox title="Lane Swimming" status="positive" label="YES" description="Open now" />
      <StatusBox title="Kids Pool" status="negative" label="NO" description="Closed today" />
    </div>
}`,...u.parameters?.docs?.source}}},d=[`Positive`,`Negative`,`Warning`,`Info`,`Grid`]}))();export{u as Grid,l as Info,s as Negative,o as Positive,c as Warning,d as __namedExportsOrder,a as default};