<template>
  <div ref="webglBoxRef" class="relative"></div>
</template>
<script setup>
import * as THREE from "three";
import { onMounted, ref } from "vue";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min.js";

const webglBoxRef = ref();
//场景
const scene = new THREE.Scene();

// 一个网格模型
const geometry = new THREE.SphereGeometry(50, 25, 25);
const material = new THREE.MeshPhongMaterial({
  color: 0x00ffff,
  specular: 0x111111,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh); //模型对象添加到场景中

//光源设置
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(400, 200, 300);
scene.add(directionalLight);
const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);

//辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);
const aspect = 4 / 3;

const gui = new GUI({ title: "参数调整" }); //创建GUI对象
//创建一个对象，对象属性的值可以被GUI库创建的交互界面改变
const obj = {
  color: 0x00ffff, // 材质颜色
  specular: 0x111111, // 材质高光颜色
};
// 创建材质子菜单
const matFolder = gui.addFolder("材质");
matFolder.close(); //关闭菜单
// 材质颜色color
matFolder.addColor(obj, "color").onChange(function (value) {
  console.log(value);
  material.color.set(value);
});
// 材质高光颜色specular
matFolder.addColor(obj, "specular").onChange(function (value) {
  material.specular.set(value);
});
// 环境光子菜单
const ambientFolder = gui.addFolder("环境光");
ambientFolder.close(); //关闭菜单
// 环境光强度
ambientFolder.add(ambient, "intensity", 0, 2);
// 平行光子菜单
const dirFolder = gui.addFolder("平行光");
dirFolder.close(); //关闭菜单
// 平行光强度
dirFolder.add(directionalLight, "intensity", 0, 2);
const dirFolder2 = dirFolder.addFolder("光源位置"); //子菜单的子菜单
dirFolder2.close(); //关闭菜单
// 平行光位置
dirFolder2.add(directionalLight.position, "x", -400, 400);
dirFolder2.add(directionalLight.position, "y", -400, 400);
dirFolder2.add(directionalLight.position, "z", -400, 400);

//渲染器和相机
const camera = new THREE.PerspectiveCamera(30, aspect, 1, 3000);
camera.position.set(292, 223, 185);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
// renderer.setSize(width, height);

const setSize = () => {
  let size = webglBoxRef.value.getBoundingClientRect();
  let width = size.width;
  let height = size.width * (1 / aspect);
  // 重置渲染器输出画布canvas尺寸
  renderer.setSize(width, height);
  // 全屏情况下：设置观察范围长宽比aspect为窗口宽高比
  camera.aspect = aspect;
  // 渲染器执行render方法的时候会读取相机对象的投影矩阵属性projectionMatrix
  // 但是不会每渲染一帧，就通过相机的属性计算投影矩阵(节约计算资源)
  // 如果相机的一些属性发生了变化，需要执行updateProjectionMatrix ()方法更新相机的投影矩阵
  camera.updateProjectionMatrix();
};

// 渲染循环
function render() {
  // 当gui界面设置obj.bool为true,mesh执行旋转动画
  if (obj.bool) mesh.rotateY(0.01);
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
onMounted(() => {
  setSize();
  webglBoxRef.value.appendChild(renderer.domElement);
  render();
  webglBoxRef.value.appendChild(gui.domElement);
  // console.log(gui.domElement);
  gui.domElement.style.position = "absolute";
  gui.domElement.style.right = "0";
  gui.domElement.style.zIndex = 0;
});

const controls = new OrbitControls(camera, renderer.domElement);

// 画布跟随窗口变化
window.onresize = setSize;
</script>
<style></style>
