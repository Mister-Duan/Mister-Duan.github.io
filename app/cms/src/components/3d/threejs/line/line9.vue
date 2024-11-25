<template>
  <div ref="webglBoxRef" class="relative"></div>
</template>
<script setup>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
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

const loader = new GLTFLoader(); //创建一个GLTF加载器

const model = new THREE.Group(); //声明一个组对象，用来添加加载成功的三维场景

loader.load("/assets/3d/地形.glb", function (gltf) {
  //gltf加载成功后返回一个对象

  scene.add(gltf.scene); //三维场景添加到model组对象中
  //mesh表示地形网格模型
  const mesh = gltf.scene.children[0];
  // 1. 山脉顶点数据
  const pos = mesh.geometry.attributes.position;
  const count = pos.count; //几何体顶点数量

  // 2. 计算模型y坐标高度差
  const yArr = []; //顶点所有y坐标，也就是地形高度
  for (let i = 0; i < count; i++) {
    yArr.push(pos.getY(i)); //获取顶点y坐标，也就是地形高度
  }
  yArr.sort(); //y坐标排序，以便于计算地形高度差
  const miny = yArr[0];
  const maxy = yArr[yArr.length - 1];
  const height = maxy - miny; //山脉整体高度

  // 3. 计算每个顶点的颜色值
  const colorsArr = [];
  const c1 = new THREE.Color(0x0000ff); //山谷颜色
  const c2 = new THREE.Color(0xff0000); //山顶颜色
  for (let i = 0; i < count; i++) {
    //当前高度和整体高度比值
    const percent = (pos.getY(i) - miny) / height;
    const c = c1.clone().lerp(c2, percent); //颜色插值计算
    colorsArr.push(c.r, c.g, c.b);
  }
  const colors = new Float32Array(colorsArr);
  // 设置几何体attributes属性的颜色color属性
  mesh.geometry.attributes.color = new THREE.BufferAttribute(colors, 3);
  // 4. 设置材质，使用顶点颜色渲染
  mesh.material = new THREE.MeshLambertMaterial({
    vertexColors: true,
  });
});

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(100, 60, 50);
scene.add(directionalLight);
const ambient = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambient);

// AxesHelper：辅助观察的坐标系

const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);

const aspect = 4 / 3;
const camera = new THREE.PerspectiveCamera(35, aspect, 1, 3000);
camera.position.set(500, 500, 500); //相机在Three.js三维坐标系中的位置
camera.lookAt(0, 0, 0); //相机观察目标指向Three.js坐标系原点
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
