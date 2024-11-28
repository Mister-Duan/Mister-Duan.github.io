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

// 聚光源
const spotLight = new THREE.SpotLight(0xffffff, 1.0);
scene.add(spotLight); //光源添加到场景中
// 设置聚光光源发散角度
spotLight.angle = Math.PI / 6; //光锥角度的二分之一
spotLight.decay = 0.0; //光源光照强度不随距离改变衰减
// 设置聚光光源位置
spotLight.position.set(0, 50, 0);
spotLight.target.position.set(20, 0, 0);
// spotLight.target=(50, 0, 50);

console.log("聚广源指向目标", spotLight.target);

// 聚广源辅助对象，可视化聚广源
const spotLightHelper = new THREE.SpotLightHelper(spotLight, 0xffffff);
scene.add(spotLightHelper);

const geometry = new THREE.PlaneGeometry(400, 200);
const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff,
});
const mesh = new THREE.Mesh(geometry, material);
mesh.rotateX(-Math.PI / 2);

scene.add(mesh);

const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);
const aspect = 4 / 3;

const camera = new THREE.PerspectiveCamera(45, aspect, 1, 3000);

camera.position.set(350, 150, 150); //相机在Three.js三维坐标系中的位置
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
