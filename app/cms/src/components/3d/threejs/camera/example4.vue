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

// 三维样条曲线
const path = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-50, 20, 90),
  new THREE.Vector3(-10, 40, 40),
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(60, -60, 0),
  new THREE.Vector3(90, -40, 60),
  new THREE.Vector3(120, 30, 30),
]);
// 样条曲线path作为TubeGeometry参数生成管道
const geometry = new THREE.TubeGeometry(path, 200, 5, 30);
const texLoader = new THREE.TextureLoader();
const texture = texLoader.load("/assets/img/diffuse.jpg"); //纹理贴图
texture.wrapS = THREE.RepeatWrapping; //UV坐标U方向阵列模式
texture.repeat.x = 10; //纹理沿着管道方向阵列(UV坐标U方向)
const material = new THREE.MeshLambertMaterial({
  map: texture,
  side: THREE.DoubleSide, //双面显示看到管道内壁
});
const mesh = new THREE.Mesh(geometry, material);

// 从曲线轨迹线上等间距获取一定数量点坐标
const pointsArr = path.getSpacedPoints(500);

// AxesHelper：辅助观察的坐标系

scene.add(mesh);
const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);

const aspect = 4 / 3;

const camera = new THREE.PerspectiveCamera(80, aspect, 1, 3000);

// 相机位置设置在当前点位置
camera.position.copy(pointsArr[0]);
// 曲线上当前点pointsArr[i]和下一个点pointsArr[i+1]近似模拟当前点曲线切线
// 设置相机观察点为当前点的下一个点，相机视线和当前点曲线切线重合
camera.lookAt(pointsArr[1]);

// camera.position.set(500, 500, 500); //相机在Three.js三维坐标系中的位置
// camera.lookAt(0, 0, 0); //相机观察目标指向Three.js坐标系原点

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(500, 500, 500);
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
  controls.target.copy(pointsArr[1]);
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

  // 渲染循环
  let i = 0; //在渲染循环中累加变化
  function render() {
    if (i < pointsArr.length - 1) {
      // 相机位置设置在当前点位置
      camera.position.copy(pointsArr[i]);
      // 曲线上当前点pointsArr[i]和下一个点pointsArr[i+1]近似模拟当前点曲线切线
      // 设置相机观察点为当前点的下一个点，相机视线和当前点曲线切线重合
      camera.lookAt(pointsArr[i + 1]);
      i += 1; //调节速度
    } else {
      i = 0;
    }
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
  render();

  window.onresize = setSize;
});
</script>
<style></style>
