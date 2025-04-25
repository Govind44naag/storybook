import{j as k}from"./jsx-runtime-DiklIkkE.js";import"./index-DRjF_FHU.js";const G={h1:"text-6xl font-bold",h2:"text-5xl font-bold",h3:"text-4xl font-bold",h4:"text-3xl font-bold",h5:"text-2xl font-bold",h6:"text-xl font-bold",p:"text-base",label:"text-sm font-medium",caption:"text-xs",helper:"text-xs text-gray-500"},K={light:"font-light",regular:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"},Q={primary:"text-primary-600",secondary:"text-gray-600",error:"text-red-600",success:"text-green-600",warning:"text-yellow-600",info:"text-blue-600"},A=({variant:c,weight:P="regular",color:V="primary",className:B="",children:F,as:U,...z})=>{const D=U||c,J=G[c],O=K[P],X=Q[V];return k.jsx(D,{className:`${J} ${O} ${X} ${B}`,...z,children:F})};A.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{variant:{required:!0,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'label' | 'caption' | 'helper'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'p'"},{name:"literal",value:"'label'"},{name:"literal",value:"'caption'"},{name:"literal",value:"'helper'"}]},description:""},weight:{required:!1,tsType:{name:"union",raw:"'light' | 'regular' | 'medium' | 'semibold' | 'bold'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'regular'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"}]},description:"",defaultValue:{value:"'regular'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'info'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},as:{required:!1,tsType:{name:"JSX.IntrinsicElements"},description:""}}};const ee={title:"Design System/Typography",component:A,parameters:{layout:"centered",docs:{description:{component:`
The Typography component provides a consistent and accessible way to display text across the application.
It supports various variants, weights, and colors, and can be customized using the \`as\` prop to render as different HTML elements.

### Accessibility
- Uses semantic HTML elements by default
- Maintains proper heading hierarchy
- Supports screen readers with appropriate ARIA attributes
- Ensures sufficient color contrast

### Usage
\`\`\`tsx
<Typography variant="h1">Heading 1</Typography>
<Typography variant="p" color="secondary">Paragraph text</Typography>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["h1","h2","h3","h4","h5","h6","p","label","caption","helper"],description:"The typography variant to use"},weight:{control:"select",options:["light","regular","medium","semibold","bold"],description:"The font weight to apply"},color:{control:"select",options:["primary","secondary","error","success","warning","info"],description:"The text color to apply"},as:{control:"text",description:"The HTML element to render as"}}},e={args:{variant:"h1",children:"Heading 1"}},a={args:{variant:"h2",children:"Heading 2"}},r={args:{variant:"p",children:"This is a paragraph of text that demonstrates the typography component."}},t={args:{variant:"label",children:"Form Label"}},s={args:{variant:"caption",children:"Caption text"}},n={args:{variant:"helper",children:"Helper text for form fields"}},o={args:{variant:"p",weight:"bold",children:"Bold paragraph text"}},l={args:{variant:"p",color:"error",children:"Error message text"}},i={args:{variant:"p",as:"span",children:"This text is rendered as a span element"}};var p,d,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'h1',
    children: 'Heading 1'
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var h,u,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'h2',
    children: 'Heading 2'
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,v,x;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'p',
    children: 'This is a paragraph of text that demonstrates the typography component.'
  }
}`,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var f,b,T;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'label',
    children: 'Form Label'
  }
}`,...(T=(b=t.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var w,C,H;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'caption',
    children: 'Caption text'
  }
}`,...(H=(C=s.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var S,E,L;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'helper',
    children: 'Helper text for form fields'
  }
}`,...(L=(E=n.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var q,R,W;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'p',
    weight: 'bold',
    children: 'Bold paragraph text'
  }
}`,...(W=(R=o.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var N,I,M;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'p',
    color: 'error',
    children: 'Error message text'
  }
}`,...(M=(I=l.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var _,$,j;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'p',
    as: 'span',
    children: 'This text is rendered as a span element'
  }
}`,...(j=($=i.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};const ae=["Heading1","Heading2","Paragraph","Label","Caption","HelperText","WithCustomWeight","WithCustomColor","CustomElement"];export{s as Caption,i as CustomElement,e as Heading1,a as Heading2,n as HelperText,t as Label,r as Paragraph,l as WithCustomColor,o as WithCustomWeight,ae as __namedExportsOrder,ee as default};
