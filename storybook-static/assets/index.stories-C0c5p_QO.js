import{j as s}from"./jsx-runtime-u17CrQMm.js";import{B as m}from"./index-DTHCuK_Y.js";import{B as e}from"./index-Czw_kLvB.js";import"./index-cIuiytXw.js";import"./index-CAPQUFwa.js";const p={title:"Components/Button",component:e,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{children:"Click me",variant:"solid",size:"md",colorscheme:"primary",className:""}},o={args:{children:"Click me",variant:"outline",size:"md",colorscheme:"primary",className:""}},n={args:{children:"Click me",variant:"ghost",size:"md",colorscheme:"primary",className:""}},c={render:r=>s.jsxs(m,{className:"flex flex-col",children:[s.jsx(e,{...r,variant:"solid",colorscheme:"primary",className:"my-2",children:"Primary"}),s.jsx(e,{...r,variant:"solid",colorscheme:"secondary",className:"my-2",children:"Secondary"}),s.jsx(e,{...r,variant:"solid",colorscheme:"success",className:"my-2",children:"Success"}),s.jsx(e,{...r,variant:"solid",colorscheme:"warning",className:"my-2",children:"Warning"}),s.jsx(e,{...r,variant:"solid",colorscheme:"danger",className:"my-2",children:"Danger"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    variant: "solid",
    size: "md",
    colorscheme: "primary",
    className: ""
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    variant: "outline",
    size: "md",
    colorscheme: "primary",
    className: ""
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    variant: "ghost",
    size: "md",
    colorscheme: "primary",
    className: ""
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: ButtonProps) => <Box className="flex flex-col">
      <Button {...args} variant="solid" colorscheme="primary" className="my-2">
        Primary
      </Button>
      <Button {...args} variant="solid" colorscheme="secondary" className="my-2">
        Secondary
      </Button>
      <Button {...args} variant="solid" colorscheme="success" className="my-2">
        Success
      </Button>
      <Button {...args} variant="solid" colorscheme="warning" className="my-2">
        Warning
      </Button>
      <Button {...args} variant="solid" colorscheme="danger" className="my-2">
        Danger
      </Button>
    </Box>
}`,...c.parameters?.docs?.source}}};const h=["Solid","Outline","Ghost","Statuses"];export{n as Ghost,o as Outline,a as Solid,c as Statuses,h as __namedExportsOrder,p as default};
