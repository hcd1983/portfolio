import{g as b}from"./index.0d2dceac.js";import{_ as H,k as M,o,c as s,b as i,m as d,a as u,n as f,F as E,h as L,r,w as S,l as z,t as B}from"./app.49b70051.js";const A={name:"MainMenu",setup(){return{active:M(!1),menu:[{to:"/",title:"Home"},{to:"/#about",title:"About"},{to:"/#skills",title:"Skills"},{to:"/#experience",title:"Experience"},{to:"/#works",title:"Works"}]}},mounted(){typeof window!="undefined"&&window.addEventListener("hashchange",this.handleHashChange)},beforeUnmount(){typeof window!="undefined"&&window.removeEventListener("hashchange",this.handleHashChange)},methods:{handleLinkClick(n,t,c){this.active=!1,setTimeout(()=>{if(this.$route.path==="/"){const{fullPath:m,hash:a}=c;history.pushState(void 0,void 0,`./${a}`),this.changeHash(a)}else t()},500)},changeHash(n){return new Promise(t=>{b.to(window,{duration:.6,scrollTo:n||0,ease:"power2.out"}).then(()=>{t()})})},handleHashChange(){console.log("changed");const{hash:n}=window.location;this.changeHash(n)}}},F=["active","href","onClick"];function N(n,t,c,e,m,a){const l=r("svg-icon"),v=r("grid-bg2"),p=r("router-link");return o(),s("header",null,[i("button",{onClick:t[0]||(t[0]=h=>e.active=!e.active),class:"w-8 h-8 fixed top-5 right-5 cursor-pointer z-50 opacity-80 hover:opacity-100"},[e.active?(o(),d(l,{key:1,name:"menu-close",color:"333"})):(o(),d(l,{key:0,name:"menu-open",color:"#333"}))]),i("nav",{class:f(["fixed h-screen w-screen bg-gray-300 z-40 flex items-start pt-20 md:pt-0 md:items-center justify-center top-0 transition-all duration-500 ease-out",{"left-0":e.active,"left-full":!e.active}])},[u(v),i("ul",{class:f(["relative z-10 font-cursive text-6xl md:text-7xl flex flex-col gap-[20px] text-gray-600 transition-opacity duration-300 delay-500",{"opacity-30":!e.active,"opacity-100":e.active}])},[(o(!0),s(E,null,L(e.menu,({to:h,title:g},_)=>(o(),s("li",{key:_},[u(p,{to:h,custom:""},{default:S(({href:k,route:w,navigate:x,isActive:y,isExactActive:P})=>[i("a",{active:y,href:k,onClick:z(C=>a.handleLinkClick(C,x,w),["prevent"]),class:"hover:text-black hover:scale-125 duration-500"},B(g),9,F)]),_:2},1032,["to"])]))),128))],2)],2)])}var W=H(A,[["render",N],["__file","MainMenu.vue"]]);export{W as default};
