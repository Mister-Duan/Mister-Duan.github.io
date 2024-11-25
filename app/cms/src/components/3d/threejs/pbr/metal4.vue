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

const loader = new GLTFLoader(); //创建一个GLTF加载器
const gui = new GUI({ title: "参数调整" }); //创建GUI对象
// 加载环境贴图
// 加载周围环境6个方向贴图
// 上下左右前后6张贴图构成一个立方体空间
// 'px.jpg', 'nx.jpg'：x轴正方向、负方向贴图  p:正positive  n:负negative
// 'py.jpg', 'ny.jpg'：y轴贴图
// 'pz.jpg', 'nz.jpg'：z轴贴图
// CubeTexture表示立方体纹理对象，父类是纹理对象Texture
const textureCube = new THREE.CubeTextureLoader()
  .setPath("/assets/3d/环境贴图/环境贴图1/")
  .load(["px.jpg", "nx.jpg", "py.jpg", "ny.jpg", "pz.jpg", "nz.jpg"]);
// 创建材质子菜单
const matFolder = gui.addFolder("车外壳材质");
matFolder.close(); //关闭菜单
loader.load("/assets/3d/轿车.glb", function (gltf) {
  scene.add(gltf.scene);
  console.log(gltf.scene);

  const mesh = gltf.scene.getObjectByName("玻璃01");
  mesh.material = new THREE.MeshPhysicalMaterial({
    metalness: 0.0, //玻璃非金属
    roughness: 0.0, //玻璃表面光滑
    envMap: textureCube, //环境贴图
    envMapIntensity: 1.0, //环境贴图对Mesh表面影响程度
    transmission: 1.0, //玻璃材质透光率，transmission替代opacity
    ior: 1.5, //折射率
  });

  const obj = {
    color: mesh.material.color.getHex(), // 获取材质默认颜色
  };
  // 材质颜色color
  matFolder.addColor(obj, "color").onChange(function (value) {
    mesh.material.color.set(value);
  });
  // 范围可以参考文档
  matFolder.add(mesh.material, "metalness", 0, 1);
  matFolder.add(mesh.material, "roughness", 0, 1);
  matFolder.add(mesh.material, "transmission", 0, 1);
  matFolder.add(mesh.material, "ior", 1, 2.333);
  matFolder.add(mesh.material, "envMapIntensity", 0, 10);
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

const camera = new THREE.PerspectiveCamera(20, aspect, 1, 3000);
camera.position.set(-1000, 1000, 1000); //相机在Three.js三维坐标系中的位置
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
  webglBoxRef.value.appendChild(gui.domElement);
  // console.log(gui.domElement);
  gui.domElement.style.position = "absolute";
  gui.domElement.style.right = "0";
  gui.domElement.style.zIndex = 0;
  window.onresize = setSize;
});
</script>
<style></style>
