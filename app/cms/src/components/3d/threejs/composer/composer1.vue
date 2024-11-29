<template>
  <div ref="webglBoxRef" class="relative"></div>
</template>
<script setup>
import * as THREE from "three";
import { onMounted, ref } from "vue";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// 引入后处理扩展库EffectComposer.js
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
// 引入渲染器通道RenderPass
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
// 引入OutlinePass通道
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass.js";

// 伽马校正后处理Shader
import { GammaCorrectionShader } from "three/examples/jsm/shaders/GammaCorrectionShader.js";
// ShaderPass功能：使用后处理Shader创建后处理通道
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
// SMAA抗锯齿通道
import { SMAAPass } from "three/examples/jsm/postprocessing/SMAAPass.js";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader.js";

//引入性能监视器stats.js,显示帧率
import Stats from "three/examples/jsm/libs/stats.module.js";

const webglBoxRef = ref();
const geometry = new THREE.BoxGeometry(50, 50, 50);
const material = new THREE.MeshLambertMaterial({
  color: 0x009999,
});
const mesh = new THREE.Mesh(geometry, material);

const mesh2 = mesh.clone();
mesh2.position.y = 100;
const mesh3 = mesh.clone();
mesh3.position.x = 100;
const model = new THREE.Group();

// 三个网格模型用于高亮发光描边测试
model.add(mesh, mesh2, mesh3);
onMounted(() => {
  const scene = new THREE.Scene();
  scene.add(model); //模型对象添加到场景中

  //辅助观察的坐标系
  const axesHelper = new THREE.AxesHelper(100);
  scene.add(axesHelper);

  //光源设置
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(100, 60, 50);
  scene.add(directionalLight);
  const ambient = new THREE.AmbientLight(0xffffff, 4);
  scene.add(ambient);

  const aspect = 4 / 3;
  let size = webglBoxRef.value.getBoundingClientRect();
  let width = size.width;
  let height = size.width * (1 / aspect);

  const camera = new THREE.PerspectiveCamera(30, aspect, 1, 3000);
  camera.position.set(292, 223, 185);
  camera.lookAt(0, 0, 0);

  // WebGL渲染器设置
  const renderer = new THREE.WebGLRenderer({
    antialias: true, //开启优化锯齿
  });

  renderer.setPixelRatio(window.devicePixelRatio); //防止输出模糊
  renderer.setSize(width, height);
  webglBoxRef.value.appendChild(renderer.domElement);

  // 创建后处理对象EffectComposer，WebGL渲染器作为参数
  const composer = new EffectComposer(renderer);
  // 创建一个渲染器通道，场景和相机作为参数
  const renderPass = new RenderPass(scene, camera);
  // 设置renderPass通道
  composer.addPass(renderPass);

  // 创建OutlinePass通道,显示模型外轮廓边框
  const v2 = new THREE.Vector2(window.innerWidth, window.innerWidth);
  // outlinePass第一个参数v2的尺寸和canvas画布保持一致
  const outlinePass = new OutlinePass(v2, scene, camera);
  //设置需要高亮发光描边的模型对象
  outlinePass.selectedObjects = [mesh];

  //模型描边颜色，默认白色
  outlinePass.visibleEdgeColor.set(0xffff00);
  //高亮发光描边厚度
  outlinePass.edgeThickness = 4;
  //高亮描边发光强度
  outlinePass.edgeStrength = 6;
  //模型闪烁频率控制，默认0不闪烁
  outlinePass.pulsePeriod = 2;

  // 设置OutlinePass通道
  composer.addPass(outlinePass);

  // 渲染循环
  function render() {
    // 使用后处理模块EffectComposer，可通过该对象的render方法调用渲染器的render方法
    composer.render();
    // renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
  render();

  const controls = new OrbitControls(camera, renderer.domElement);

  // 画布跟随窗口变化
  window.onresize = function () {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  };
});
</script>
<style></style>
