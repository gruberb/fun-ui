import{a as e,n as t}from"./chunk-BneVvdWh.js";import{O as n}from"./iframe-BWKH6M8r.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./Badge-Bo328CfT.js";import{n as o,t as s}from"./Button-C-ZE5J3y.js";import{n as c,t as l}from"./Card-r0EwTEWC.js";import{n as u,t as d}from"./DataTable-CMSM3UcQ.js";import{n as f,t as p}from"./LoadingSpinner-CUdtiSX-.js";import{n as m,t as h}from"./EmptyState-CspyLqIF.js";import{n as g,t as _}from"./ErrorMessage-DifFW7Sb.js";import{n as v,t as y}from"./PageHeader-CU7NTGIA.js";import{n as b,t as x}from"./TabNavigation-CFARjYIT.js";import{n as S,t as C}from"./StatusBox-B2aw8N2q.js";import{n as w,t as T}from"./StarRating-CErF5P7x.js";import{n as E,t as D}from"./StatCard-C6xQElbC.js";import{n as O,t as k}from"./LiveIndicator-D-rrLmN1.js";import{n as A,t as j}from"./Tooltip-BmyRPXa4.js";var M,N,P,F,I,L,R,z,B,V,H,U;t((()=>{M=e(n(),1),o(),c(),i(),f(),g(),v(),b(),S(),m(),w(),u(),E(),O(),A(),N=r(),P=()=>null,F={title:`Composition/Kitchen Sink`,component:P},I=[{key:`rank`,header:`#`},{key:`name`,header:`Name`},{key:`score`,header:`Score`,sortable:!0},{key:`status`,header:`Status`}],L=[{id:1,rank:1,name:`Alpha`,score:95,status:`Active`},{id:2,rank:2,name:`Beta`,score:88,status:`Active`},{id:3,rank:3,name:`Gamma`,score:76,status:`Inactive`},{id:4,rank:4,name:`Delta`,score:71,status:`Active`},{id:5,rank:5,name:`Epsilon`,score:64,status:`Inactive`}],R={render:()=>{let[e,t]=(0,M.useState)(`overview`),[n,r]=(0,M.useState)(4);return(0,N.jsxs)(`div`,{style:{maxWidth:900,margin:`0 auto`},children:[(0,N.jsx)(y,{title:`Dashboard`,subtitle:`Project overview`,badge:`Beta`,children:(0,N.jsx)(s,{size:`sm`,variant:`secondary`,children:`Settings`})}),(0,N.jsx)(x,{tabs:[{id:`overview`,label:`Overview`},{id:`rankings`,label:`Rankings`},{id:`feedback`,label:`Feedback`}],activeTab:e,onTabChange:t}),e===`overview`&&(0,N.jsxs)(`div`,{children:[(0,N.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 1fr)`,gap:`1rem`,marginBottom:`1.5rem`},children:[(0,N.jsx)(D,{label:`Users`,value:`1,284`,trend:`up`}),(0,N.jsx)(D,{label:`Revenue`,value:`$42k`,trend:`up`}),(0,N.jsx)(D,{label:`Churn`,value:`2.1%`,trend:`down`})]}),(0,N.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`1rem`,marginBottom:`1.5rem`},children:[(0,N.jsx)(C,{title:`API`,status:`positive`,label:`UP`,description:`All systems operational`}),(0,N.jsx)(C,{title:`Deploy`,status:`info`,label:`LIVE`,description:`v2.4.1 deployed`})]}),(0,N.jsxs)(l,{children:[(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:`1rem`},children:[(0,N.jsx)(`h3`,{style:{margin:0},children:`Activity`}),(0,N.jsx)(k,{})]}),(0,N.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,flexWrap:`wrap`},children:[(0,N.jsx)(a,{variant:`success`,children:`Deployed`}),(0,N.jsx)(a,{variant:`warning`,children:`Review`}),(0,N.jsx)(a,{variant:`primary`,children:`New`}),(0,N.jsx)(j,{text:`3 issues need attention`,children:(0,N.jsx)(a,{variant:`danger`,children:`3 Issues`})})]})]})]}),e===`rankings`&&(0,N.jsx)(d,{title:`Leaderboard`,subtitle:`Top performers this week`,dateBadge:`Apr 7, 2026`,columns:I,data:L,initialSortKey:`score`}),e===`feedback`&&(0,N.jsxs)(l,{children:[(0,N.jsx)(`h3`,{style:{marginTop:0},children:`Rate your experience`}),(0,N.jsx)(T,{value:n,onChange:r}),(0,N.jsxs)(`p`,{style:{fontSize:`0.875rem`,marginTop:`0.75rem`,color:`var(--color-brutal-gray)`},children:[n,`/5 stars selected`]})]})]})}},z={render:()=>(0,N.jsxs)(`div`,{style:{maxWidth:900,margin:`0 auto`},children:[(0,N.jsx)(y,{title:`Rankings`,subtitle:`Loading data...`}),(0,N.jsx)(d,{title:`Season Rankings`,columns:I,data:[],isLoading:!0})]})},B={render:()=>(0,N.jsxs)(`div`,{style:{maxWidth:900,margin:`0 auto`},children:[(0,N.jsx)(y,{title:`Rankings`}),(0,N.jsx)(_,{message:`Failed to load ranking data.`,onRetry:()=>alert(`Retrying...`)})]})},V={render:()=>(0,N.jsxs)(`div`,{style:{maxWidth:900,margin:`0 auto`},children:[(0,N.jsx)(y,{title:`Search Results`}),(0,N.jsx)(l,{children:(0,N.jsx)(h,{heading:`No results found`,description:`Try adjusting your search query or filters.`,action:{label:`Clear Filters`,onClick:()=>{}}})})]})},H={render:()=>(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h2`,{style:{marginBottom:`1rem`},children:`Buttons`}),(0,N.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,flexWrap:`wrap`,marginBottom:`1.5rem`},children:[(0,N.jsx)(s,{variant:`primary`,size:`sm`,children:`Small Primary`}),(0,N.jsx)(s,{variant:`primary`,children:`Medium Primary`}),(0,N.jsx)(s,{variant:`primary`,size:`lg`,children:`Large Primary`})]}),(0,N.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,flexWrap:`wrap`,marginBottom:`1.5rem`},children:[(0,N.jsx)(s,{variant:`secondary`,size:`sm`,children:`Small Secondary`}),(0,N.jsx)(s,{variant:`secondary`,children:`Medium Secondary`}),(0,N.jsx)(s,{variant:`secondary`,size:`lg`,children:`Large Secondary`})]}),(0,N.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,flexWrap:`wrap`,marginBottom:`1.5rem`},children:[(0,N.jsx)(s,{variant:`danger`,children:`Danger`}),(0,N.jsx)(s,{variant:`ghost`,children:`Ghost`}),(0,N.jsx)(s,{disabled:!0,children:`Disabled`})]}),(0,N.jsx)(`h2`,{style:{marginBottom:`1rem`},children:`Badges`}),(0,N.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,flexWrap:`wrap`,marginBottom:`1.5rem`},children:[(0,N.jsx)(a,{variant:`primary`,children:`Primary`}),(0,N.jsx)(a,{variant:`success`,children:`Success`}),(0,N.jsx)(a,{variant:`warning`,children:`Warning`}),(0,N.jsx)(a,{variant:`danger`,children:`Danger`}),(0,N.jsx)(a,{variant:`info`,children:`Info`}),(0,N.jsx)(a,{variant:`neutral`,children:`Neutral`})]}),(0,N.jsx)(`h2`,{style:{marginBottom:`1rem`},children:`Loading`}),(0,N.jsxs)(`div`,{style:{display:`flex`,gap:`3rem`},children:[(0,N.jsx)(p,{size:`small`,message:`Small`}),(0,N.jsx)(p,{size:`medium`,message:`Medium`}),(0,N.jsx)(p,{size:`large`,message:`Large`})]})]})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [tab, setTab] = useState("overview");
    const [rating, setRating] = useState(4);
    return <div style={{
      maxWidth: 900,
      margin: "0 auto"
    }}>
        <PageHeader title="Dashboard" subtitle="Project overview" badge="Beta">
          <Button size="sm" variant="secondary">Settings</Button>
        </PageHeader>

        <TabNavigation tabs={[{
        id: "overview",
        label: "Overview"
      }, {
        id: "rankings",
        label: "Rankings"
      }, {
        id: "feedback",
        label: "Feedback"
      }]} activeTab={tab} onTabChange={setTab} />

        {tab === "overview" && <div>
            <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
          marginBottom: "1.5rem"
        }}>
              <StatCard label="Users" value="1,284" trend="up" />
              <StatCard label="Revenue" value="$42k" trend="up" />
              <StatCard label="Churn" value="2.1%" trend="down" />
            </div>

            <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          marginBottom: "1.5rem"
        }}>
              <StatusBox title="API" status="positive" label="UP" description="All systems operational" />
              <StatusBox title="Deploy" status="info" label="LIVE" description="v2.4.1 deployed" />
            </div>

            <Card>
              <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1rem"
          }}>
                <h3 style={{
              margin: 0
            }}>Activity</h3>
                <LiveIndicator />
              </div>
              <div style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap"
          }}>
                <Badge variant="success">Deployed</Badge>
                <Badge variant="warning">Review</Badge>
                <Badge variant="primary">New</Badge>
                <Tooltip text="3 issues need attention">
                  <Badge variant="danger">3 Issues</Badge>
                </Tooltip>
              </div>
            </Card>
          </div>}

        {tab === "rankings" && <DataTable title="Leaderboard" subtitle="Top performers this week" dateBadge="Apr 7, 2026" columns={columns} data={data} initialSortKey="score" />}

        {tab === "feedback" && <Card>
            <h3 style={{
          marginTop: 0
        }}>Rate your experience</h3>
            <StarRating value={rating} onChange={setRating} />
            <p style={{
          fontSize: "0.875rem",
          marginTop: "0.75rem",
          color: "var(--color-brutal-gray)"
        }}>
              {rating}/5 stars selected
            </p>
          </Card>}
      </div>;
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 900,
    margin: "0 auto"
  }}>
      <PageHeader title="Rankings" subtitle="Loading data..." />
      <DataTable title="Season Rankings" columns={columns} data={[]} isLoading />
    </div>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 900,
    margin: "0 auto"
  }}>
      <PageHeader title="Rankings" />
      <ErrorMessage message="Failed to load ranking data." onRetry={() => alert("Retrying...")} />
    </div>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 900,
    margin: "0 auto"
  }}>
      <PageHeader title="Search Results" />
      <Card>
        <EmptyState heading="No results found" description="Try adjusting your search query or filters." action={{
        label: "Clear Filters",
        onClick: () => {}
      }} />
      </Card>
    </div>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <h2 style={{
      marginBottom: "1rem"
    }}>Buttons</h2>
      <div style={{
      display: "flex",
      gap: "1rem",
      flexWrap: "wrap",
      marginBottom: "1.5rem"
    }}>
        <Button variant="primary" size="sm">Small Primary</Button>
        <Button variant="primary">Medium Primary</Button>
        <Button variant="primary" size="lg">Large Primary</Button>
      </div>
      <div style={{
      display: "flex",
      gap: "1rem",
      flexWrap: "wrap",
      marginBottom: "1.5rem"
    }}>
        <Button variant="secondary" size="sm">Small Secondary</Button>
        <Button variant="secondary">Medium Secondary</Button>
        <Button variant="secondary" size="lg">Large Secondary</Button>
      </div>
      <div style={{
      display: "flex",
      gap: "1rem",
      flexWrap: "wrap",
      marginBottom: "1.5rem"
    }}>
        <Button variant="danger">Danger</Button>
        <Button variant="ghost">Ghost</Button>
        <Button disabled>Disabled</Button>
      </div>

      <h2 style={{
      marginBottom: "1rem"
    }}>Badges</h2>
      <div style={{
      display: "flex",
      gap: "0.5rem",
      flexWrap: "wrap",
      marginBottom: "1.5rem"
    }}>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="neutral">Neutral</Badge>
      </div>

      <h2 style={{
      marginBottom: "1rem"
    }}>Loading</h2>
      <div style={{
      display: "flex",
      gap: "3rem"
    }}>
        <LoadingSpinner size="small" message="Small" />
        <LoadingSpinner size="medium" message="Medium" />
        <LoadingSpinner size="large" message="Large" />
      </div>
    </div>
}`,...H.parameters?.docs?.source}}},U=[`FullPage`,`LoadingState`,`ErrorState`,`EmptyDataState`,`AllButtons`]}))();export{H as AllButtons,V as EmptyDataState,B as ErrorState,R as FullPage,z as LoadingState,U as __namedExportsOrder,F as default};