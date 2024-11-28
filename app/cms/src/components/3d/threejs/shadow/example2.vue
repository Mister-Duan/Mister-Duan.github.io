<template>
  <div ref="webglBoxRef" class="relative"></div>
</template>
<script setup>
import * as THREE from "three";
import { onMounted, ref } from "vue";
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
// 长方体网格模型
const geometry = new THREE.BoxGeometry(50, 100, 50);
const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff,
});
const mesh = new THREE.Mesh(geometry, material);
mesh.position.y = 50;
// 矩形平面网格模型
const planeGeometry = new THREE.PlaneGeometry(400, 250);
const planeMaterial = new THREE.MeshLambertMaterial({
  color: 0x999999,
});
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
planeMesh.rotateX(-Math.PI / 2);
const group = new THREE.Group();

// NOTICE!!!
// 设置产生投影的网格模型
mesh.castShadow = true;
// 设置接收阴影的投影面
planeMesh.receiveShadow = true;
group.add(mesh, planeMesh);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(100, 60, 50);

// 设置产生阴影的光源对象,开启光源阴影的计算功能
directionalLight.castShadow = true;
// // console.log('阴影相机属性',directionalLight.shadow.camera);
// // 设置三维场景计算阴影的范围
directionalLight.shadow.camera.left = -50;
directionalLight.shadow.camera.right = 50;
directionalLight.shadow.camera.top = 200;
directionalLight.shadow.camera.bottom = -100;
directionalLight.shadow.camera.near = -200;
directionalLight.shadow.camera.far = 400;
scene.add(directionalLight); //平行光
// directionalLight.shadow.camera.position.set(100, 100, 100);
// 可视化平行光阴影对应的正投影相机对象
const cameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
scene.add(cameraHelper);

scene.add(group);

const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);
const aspect = 4 / 3;

const camera = new THREE.PerspectiveCamera(30, aspect, 1, 3000);

camera.position.set(153, 697, 676);
camera.lookAt(0, 0, 0);

const ambient = new THREE.AmbientLight(0xffffff, 1);
// scene.add(ambient);

const renderer = new THREE.WebGLRenderer();
const setSize = () => {
  let size = webglBoxRef.value.getBoundingClientRect();
  let width = size.width;
  let height = size.width * (1 / aspect);

  renderer.setSize(width, height);

  renderer.shadowMap.enabled = true;
  camera.aspect = aspect;
  camera.updateProjectionMatrix();
  renderer.render(scene, camera);

  // 设置渲染器，允许光源阴影渲染
  // renderer.shadowMap.enabled = true;
  //
  // 全屏情况下：设置观察范围长宽比aspect为窗口宽高比
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
  controls.target.set(0, 0, 0);
  controls.update();
  controls.addEventListener("change", function () {
    renderer.render(scene, camera); //执行渲染操作
  });

  //监听鼠标、键盘事件
  function render() {
    renderer.render(scene, camera); //执行渲染操作
    camera.updateProjectionMatrix();
    requestAnimationFrame(render); //请求再次执行渲染函数render，渲染下一帧
  }
  render();
  window.onresize = setSize;
});
</script>
<style></style>
