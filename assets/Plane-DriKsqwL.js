import{p as x}from"./plane-CWMroP9M.js";import{S as M,f as C,n as y,R as b,M as z,a as A,D as B,e as T,A as H,b as O,W as $,O as E,T as k}from"./OrbitControls-D77GI-j7.js";import{S}from"./stats.module--VATS4Kh.js";import{_ as W}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as j,c as D,r as v,a as L}from"./app-DgJEataK.js";const c=4/3,G={__name:"Plane",setup(P,{expose:f}){f();const n=new S,s=v(),t=new M,l=new C(2e3,2e3),u=new y,r=u.load(x);r.wrapS=b,r.wrapT=b,r.repeat.set(30,30);const _=new z({color:65535,map:r}),d=new A(l,_);d.rotateX(-Math.PI/2),t.add(d);const p=new B(16777215,1);p.position.set(100,60,50),t.add(p);const w=new T(16777215,2);t.add(w);const g=new H(100);t.add(g);const e=new O(20,c,1,3e3);e.position.set(300,300,300),e.lookAt(0,0,0);const o=new $,m=()=>{let a=s.value.getBoundingClientRect(),i=a.width,R=a.width*(1/c);o.setSize(i,R),e.aspect=c,e.updateProjectionMatrix()};L(()=>{m(),s.value.appendChild(o.domElement),s.value.appendChild(n.domElement),n.domElement.style.position="absolute",n.domElement.style.zIndex=0;const a=new E(e,o.domElement);a.target.set(0,0,0),a.update(),a.addEventListener("change",function(){o.render(t,e),console.log("camera.position",e.position)});function i(){n.update(),o.render(t,e),requestAnimationFrame(i)}i(),window.onresize=m});const h={stats:n,webglBoxRef:s,scene:t,geometry:l,texLoader:u,texture:r,material:_,mesh:d,directionalLight:p,ambient:w,axesHelper:g,aspect:c,camera:e,renderer:o,setSize:m,get plane(){return x},get THREE(){return k},onMounted:L,ref:v,get OrbitControls(){return E},get Stats(){return S}};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}},I={ref:"webglBoxRef",class:"relative"};function q(P,f,n,s,t,l){return j(),D("div",I,null,512)}const Q=W(G,[["render",q],["__file","Plane.vue"]]);export{Q as default};
