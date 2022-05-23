import{S as I,C as N,P as C,W as H,A as P,T as u,M as h,a as w,b as M,G as W,c as B,B as O,d as R}from"./vendor.3d5a01d9.js";const X=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const L of i.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&n(L)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}};X();window.onload=()=>{window.location.href="#landing"};const q=document.querySelector("#sle2"),c=document.querySelector("#sle1"),T=[0,c.scrollHeight];c.scrollTop=T[0];q.scrollTop=T[1];const Z=[c.scrollHeight/3,c.scrollHeight/3],K=[c.scrollHeight,0],y=[T,Z,K],A=document.querySelector("#barrier");document.querySelector("#faith");let l=0;const z=["#intro","#sle","","","#faith","#service","#accomp","#challenges","#memories","#conclude"];let a=0;const f=document.querySelectorAll(".accImg");window.addEventListener("keydown",o=>{if(o.keyCode==34)if(a==2)a++,c.scrollTop=y[1][0],q.scrollTop=y[1][1];else if(a==3)a++,A.classList.toggle("rotate"),setTimeout(()=>{A.remove(),window.location.href=z[a]},800),c.scrollTop=y[2][0],q.scrollTop=y[2][1];else if(a==4){const e=document.querySelector("#christian"),t=e.querySelector(".christSpan"),n=e.querySelectorAll(".notChrist");(()=>{t.classList.add("christSpan"),n[0].classList.add("fade"),n[1].classList.add("fade"),e.style.backgroundColor="rgba(0, 0, 0, 0)",setTimeout(()=>{t.style.padding="1rem 1.5rem 1rem 1.5rem",e.classList.add("moveMiddle")},350)})(),a++}else location.href=z[a],a++;else o.key=="b"&&(l==3&&location.href=="https://ryana0.github.io/exit/#accomp"?l=0:l!=3&&location.href=="https://ryana0.github.io/exit/#accomp"&&(f.forEach((e,t)=>{console.log("IMGAE"),e==f[l]?(e.classList.remove("inGray"),e.classList.add("outGray"),e.setAttribute("data-hasGone",!0)):(e.classList.remove("outGray"),e.classList.add("inGray"),e.getAttribute("data-hasGone")=="true"&&(e.src=e.getAttribute("data-next")),e.getAttribute("data-next")==null&&(f[l].style.display="none"))}),l++))});console.log(f);document.querySelectorAll(".firework");window.onload=()=>{document.documentElement.scrollLeft=0};window.addEventListener("resize",Y);function Y(){const o=document.querySelector("#canvas");o.width=window.innerWidth,o.height=window.innerHeight}const r=new I;r.background=new N(1580069);const d=new C(75,window.innerWidth/window.innerHeight,.1,1e3),S=new H({canvas:document.querySelector("#canvas")});S.setPixelRatio(window.devicePixelRatio);S.setSize(window.innerWidth,window.innerHeight);d.position.setZ(30);d.position.setX(0);S.render(r,d);const D=new P(16777215);r.add(D);const J=new u().load("assets2/maps/earthMap.jpg"),Q=new u().load("assets2/maps/earthNormal.jpg"),p=new h(new w(24,256,256),new M({map:J,normalMap:Q}));r.add(p);p.position.z=-15;p.position.x=-50;p.rotation.y=1;p.rotation.x=1;p.rotation.z=-.5;const U=new u().load("assets2/maps/moonMap.jpg"),v=new h(new w(6,64,64),new M({map:U}));r.add(v);v.position.z=-75;v.position.x=-20;v.position.y=10;const V=new u().load("assets2/maps/marsMap.jpg"),_=new u().load("assets2/maps/marsNormal.png"),m=new h(new w(24,180,180),new M({map:V,normalMap:_}));r.add(m);m.position.z=-50;m.position.x=200;const $=new u().load("assets2/maps/jupiterMap.jpg"),g=new h(new w(48,400,400),new M({map:$}));r.add(g);g.position.z=-75;g.position.x=650;let j=!1;function F(o,e,t){if(console.log("whewe"),document.documentElement.scrollLeft!=94080){var n=(document.documentElement.scrollLeft+document.body.scrollLeft)/94080;t.scene.rotation.x+=.1,o.scene.position.x<-25?(o.scene.position.set(-50+n*3e3*.5,0,-75+n*4e3*.75),e.scene.position.set(-50+n*3e3*.5,0,-75+n*4e3*.75),t.scene.position.set(-50+n*3e3*.5-3,0,-75+n*4e3*.75),o.scene.rotation.y=-.5+n*100*.05,e.scene.rotation.y=-.5+n*100*.05):j?(o.scene.position.x+=.2,e.scene.position.x+=.2,t.scene.position.x+=.2,m.rotation.y+=.0025,d.position.x+=.05):(o.scene.rotation.y=0,e.scene.rotation.y=0,t.scene.rotation.y=0,o.scene.position.x+=.05,e.scene.position.x+=.05,t.scene.position.x+=.05,m.rotation.y+=.0025,d.position.x+=.05)}}const k=document.querySelector("#bar"),ee=document.querySelector("#loading"),oe=document.querySelector("#canvas");let G=0;k.style.width="0%";function te(o,e){let t=0,n=setInterval(()=>{t>=Math.round(e)&&(clearInterval(n),setTimeout(()=>{ee.style.display="none",oe.style.opacity=1,document.body.style.overflowX="visible"},250)),G+=100/e,o.style.width=G+"%",t++},2)}const b=new W;let x=0;b.load("assets2/models/rocket.gltf",o=>{r.add(o.scene),o.scene.position.set(-50,0,-75),o.scene.scale.multiplyScalar(2.5),o.scene.rotation.z=-1.5,o.scene.rotation.y=-.5,b.load("assets2/models/rocket.gltf",e=>{e.scene.traverse(t=>{t.isMesh&&(t.material=new B({color:"#000",side:O}))}),e.scene.position.set(-50,0,-75),e.scene.scale.multiplyScalar(2.55),e.scene.rotation.z=-1.5,e.scene.rotation.y=-.5,r.add(e.scene),b.load("assets2/models/flame.gltf",t=>{r.add(t.scene),t.scene.rotation.z=1.5,t.scene.rotation.y=0,t.scene.position.set(-53,0,-75),t.scene.scale.set(3,3,3),setTimeout(()=>{setInterval(()=>{F(o,e,t)},10)},1e3),document.querySelector("#conclude").addEventListener("mouseenter",()=>{window.location.href="#final",j=!0})},t=>{te(k,x+=t.timeStamp/5),console.log("gltf loaded")})},e=>{x+=e.timeStamp/5},e=>{console.log(e)})},o=>{x+=o.timeStamp/5},o=>{console.log(o)});const ne=1500,se=new w(.25,48,48),re=new R({color:16777215});for(let o=0;o<ne;o++){let e=-(Math.round(Math.random()*20)+100),t=Math.round(Math.random()*225)-115,n=Math.round(Math.random()*1900)-200,s=new h(se,re);s.position.set(n,t,e),r.add(s)}function E(){requestAnimationFrame(E),S.render(r,d)}E();
