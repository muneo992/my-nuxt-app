import{K as e}from"./9Sl47L5G.js";const h=async({route:t,redirect:a})=>{const i=await e();if(t.path.startsWith("/admin")&&!await i.isAuthenticated())return a("/login")};export{h as default};
