var m=Object.defineProperty;var x=(r,e,t)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var w=(r,e,t)=>(x(r,typeof e!="symbol"?e+"":e,t),t);import{_ as b,u as T,g as S,o as i,c as a,b as l,F as u,f as k,i as W,a as y,d as D,r as h,j as f}from"./app.b60eae1a.js";import{W as C}from"./Work.14c2caea.js";import{S as O,g as _}from"./index.0d2dceac.js";class z{constructor(e){w(this,"_works",[]);this._works=e}get worksOrigin(){return this._works}get works(){const e=this._works.map(t=>new C(t));return e.sort((t,o)=>o.priority-t.priority),e}}const B=600,M="worksTrigger",$={name:"Works",setup(){const r=T().value,{works:{zh:e,en:t}}=S().value,o=r.lang==="en-US"?t:e;return{works:new z(o).works}},data(){return{st:null,tl:null,isTouch:!0,resizeObserver:null,workSectionCount:0,activeWork:0}},mounted(){this.resizeObserver=new ResizeObserver(()=>{this.resetTrigger()}),this.resizeObserver.observe(document.getElementById("app")),this.$emitter.on("workSectionReady",()=>{this.workSectionCount++,this.workSectionCount===this.works.length&&this.resetTrigger()})},updated(){this.resetTrigger()},beforeUnmount(){this.disableTrigger(),this.resizeObserver.disconnect(),this.resizeObserver=null},methods:{setTrigger(){if(typeof window=="undefined"||(this.isTouch=window.innerWidth<1280||O.isTouch>0,this.isTouch))return;const{trigger:r,target:e}=this.$refs;if(!r||!e)return;const t=e.getBoundingClientRect().width-window.innerWidth,o=(this.works.length-1)*B;if(this.tl||t<=0)return;const d={id:M,trigger:r,start:"top top",end:`+=${o}`,scrub:!0,pin:!0,pinnedContainer:r},s=_.timeline({scrollTrigger:{...d}}),g=t/(this.works.length-1);s.addLabel("work-0");for(let n=1;n<this.works.length;n++)s.to(e,{x:-n*g}),s.addLabel(`work-${n}`);s.addLabel("end"),window.tl=s,this.st=s.scrollTrigger,this.tl=s},resetTrigger(){this.disableTrigger(),this.setTrigger()},disableTrigger(){!this.tl||(this.tl.scrollTrigger.kill(),this.tl.kill(),this.tl=null)},handleScrollDown(){const{start:r,end:e}=this.tl.scrollTrigger;window.scrollY+300<r&&_.to(window,{duration:.3,scrollTo:r})}}},L={id:"works",class:"relative"},E={key:0,class:"pt-10 pb-16 px-5"},N=l("h3",{class:"text-6xl font-cursive text-center"},"My Works",-1),R={class:"grid grid-cols-1 mt-10 gap-8 md:grid-cols-2 lg:grid-cols-3"},U={key:1,ref:"trigger",class:"w-screen max-w-full overflow-x-hidden"},V={class:"flex flex-col h-screen"},F={class:"text-6xl font-cursive text-center pt-10"},I=D("My Works "),j={ref:"target",class:"flex flex-1 flex-wrap pt-10 w-fit flex-nowrap"};function P(r,e,t,o,d,s){const g=h("WorkSectionMobile"),n=h("svg-icon"),p=h("WorkSectionDesktop");return i(),a("div",L,[d.isTouch?(i(),a("div",E,[N,l("div",R,[(i(!0),a(u,null,k(o.works,(c,v)=>(i(),f(g,{ref_for:!0,ref:"workSection",work:c},null,8,["work"]))),256))])])):(i(),a("div",U,[l("div",V,[l("h3",F,[I,l("button",{class:"inline-block w-10 h-10 animate-bounce",onClick:e[0]||(e[0]=W((...c)=>s.handleScrollDown&&s.handleScrollDown(...c),["prevent"]))},[y(n,{name:"scroll",color:"$000"})])]),l("div",j,[(i(!0),a(u,null,k(o.works,(c,v)=>(i(),f(p,{ref_for:!0,ref:"workSection",work:c,class:"relative w-screen h-[calc(100%-30px)] max-h-40vh work"},null,8,["work"]))),256))],512)])],512))])}var A=b($,[["render",P],["__file","Works.vue"]]);export{A as default};
