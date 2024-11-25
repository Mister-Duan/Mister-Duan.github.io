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
// 创建多段线条的顶点数据
const p1 = new THREE.Vector3(0, 0, 100);
const p2 = new THREE.Vector3(0, 0, 30);
const p3 = new THREE.Vector3(0, 0, 0);
const p4 = new THREE.Vector3(30, 0, 0);
const p5 = new THREE.Vector3(100, 0, 0);
// 1. 3D直线线段
const line1 = new THREE.LineCurve3(p1, p2);
// 2. 三维二次贝塞尔曲线
const curve = new THREE.QuadraticBezierCurve3(p2, p3, p4);
// 3. 3D直线线段
const line2 = new THREE.LineCurve3(p4, p5);

const CurvePath = new THREE.CurvePath();
// 三条线拼接为一条曲线
CurvePath.curves.push(line1, curve, line2);

const pointsArr = CurvePath.getPoints(100); //曲线上获取点
const geometry = new THREE.BufferGeometry();
geometry.setFromPoints(pointsArr); //读取坐标数据赋值给几何体顶点

// 线材质
const material = new THREE.LineBasicMaterial({
  color: 0x00fffff,
});
// 线模型
const line = new THREE.Line(geometry, material);

// 可视化p1、p2、p3、p4三个点的位置，并用直线相连接，便于观察贝塞尔曲线的绘制规律
const geometry2 = new THREE.BufferGeometry();
geometry2.setFromPoints([p1, p2, p3, p4, p5]);
const material2 = new THREE.PointsMaterial({
  color: 0xff00ff,
  size: 10,
});
//点模型对象
const points = new THREE.Points(geometry2, material2);

const group = new THREE.Group();
group.add(line, points);

// 三维样条曲线
const path = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-50, 20, 90),
  new THREE.Vector3(-10, 40, 40),
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(60, -60, 0),
  new THREE.Vector3(70, 0, 80),
]);
// LineCurve3创建直线段路径
// const path = new THREE.LineCurve3(new THREE.Vector3(0, 100, 0), new THREE.Vector3(0, 0, 0));

// path:路径   40：沿着轨迹细分数  2：管道半径   25：管道截面圆细分数
const geometry1 = new THREE.TubeGeometry(path, 40, 2, 25);
const material1 = new THREE.MeshLambertMaterial({
  color: 0x00ffff,
  side: THREE.DoubleSide, //双面显示看到管道内壁
  // wireframe: true,
});
const mesh1 = new THREE.Mesh(geometry1, material1);

scene.add(mesh1);
scene.add(group);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(100, 60, 50);
scene.add(directionalLight);
const ambient = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambient);

// AxesHelper：辅助观察的坐标系

const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);

const aspect = 4 / 3;
const camera = new THREE.PerspectiveCamera(20, aspect, 1, 3000);
camera.position.set(400, 400, -400); //相机在Three.js三维坐标系中的位置
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
