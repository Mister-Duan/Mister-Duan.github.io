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
//
loader.load("/assets/3d/金属.glb", function (gltf) {
  // 递归遍历所有模型节点批量修改材质
  gltf.scene.traverse(function (obj) {
    if (obj.isMesh) {
      //判断是否是网格模型
      // console.log('obj.material',obj.material);
      // 重新设置材质的金属度和粗糙度属性
      obj.material.metalness = 1.0; //金属度
      obj.material.roughness = 0.5; //表面粗糙度

      obj.material = new THREE.MeshStandardMaterial({
        color: obj.material.color, //读取材质原来的颜色
        // 金属度属性metalness：材质像金属的程度, 非金属材料,如木材或石材,使用0.0,金属使用1.0。
        // metalness默认0.5,0.0到1.0之间的值可用于生锈的金属外观
        metalness: 1.0,
        // metalness: 0.0,//没有金属质感
        // 粗糙度属性roughness:模型表面粗糙程度,0.0表示平滑的镜面反射,1.0表示完全漫反射,默认0.5
        roughness: 0.5,
        // roughness: 1.0,//设置到完全漫反射状态，表面金属质感比较弱
        // roughness: 0.0,//完全镜面反射，就像一面镜子一样，注意配合环境贴图观察更明显
      });
    }
  });
  scene.add(gltf.scene);
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

const camera = new THREE.PerspectiveCamera(10, aspect, 1, 3000);
camera.position.set(100, 100, 100); //相机在Three.js三维坐标系中的位置
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
