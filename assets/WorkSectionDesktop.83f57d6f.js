import{S as v}from"./index.0d2dceac.js";import{W as S}from"./Work.14c2caea.js";import{_ as L,o as n,c as o,b as t,k as W,w as E,v as s,d as w,t as r,a,F as k,g as m,n as f,r as y}from"./app.a243a0ae.js";const T={name:"WorkSectionDesktop",props:{work:{type:S}},data(){return{active:!0}},mounted(){this.$nextTick(()=>{this.$emitter.emit("workSectionReady")}),v.addEventListener("scrollEnd",()=>{window.removeEventListener("scroll",this.handleScroll)}),v.addEventListener("scrollStart",()=>{window.addEventListener("scroll",this.handleScroll)})},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){const l=this.$refs.section;if(!l)return;const{x:c,width:e}=l.getBoundingClientRect();c<-window.innerWidth/3||c>window.innerWidth*.7?this.active=!1:this.active=!0}}},j={class:"flex-1 bg-gray-200 relative"},B={class:"w-[130px] h-[130px]"},C=["src","alt"],D={class:"max-w-[50%] w-[500px] px-8 py-10 flex flex-col justify-between bg-gray-100"},R={class:"flex items-center justify-between"},p=["href"],N={class:"h-6 w-6"},V=["innerHTML"],I={class:"mt-3"},z={class:"mt-1"},F=["href","target"],H={class:"h-3 w-3 inline-block ml-1"},M={key:0},U={class:"flex items-center justify-center gap-[10px]"};function q(l,c,e,A,h,G){const i=y("svg-icon"),g=y("overlay");return n(),o("section",{ref:"section",class:f(["transition duration-300",`${h.active?"active":""}`])},[t("div",{class:f(["absolute w-full h-full inset-0 flex transition duration-300",`${h.active?"":"opacity-30 scale-90"}`])},[t("div",j,[e.work.overlayIcon?(n(),W(g,{key:0,class:"bg-[rgba(0,0,0,.6)] flex items-center justify-center"},{default:E(()=>[t("div",B,[a(i,{name:e.work.overlayIcon,color:"#000"},null,8,["name"])])]),_:1})):s("",!0),e.work.cover?(n(),o("img",{key:1,src:e.work.cover,alt:e.work.title,class:"object-cover w-full h-full",loading:"lazy"},null,8,C)):s("",!0)]),t("div",D,[t("div",null,[t("h2",R,[w(r(e.work.title)+" ",1),e.work.link?(n(),o("a",{key:0,href:e.work.link,target:"_blank"},[t("div",N,[a(i,{name:"link",color:"#000"})])],8,p)):s("",!0)]),e.work.contentRendered?(n(),o("div",{key:0,class:"content mt-6",innerHTML:e.work.contentRendered},null,8,V)):s("",!0),e.work.linkList&&e.work.linkList.length?(n(),o(k,{key:1},[t("h3",I,r(l.$t("Related Links")),1),t("ul",z,[(n(!0),o(k,null,m(e.work.linkList,({title:d,link:_,description:u,target:x},b)=>(n(),o("li",{key:b},[t("h4",null,[t("a",{href:_,target:x||"_blank"},[w(r(d)+" ",1),t("div",H,[a(i,{name:"link",color:"#000"})])],8,F)]),u?(n(),o("p",M,r(u),1)):s("",!0)]))),128))])],64)):s("",!0)]),t("div",U,[(n(!0),o(k,null,m(e.work.skillTags,(d,_)=>(n(),o("div",{key:`icon-${_}`,class:"h-12 w-12"},[a(i,{name:d,color:"#999"},null,8,["name"])]))),128))])])],2)],2)}var P=L(T,[["render",q],["__scopeId","data-v-2655fe2e"],["__file","WorkSectionDesktop.vue"]]);export{P as default};
