import{g as o}from"./index.0d2dceac.js";import{_ as c,e as i,o as l,c as d,b as u,a as f,j as p,n as _,i as h,r as m}from"./app.8719042f.js";const w={name:"Intro",setup(){return{start:i(!1)}},mounted(){this.$emitter.on("introOver",()=>{this.$route.hash||window.scrollY>30||o.to(window,{duration:.6,scrollTo:100,ease:"power2.out"})}),this.$nextTick(()=>{setTimeout(()=>{this.start=!0,setTimeout(()=>{this.$emitter.emit("introOver")},900)},500)})},methods:{handleScrollDown(){o.to(window,{duration:.3,scrollTo:"#about",ease:"back.out(1.7)"}).then(()=>{typeof window!==void 0&&window.history.pushState(void 0,void 0,"./#about")})}}},v=h('<h1 class="font-cursive text-9xl" data-v-c4c01f76><span class="!delay-300" data-v-c4c01f76>HCD</span></h1><hr class="border-[3px] border-gray-700 my-3 max-w-[500px] transition-all duration-300" data-v-c4c01f76><h1 class="font-cursive text-8xl" data-v-c4c01f76><span class="!delay-300" data-v-c4c01f76>Portfolio</span></h1>',3);function x(a,t,y,s,b,e){const r=m("scroll-down-icon");return l(),d("div",{class:_(["flex relative h-[80vh] w-screen max-w-full flex-col justify-center items-center",`${s.start?"active opacity-100":"opacity-0"}`])},[v,u("button",{onClick:t[0]||(t[0]=p((...n)=>e.handleScrollDown&&e.handleScrollDown(...n),["prevent"])),class:"absolute left-[50%-48px] bottom-5 w-[48px] cursor-pointer transition-opacity duration-800 delay-1000"},[f(r,{class:"animate-bounce fill-gray-600 w-full h-auto"})])],2)}var g=c(w,[["render",x],["__scopeId","data-v-c4c01f76"],["__file","Intro.vue"]]);export{g as default};
