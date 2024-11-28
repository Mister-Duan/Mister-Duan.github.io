<template>
  <div ref="webglBoxRef" class="relative"></div>
</template>
<script setup>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { onMounted, ref } from "vue";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min.js";
//引入性能监视器stats.js,显示帧率
import Stats from "three/examples/jsm/libs/stats.module.js";
//创建stats对象
const stats = new Stats();
const webglBoxRef = ref();

/**
 * 创建3D场景对象Scene
 */
const scene = new THREE.Scene();
// 尺寸相同的Sprite和矩形平面Mesh

// 网格模型尺寸PlaneGeometry(50, 25)
const geometry = new THREE.PlaneGeometry(50, 25);
const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff,
});
const mesh = new THREE.Mesh(geometry, material);

const spriteMaterial = new THREE.SpriteMaterial({
  color: 0x00ffff,
});
const sprite = new THREE.Sprite(spriteMaterial);
sprite.position.set(0, 30, 0);
// 精灵模型尺寸.scale.set(50, 25
sprite.scale.set(50, 25, 1);

scene.add(sprite);
scene.add(mesh);

const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);
const aspect = 4 / 3;

const camera = new THREE.PerspectiveCamera(30, aspect, 1, 3000);

camera.position.set(250, 150, 150); //相机在Three.js三维坐标系中的位置
camera.lookAt(0, 0, 0); //相机观察目标指向Three.js坐标系原点

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(250, 250, 250);
scene.add(directionalLight);
const ambient = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambient);

const renderer = new THREE.WebGLRenderer();
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
  controls.target.set(0, 0, 0);
  controls.update();

  controls.addEventListener("change", function () {
    renderer.render(scene, camera); //执行渲染操作
  }); //监听鼠标、键盘事件
  // function render() {
  //   stats.update();
  //   renderer.render(scene, camera); //执行渲染操作
  //   requestAnimationFrame(render); //请求再次执行渲染函数render，渲染下一帧
  // }
  // render();

  function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
  render();

  window.onresize = setSize;
});
</script>
<style></style>
