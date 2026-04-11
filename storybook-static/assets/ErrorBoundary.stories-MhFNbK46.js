import{a as e,n as t}from"./chunk-BneVvdWh.js";import{O as n}from"./iframe-BWKH6M8r.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";var i,a,o,s=t((()=>{i=e(n(),1),a=r(),o=class extends i.Component{state={hasError:!1};static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error(`Uncaught error:`,e,t)}render(){return this.state.hasError?this.props.fallback?this.props.fallback:(0,a.jsx)(`div`,{className:`min-h-[400px] flex items-center justify-center p-8`,children:(0,a.jsxs)(`div`,{className:`brutal-card p-8 max-w-md w-full text-center`,children:[(0,a.jsx)(`h2`,{className:`text-xl mb-2`,children:`Something went wrong`}),(0,a.jsx)(`p`,{className:`text-sm text-[var(--color-brutal-gray)] mb-4`,children:`An unexpected error has occurred.`}),(0,a.jsx)(`div`,{className:`bg-[var(--color-brutal-red)]/10 border-2 border-[var(--color-brutal-red)] text-red-700 px-4 py-3 mb-4 text-sm text-left`,children:this.state.error?.message||`Unknown error`}),(0,a.jsx)(`button`,{onClick:()=>window.location.reload(),className:`brutal-btn brutal-btn-primary px-5 py-2.5 text-sm`,children:`Reload Page`})]})}):this.props.children}},o.__docgenInfo={description:``,methods:[],displayName:`ErrorBoundary`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},fallback:{required:!1,tsType:{name:`ReactNode`},description:``}}}})),c,l,u,d,f,p,m;t((()=>{s(),c=r(),l=()=>{throw Error(`Test error: something broke!`)},u={title:`Feedback/ErrorBoundary`,component:o},d={args:{children:(0,c.jsx)(`p`,{children:`This content renders normally because no error is thrown.`})}},f={render:()=>(0,c.jsx)(o,{children:(0,c.jsx)(l,{})})},p={render:()=>(0,c.jsx)(o,{fallback:(0,c.jsxs)(`div`,{className:`brutal-card p-6 text-center`,children:[(0,c.jsx)(`h2`,{children:`Custom Fallback`}),(0,c.jsx)(`p`,{className:`text-sm`,children:`You can provide your own fallback UI.`})]}),children:(0,c.jsx)(l,{})})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: <p>This content renders normally because no error is thrown.</p>
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <ErrorBoundary>
      <ThrowError />
    </ErrorBoundary>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <ErrorBoundary fallback={<div className="brutal-card p-6 text-center">
          <h2>Custom Fallback</h2>
          <p className="text-sm">You can provide your own fallback UI.</p>
        </div>}>
      <ThrowError />
    </ErrorBoundary>
}`,...p.parameters?.docs?.source}}},m=[`Default`,`WithError`,`CustomFallback`]}))();export{p as CustomFallback,d as Default,f as WithError,m as __namedExportsOrder,u as default};