<template>
  <div ref="webglBoxRef" class="relative"></div>
</template>
<script setup>
import * as THREE from "three";
import { onMounted, ref } from "vue";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

//引入性能监视器stats.js,显示帧率
import Stats from "three/examples/jsm/libs/stats.module.js";
//创建stats对象
const stats = new Stats();
const webglBoxRef = ref();
/**
 * 创建3D场景对象Scene
 */
const scene = new THREE.Scene();

const loader = new GLTFLoader();

loader.load("/assets/3d/简易小区.glb", function (gltf) {
  // console.log('控制台查看gltf对象结构', gltf);
  console.log("场景3D模型树结构", gltf.scene);

  // 返回名.name为"1号楼"对应的对象
  const nameNode = gltf.scene.getObjectByName("1号楼");
  nameNode.material.color.set(0xff0000); //改变1号楼Mesh材质颜色

  //获得所有'洋房'房子的父对象
  const obj = gltf.scene.getObjectByName("洋房");
  // obj的所有子对象.children都是Mesh，改变Mesh对应颜色
  obj.children.forEach(function (mesh) {
    mesh.material.color.set(0xffff00);
  });
  scene.add(gltf.scene); //三维场景添加到model组对象中
});

const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);

//光源设置
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(400, 200, 300);
scene.add(directionalLight);
const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);

const aspect = 4 / 3;

const camera = new THREE.PerspectiveCamera(36, aspect, 1, 3000);
camera.position.set(100, 260, 200); //第2步过相机控件辅助设置OrbitControls
// camera.lookAt(0, 0, 0);
const x = 0,
  y = 0,
  z = 0; //通过OrbitControls辅助设置
camera.lookAt(x, y, z);
const renderer = new THREE.WebGLRenderer();
// //解决加载gltf格式模型颜色偏差问题
// renderer.outputEncoding = THREE.sRGBEncoding;
//新版本，加载gltf，不需要执行下面代码解决颜色偏差
renderer.outputColorSpace = THREE.SRGBColorSpace; //设置为SRGB颜色空间

const setSize = () => {
  let size = webglBoxRef.value.getBoundingClientRect();
  let width = size.width;
  let height = size.width * (1 / aspect);
  renderer.setSize(width, height);
  // 全屏情况下：设置观察范围长宽比aspect为窗口宽高比
  camera.aspect = aspect;

  camera.updateProjectionMatrix();
};
onMounted(() => {
  //three.js执行渲染命令会输出一个canvas画布，也就是一个HTML元素，你可以插入到web页面中
  setSize();
  webglBoxRef.value.appendChild(renderer.domElement);
  webglBoxRef.value.appendChild(stats.domElement);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.zIndex = 0;

  // 设置相机控件轨道控制器OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(x, y, z);
  controls.update();
  controls.addEventListener("change", function () {
    renderer.render(scene, camera); //执行渲染操作
    console.log("camera.position", camera.position);
  }); //监听鼠标、键盘事件

  //   const clock = new THREE.Clock();
  function render() {
    stats.update();
    renderer.render(scene, camera); //执行渲染操作
    requestAnimationFrame(render); //请求再次执行渲染函数render，渲染下一帧
  }
  render();

  window.onresize = setSize;
});
</script>
<style></style>
