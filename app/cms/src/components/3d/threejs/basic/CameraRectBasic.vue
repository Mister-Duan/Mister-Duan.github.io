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
/**
 * 创建网格模型
 */
//创建一个长方体几何对象Geometry
// const geometry = new THREE.BoxGeometry(50, 50, 50);
//材质对象Material
// 基础网格材质MeshBasicMaterial不受光照影响
// 漫反射网格材质；MeshLambertMaterial
// const material = new THREE.MeshBasicMaterial({
//   color: 0x0000ff, //设置材质颜色
// });
// const material = new THREE.MeshLambertMaterial({
//   color: 0x00ffff, //设置材质颜色
// });

// const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
// //设置网格模型在三维空间中的位置坐标，默认是坐标原点
// mesh.position.set(0, 10, 0);
// scene.add(mesh); //网格模型添加到场景中

const geometry = new THREE.BoxGeometry(100, 100, 100);
//材质对象Material
const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff, //设置材质颜色
  transparent: true, //开启透明
  opacity: 0.5, //设置透明度
});
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
    // 在XOZ平面上分布
    mesh.position.set(i * 200, 0, j * 200);
    scene.add(mesh); //网格模型添加到场景中
  }
}

// AxesHelper：辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);

/**
 * 光源设置
 */
//点光源
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.decay = 0.0; //设置光源不随距离衰减
//点光源位置
// pointLight.position.set(400, 0, 0); //点光源放在x轴上
pointLight.position.set(400, 200, 300); //偏移光源位置，观察渲染效果变化
scene.add(pointLight); //点光源添加到场景中

// width和height用来设置渲染后，输出的画布宽高度。
// const width = 800; //宽度
// const height = 500; //高度
const aspect = 4 / 3;
/**
 * 透视投影相机设置
 */
// const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
const camera = new THREE.PerspectiveCamera(45, aspect, 1, 8000);
// camera.position.set(292, 223, 185);
// 超出视锥体远裁界面的范围的会被剪裁掉，不渲染  可以调整far参数适配
camera.position.set(-2000, 2000, 2000);
camera.lookAt(600, 0, 600);

/**
 * 创建渲染器对象
 */
const renderer = new THREE.WebGLRenderer();
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
onMounted(() => {
  //three.js执行渲染命令会输出一个canvas画布，也就是一个HTML元素，你可以插入到web页面中
  setSize();
  webglBoxRef.value.appendChild(renderer.domElement);
  //Stats.domElement:web页面上输出计算结果,一个div元素
  webglBoxRef.value.appendChild(stats.domElement);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.zIndex = 0;

  // 设置相机控件轨道控制器OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  // 相机控件.target属性在OrbitControls.js内部表示相机目标观察点，默认0,0,0
  // console.log('controls.target', controls.target);
  controls.target.set(600, 0, 600);
  controls.update();
  // 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
  controls.addEventListener("change", function () {
    renderer.render(scene, camera); //执行渲染操作
    // 回调中 浏览器控制台查看相机位置变化
    //
  }); //监听鼠标、键盘事件
  // const clock = new THREE.Clock();
  // function render() {
  //   stats.update();
  //   // const spt = clock.getDelta() * 1000; //毫秒
  //   // console.log("两帧渲染时间间隔(毫秒)", spt);
  //   // console.log("帧率FPS", 1000 / spt);
  renderer.render(scene, camera); //执行渲染操作
  //   // mesh.rotateY(0.01); //每次绕y轴旋转0.01弧度
  //   requestAnimationFrame(render); //请求再次执行渲染函数render，渲染下一帧
  // }
  // render();

  // onresize 事件会在窗口被调整大小时发生
  window.onresize = setSize;
});
</script>
<style></style>
