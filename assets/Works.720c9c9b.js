var v=Object.defineProperty;var x=(t,e,r)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var w=(t,e,r)=>(x(t,typeof e!="symbol"?e+"":e,r),r);import{_ as b,h as T,e as S,m as W,o as i,c as d,b as l,F as u,g as k,j as y,a as D,d as C,r as g,k as f,u as O}from"./app.7366c57b.js";import{W as z}from"./Work.14c2caea.js";import{S as B,g as _}from"./index.0d2dceac.js";class M{constructor(e){w(this,"_works",[]);this._works=e}get worksOrigin(){return this._works}get works(){const e=this._works.map(r=>new z(r));return e.sort((r,o)=>o.priority-r.priority),e}}const $=600,L="worksTrigger",E={name:"Works",setup(){const t=O(),{works:{zh:e,en:r}}=T().value,o=S(null);return W(t,c=>{const s=c.lang==="en-US"?r:e;o.value=new M(s).works},{immediate:!0}),{works:o}},data(){return{st:null,tl:null,isTouch:!0,resizeObserver:null,workSectionCount:0,activeWork:0}},mounted(){this.resizeObserver=new ResizeObserver(()=>{this.resetTrigger()}),this.resizeObserver.observe(document.getElementById("app")),this.$emitter.on("workSectionReady",()=>{this.workSectionCount++,this.workSectionCount===this.works.length&&this.resetTrigger()})},updated(){this.resetTrigger()},beforeUnmount(){this.disableTrigger(),this.resizeObserver.disconnect(),this.resizeObserver=null},methods:{setTrigger(){if(typeof window=="undefined"||(this.isTouch=window.innerWidth<1280||B.isTouch>0,this.isTouch))return;const{trigger:t,target:e}=this.$refs;if(!t||!e)return;const r=e.getBoundingClientRect().width-window.innerWidth,o=(this.works.length-1)*$;if(this.tl||r<=0)return;const c={id:L,trigger:t,start:"top top",end:`+=${o}`,scrub:!0,pin:!0,pinnedContainer:t},s=_.timeline({scrollTrigger:{...c}}),h=r/(this.works.length-1);s.addLabel("work-0");for(let n=1;n<this.works.length;n++)s.to(e,{x:-n*h}),s.addLabel(`work-${n}`);s.addLabel("end"),window.tl=s,this.st=s.scrollTrigger,this.tl=s},resetTrigger(){this.disableTrigger(),this.setTrigger()},disableTrigger(){!this.tl||(this.tl.scrollTrigger.kill(),this.tl.kill(),this.tl=null)},handleScrollDown(){const{start:t,end:e}=this.tl.scrollTrigger;window.scrollY+300<t&&_.to(window,{duration:.3,scrollTo:t})}}},N={id:"works",class:"relative"},R={key:0,class:"pt-10 pb-16 px-5"},U=l("h3",{class:"text-6xl font-cursive text-center"},"My Works",-1),V={class:"grid grid-cols-1 mt-10 gap-8 md:grid-cols-2 lg:grid-cols-3"},F={key:1,ref:"trigger",class:"w-screen max-w-full overflow-x-hidden"},I={class:"flex flex-col h-screen"},j={class:"text-6xl font-cursive text-center pt-10"},P=C("My Works "),X={ref:"target",class:"flex flex-1 flex-wrap pt-10 w-fit flex-nowrap"};function Y(t,e,r,o,c,s){const h=g("WorkSectionMobile"),n=g("svg-icon"),p=g("WorkSectionDesktop");return i(),d("div",N,[c.isTouch?(i(),d("div",R,[U,l("div",V,[(i(!0),d(u,null,k(o.works,(a,m)=>(i(),f(h,{ref_for:!0,ref:"workSection",work:a},null,8,["work"]))),256))])])):(i(),d("div",F,[l("div",I,[l("h3",j,[P,l("button",{class:"inline-block w-10 h-10 animate-bounce",onClick:e[0]||(e[0]=y((...a)=>s.handleScrollDown&&s.handleScrollDown(...a),["prevent"]))},[D(n,{name:"scroll",color:"$000"})])]),l("div",X,[(i(!0),d(u,null,k(o.works,(a,m)=>(i(),f(p,{ref_for:!0,ref:"workSection",work:a,class:"relative w-screen h-[calc(100%-30px)] max-h-40vh work"},null,8,["work"]))),256))],512)])],512))])}var H=b(E,[["render",Y],["__file","Works.vue"]]);export{H as default};