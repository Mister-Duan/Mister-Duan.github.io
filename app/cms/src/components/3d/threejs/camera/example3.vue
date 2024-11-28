<template>
  <div ref="webglBoxRef" class="relative h-400px"></div>
</template>
<script setup>
import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { onMounted, ref } from "vue";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import data from "./data.js"; //河南省边界轮廓数据
//引入性能监视器stats.js,显示帧率
import Stats from "three/examples/jsm/libs/stats.module.js";
//创建stats对象
const stats = new Stats();
const webglBoxRef = ref();
/**
 * 创建3D场景对象Scene
 */
const scene = new THREE.Scene();

const pointsArr = []; // 一组二维向量表示一个多边形轮廓坐标
data.forEach(function (e) {
  // data坐标数据转化为Vector2构成的顶点数组
  const v2 = new THREE.Vector2(e[0], e[1]);
  pointsArr.push(v2);
});
// Shape表示一个平面多边形轮廓,参数是二维向量构成的数组pointsArr
const shape = new THREE.Shape(pointsArr);
// 多边形shape轮廓作为ShapeGeometry参数，生成一个多边形平面几何体
const geometry = new THREE.ShapeGeometry(shape);

const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff,
  side: THREE.DoubleSide,
});
const mesh = new THREE.Mesh(geometry, material);

// 包围盒计算模型对象的大小和位置
const box3 = new THREE.Box3();
box3.expandByObject(mesh); // 计算模型包围盒
const size = new THREE.Vector3();
box3.getSize(size); // 计算包围盒尺寸
console.log("模型包围盒尺寸", size);
const center = new THREE.Vector3();
box3.getCenter(center); // 计算包围盒中心坐标

scene.add(mesh);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(100, 60, 50);
scene.add(directionalLight);
const ambient = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambient);

// AxesHelper：辅助观察的坐标系

const axesHelper = new THREE.AxesHelper(100);
axesHelper.position.set(113.51, 33.88, 0);
scene.add(axesHelper);

onMounted(() => {
  let size = webglBoxRef.value.getBoundingClientRect();
  // 正投影相机
  const width = size.width; //canvas画布宽度
  const height = size.height; //canvas画布高度
  const k = width / height; //canvas画布宽高比
  const s = 4; //控制left, right, top, bottom范围大小
  const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 8000);
  //   const aspect = 4 / 3;
  //   const camera = new THREE.PerspectiveCamera(20, aspect, 1, 3000);

  // camera.lookAt(0, 0, 0);
  const x = 113.51,
    y = 33.88;
  camera.position.set(x, y, 300); //与观察点x、y一样，地图平行与canvas画布
  camera.lookAt(x, y, 0);
  const renderer = new THREE.WebGLRenderer();
  const setSize = () => {
    let size = webglBoxRef.value.getBoundingClientRect();
    const width = size.width; //canvas画布宽度
    const height = size.height; //canvas画布高度
    // 1. WebGL渲染器渲染的Cnavas画布尺寸更新
    renderer.setSize(width, height);
    // 2.1.更新相机参数
    const k = width / height; //canvas画布宽高比
    camera.left = -s * k;
    camera.right = s * k;
    // 2.2.相机的left, right, top, bottom属性变化了，通知threejs系统
    camera.updateProjectionMatrix();
  };
  //three.js执行渲染命令会输出一个canvas画布，也就是一个HTML元素，你可以插入到web页面中
  setSize();
  webglBoxRef.value.appendChild(renderer.domElement);
  webglBoxRef.value.appendChild(stats.domElement);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.zIndex = 0;

  // 设置相机控件轨道控制器OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(x, y, 0);
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
