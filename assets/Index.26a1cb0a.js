import{_ as i,h as c,o as _,c as l,a as n,n as p,r as o}from"./app.2528b20d.js";const d={name:"Layout",setup(){return{introOver:c(!1)}},mounted(){this.$emitter.on("introOver",()=>{console.log("works"),this.introOver=!0})}},m={id:"wrap"};function u(e,v,f,t,O,h){const r=o("MainMenu"),a=o("intro"),s=o("Content");return _(),l("div",m,[n(r),n(a),n(s,{id:"content",class:p(["z-10 relative transition-opacity duration-300",{"opacity-0":!t.introOver,"opacity-100":t.introOver}])},null,8,["class"])])}var y=i(d,[["render",u],["__file","Index.vue"]]);export{y as default};
