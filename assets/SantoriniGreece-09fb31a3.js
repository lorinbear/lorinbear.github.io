import{_ as l}from"./ColorExample-7ccbdad9.js";import{_ as a,o as s,i as p}from"./index-ffbf6f89.js";let t=[{id:0},{id:1,name:"希腊蓝",color:"#0065b2"},{id:2,name:"碧眼",color:"#67a5da"},{id:3,name:"圣洁白",color:"#fdfdfb"},{id:4,name:"石灰石",color:"#e5eaeb"},{id:5,name:"万神庙",color:"#c8bca0"},{id:6,name:"卫城",color:"#c19969"},{id:7,name:"石板路",color:"#b8c2c8"},{id:8,name:"晨曦粉壁",color:"#fbe4e2"},{id:9,name:"三角梅",color:"#db077f"}],n=[{id:1,twoId:[1,4],color1:"",color2:""},{id:2,twoId:[8,2],color1:"",color2:""},{id:3,twoId:[5,6],color1:"",color2:""}],d=[{id:1,twoId:[7,8],color:"",bgColor:""},{id:2,twoId:[3,1],color:"",bgColor:""},{id:3,twoId:[2,4],color:"",bgColor:""}],i=[{id:1,twoId:[5,3],color:"",bgImage:""},{id:2,twoId:[1,2],color:"",bgImage:""},{id:3,twoId:[4,9],color:"",bgImage:""}];function I(){n.map((o,c)=>{o.color1=t[o.twoId[0]].color,o.color2=t[o.twoId[1]].color}),d.map((o,c)=>{o.color=t[o.twoId[0]].color,o.bgColor=`linear-gradient(${t[o.twoId[0]].color} 50%,${t[o.twoId[1]].color} 50%)`}),i.map((o,c)=>{o.color=t[o.twoId[0]].color,o.bgImage=`radial-gradient(${t[o.twoId[1]].color} 20%,transparent 0)`})}function e(){return I(),{oneList:t,twoListType1:n,twoListType2:d,twoListType3:i}}const m={data(){return{one:e().oneList,two1:e().twoListType1,two2:e().twoListType2,two3:e().twoListType3}},components:{ColorExample:l},mounted(){}};function _(o,c,g,b,r,f){const w=l;return s(),p(w,{one:r.one,two1:r.two1,two2:r.two2,two3:r.two3},null,8,["one","two1","two2","two3"])}const y=a(m,[["render",_]]);export{y as default};
