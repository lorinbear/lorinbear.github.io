import{d as l,r as t,c as d,o as a,u as y,a as f,b as h,e as x,f as n,t as c,g as V,h as C,i as m,j as v,k,_ as B}from"./index-23d0fb25.js";const N=e=>e[0].toUpperCase()+e.slice(1),r=l({__name:"SentenceCard",props:{foo:String},emits:["change","delete"],setup(e,{emit:i}){return t(0),(o,s)=>(a(),d("div",null," Sentence card "))}}),S=l({__name:"MyTimeline",props:{foo:String},emits:["change","delete"],setup(e,{emit:i}){return t(0),(o,s)=>(a(),d("div",null," My timeline "))}}),A=k('<p data-v-04617d8c>hello</p><div class="text-inner" data-v-04617d8c><h2 data-v-04617d8c>L<span style="color:rgba(247, 247, 247, 0.4);" data-v-04617d8c>o</span><span style="color:rgba(219, 8, 215, 0.4);" data-v-04617d8c>r</span><span style="color:rgba(185, 255, 10, 0.47);" data-v-04617d8c>i</span><span style="color:rgba(1, 55, 91, 0.47);" data-v-04617d8c>n</span><span style="color:rgba(0, 192, 198, 0.77);" data-v-04617d8c>b</span><span style="color:rgba(8, 17, 204, 0.52);" data-v-04617d8c>e</span>a<span style="color:rgba(0, 224, 201, 0.69);" data-v-04617d8c>r</span></h2></div>',2),w=l({__name:"AboutView",props:{foo:{},bar:{}},emits:["change","update"],setup(e,{emit:i}){y(b=>({"4965209e":g.color}));const o=t("Hello!"),s=()=>{console.log(o.value)},p=t(0),_=t(!1);f(()=>{setTimeout(()=>{_.value=!0},2e3),document.getElementsByTagName("body")[0].className="big-bg"}),h(()=>{document.body.classList.remove("big-bg")});const g={color:"red"};return(b,u)=>(a(),d("div",null,[x(" 这是About哦 "),n("button",{onClick:s},c(o.value),1),n("div",null,c(V(N)("hello")),1),n("button",{onClick:u[0]||(u[0]=T=>p.value++)},c(p.value),1),C(r),(a(),m(v(r))),(a(),m(v(_.value?r:S))),A]))}});const $=B(w,[["__scopeId","data-v-04617d8c"]]);export{$ as default};
