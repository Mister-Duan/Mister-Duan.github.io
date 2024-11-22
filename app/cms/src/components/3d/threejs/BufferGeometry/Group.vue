<template>
  <div ref="webglBoxRef" class="relative"></div>
</template>
<script setup>
import * as THREE from "three";
import { onMounted, ref } from "vue";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

//引入性能监视器stats.js,显示帧率
import Stats from "three/examples/jsm/libs/stats.module.js";
import { forEach } from "lodash-es";
//创建stats对象
const stats = new Stats();
const webglBoxRef = ref();
/**
 * 创建3D场景对象Scene
 */
const scene = new THREE.Scene();
/**
 * 创建网格模型
 */
//创建一个长方体几何对象Geometry
// const geometry = new THREE.BoxGeometry(50, 50, 50);

const group = new THREE.Group();

for (let index = 0; index < 5; index++) {
  const geometry = new THREE.BoxGeometry(10, 50, 10);
  //材质对象Material
  const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(index * 40, 0, 0);
  mesh.name = `高层${index}`;
  group.add(mesh);
}
group.position.y = 25;
const group1 = new THREE.Group();
for (let index = 0; index < 5; index++) {
  const geometry = new THREE.BoxGeometry(10, 20, 10);
  //材质对象Material
  const material = new THREE.MeshBasicMaterial({
    color: 0x00ffff,
    side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(index * 40, 0, 40);
  mesh.name = `洋房${index}`;
  group1.add(mesh);
}
group1.position.y = 10;

//设置网格模型在三维空间中的位置坐标，默认是坐标原点
scene.add(group); //网格模型添加到场景中
scene.add(group1); //网格模型添加到场景中
// AxesHelper：辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);

const aspect = 4 / 3;

const camera = new THREE.PerspectiveCamera(30, aspect, 1, 3000);
camera.position.set(-200, 200, 200); //相机在Three.js三维坐标系中的位置
camera.lookAt(100, 0, 0); //相机观察目标指向Three.js坐标系原点
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
  controls.target.set(100, 0, 0);
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
