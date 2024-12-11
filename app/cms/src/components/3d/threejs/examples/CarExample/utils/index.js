import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { resizeByWindow } from "./resize";
import { scene } from "./scene";
import { aspect, camera } from "./camera";
export const init = (el) => {
  const renderer = new THREE.WebGLRenderer({
    antialias: true, //开启锯齿
  });
  renderer.setPixelRatio(window.devicePixelRatio); //设置设备像素比率,防止Canvas画布输出模糊。
  resizeByWindow({ renderer, camera, aspect, el });
  el.appendChild(renderer.domElement);
  renderer.outputColorSpace = THREE.SRGBColorSpace; //设置为SRGB颜色空间

  // 背景颜色
  renderer.setClearColor(0xcccccc, 1);
  // 设置相机控件轨道控制器OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  // 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
  controls.addEventListener("change", function () {
    renderer.render(scene, camera); //执行渲染操作
  }); //监听鼠标、键盘事件

  function render() {
    renderer.render(scene, camera); //执行渲染操作
    requestAnimationFrame(render); //请求再次执行渲染函数render，渲染下一帧
  }
  render();
};
