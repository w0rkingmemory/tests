import{i as a,k as n,j as e}from"./index-0b196f85.js";import{E as d,R as p,C as l,a as o,B as c}from"./row-ff4445de.js";import{i as h,T as x}from"./index-c4cfdc33.js";import"./CloseCircleFilled-1f3343a3.js";const y=()=>{const{token:t}=h.useToken(),i=a(s=>s.tests),r=n();return i.tests.length==0?e.jsx(d,{}):e.jsx(p,{gutter:[24,24],children:i.tests.map(s=>e.jsx(l,{span:24,children:e.jsxs(o,{hoverable:!0,onDoubleClick:()=>{r(`${s.id}`)},cover:e.jsx("img",{src:s.icon||"",height:150,width:150,style:{padding:t.paddingLG}}),children:[e.jsx(o.Meta,{title:s.title,description:e.jsx(x.Text,{style:{whiteSpace:"pre-line"},type:"secondary",children:s.description})}),e.jsx(c,{size:"middle",type:"primary",onClick:()=>{r(`${s.id}`)},style:{width:"100%",marginTop:t.marginMD},children:"Пройти тест"})]})},`test.${s.id}`))})};export{y as default};
