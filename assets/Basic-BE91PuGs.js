import{S as B,B as v,M as S,a as y,A as C,P as M,b as R,W as z,O as w,T as L}from"./OrbitControls-A8LsrGPs.js";import{S as h}from"./stats.module--VATS4Kh.js";import{_ as P}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as A,c as H,r as g,a as x}from"./app-CNzJ5FSc.js";const c=4/3,O={__name:"Basic",setup(E,{expose:m}){m();const o=new h,s=g(),t=new B,l=new v(50,50,50),f=new S({color:65535}),a=new y(l,f);a.position.set(0,10,0),t.add(a);const u=new C(100);t.add(u);const r=new M(16777215,1);r.decay=0,r.position.set(400,200,300),t.add(r),console.log(r);const e=new R(30,c,1,3e3);e.position.set(292,223,185),e.lookAt(0,0,0);const n=new z,d=()=>{let p=s.value.getBoundingClientRect(),i=p.width,b=p.width*(1/c);n.setSize(i,b),e.aspect=c,e.updateProjectionMatrix()};x(()=>{d(),s.value.appendChild(n.domElement),s.value.appendChild(o.domElement),o.domElement.style.position="absolute",o.domElement.style.zIndex=0,new w(e,n.domElement).addEventListener("change",function(){n.render(t,e),console.log("camera.position",e.position)});function i(){o.update(),n.render(t,e),a.rotateY(.01),requestAnimationFrame(i)}i(),window.onresize=d});const _={stats:o,webglBoxRef:s,scene:t,geometry:l,material:f,mesh:a,axesHelper:u,pointLight:r,aspect:c,camera:e,renderer:n,setSize:d,get THREE(){return L},onMounted:x,ref:g,get OrbitControls(){return w},get Stats(){return h}};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}},$={ref:"webglBoxRef",class:"relative"};function k(E,m,o,s,t,l){return A(),H("div",$,null,512)}const q=P(O,[["render",k],["__file","Basic.vue"]]);export{q as default};
