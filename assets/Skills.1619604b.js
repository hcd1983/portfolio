import{_ as h,e as v,h as f,m as x,o as t,c as a,b as s,F as i,g as c,t as k,a as b,p as S,q as w,r as y,u as D}from"./app.7366c57b.js";const I={name:"Skills",setup(){const e=v(null),n=D(),l=f().value;return x(n,o=>{e.value=o.lang==="en-US"?l.globalData.skills.en:l.globalData.skills.zh},{immediate:!0}),{skills:e}}},$=e=>(S("data-v-2cea5f8e"),e=e(),w(),e),B={id:"skills",class:"relative block py-10 pb-20"},L={class:"container max-w-[1200px] relative z-10"},z=$(()=>s("h3",{class:"text-6xl font-cursive pt-3 mb-10 text-center"},"Skills",-1)),F={class:"grid w-full gap-[20px] md:grid-cols-2 lg:grid-cols-3 md:gap-[10px]"},H={class:"mb-8 text-2xl font-semibold tracking-tight text-gray-900 tracking-wide"},M=["innerHTML"],N={class:"flex gap-[10px] mt-3"};function T(e,n,l,o,V,j){const r=y("svg-icon");return t(),a("section",B,[s("div",L,[z,s("div",F,[(t(!0),a(i,null,c(o.skills,({title:d,icons:_,description:p},u)=>(t(),a("section",{key:u,class:"bg-white rounded-lg border border-gray-200 shadow-md p-5 flex flex-col justify-between h-full"},[s("div",null,[s("h5",H,k(d),1),s("div",{class:"mb-3 font-normal text-gray-700 description",innerHTML:p},null,8,M)]),s("div",N,[(t(!0),a(i,null,c(_,(g,m)=>(t(),a("div",{key:`icon-${m}`,class:"h-12 w-12 md:w-10 md:h-10"},[b(r,{name:g,color:"#999"},null,8,["name"])]))),128))])]))),128))])])])}var C=h(I,[["render",T],["__scopeId","data-v-2cea5f8e"],["__file","Skills.vue"]]);export{C as default};