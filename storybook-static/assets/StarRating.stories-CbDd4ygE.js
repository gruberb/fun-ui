import{a as e,n as t}from"./chunk-BneVvdWh.js";import{O as n}from"./iframe-BWKH6M8r.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./StarRating-CErF5P7x.js";var o,s,c,l,u,d,f,p;t((()=>{o=e(n(),1),i(),s=r(),c={title:`Feedback/StarRating`,component:a},l={args:{value:0,onChange:()=>{}}},u={args:{value:3,onChange:()=>{}}},d={render:()=>{let[e,t]=(0,o.useState)(0);return(0,s.jsxs)(`div`,{children:[(0,s.jsx)(a,{value:e,onChange:t}),(0,s.jsx)(`p`,{className:`mt-2 text-sm font-bold uppercase tracking-wider`,children:e>0?`${e} / 5 stars`:`Click to rate`})]})}},f={render:()=>{let[e,t]=(0,o.useState)(0);return(0,s.jsx)(a,{max:10,value:e,onChange:t})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0,
    onChange: () => {}
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    onChange: () => {}
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [rating, setRating] = useState(0);
    return <div>
        <StarRating value={rating} onChange={setRating} />
        <p className="mt-2 text-sm font-bold uppercase tracking-wider">
          {rating > 0 ? \`\${rating} / 5 stars\` : "Click to rate"}
        </p>
      </div>;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [rating, setRating] = useState(0);
    return <StarRating max={10} value={rating} onChange={setRating} />;
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`WithValue`,`Interactive`,`TenStars`]}))();export{l as Default,d as Interactive,f as TenStars,u as WithValue,p as __namedExportsOrder,c as default};