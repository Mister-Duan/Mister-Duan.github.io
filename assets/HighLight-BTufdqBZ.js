import{S as v,c as L,d as H,a as C,A as R,D as y,e as z,b as B,W as M,O as _,T as A}from"./OrbitControls-A8LsrGPs.js";import{S as g}from"./stats.module--VATS4Kh.js";import{_ as O}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as P,c as $,r as w,a as x}from"./app-CNzJ5FSc.js";const r=4/3,k={__name:"HighLight",setup(b,{expose:p}){p();const s=new g,o=w(),t=new v,a=new L(50),f=new H({color:65535,shininess:40,specular:4473924}),i=new C(a,f);i.position.set(0,10,0),t.add(i);const m=new R(100);t.add(m);const c=new y(16777215,.8);c.position.set(1e3,1200,1300),t.add(c);const h=new z(16777215,.05);t.add(h);const e=new B(30,r,1,3e3);e.position.set(292,223,185),e.lookAt(0,0,0);const n=new M,l=()=>{let d=o.value.getBoundingClientRect(),E=d.width,S=d.width*(1/r);n.setSize(E,S),e.aspect=r,e.updateProjectionMatrix()};x(()=>{l(),o.value.appendChild(n.domElement),o.value.appendChild(s.domElement),s.domElement.style.position="absolute",s.domElement.style.zIndex=0,new _(e,n.domElement).addEventListener("change",function(){n.render(t,e),console.log("camera.position",e.position)}),n.render(t,e),window.onresize=l});const u={stats:s,webglBoxRef:o,scene:t,geometry:a,material:f,mesh:i,axesHelper:m,directionalLight:c,ambient:h,aspect:r,camera:e,renderer:n,setSize:l,get THREE(){return A},onMounted:x,ref:w,get OrbitControls(){return _},get Stats(){return g}};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}},T={ref:"webglBoxRef",class:"relative"};function j(b,p,s,o,t,a){return P(),$("div",T,null,512)}const q=O(k,[["render",j],["__file","HighLight.vue"]]);export{q as default};
