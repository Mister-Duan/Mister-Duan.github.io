<template>
  <div ref="webglBoxRef" class="relative"></div>
</template>
<script setup>
import * as THREE from "three";
import { onMounted, ref } from "vue";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import yudi from "../images/yudi.png";

//引入性能监视器stats.js,显示帧率
import Stats from "three/examples/jsm/libs/stats.module.js";
//创建stats对象
const stats = new Stats();
const webglBoxRef = ref();
/**
 * 创建3D场景对象Scene
 */
const scene = new THREE.Scene();

const loader = new GLTFLoader();

const model = new THREE.Group();

loader.load("/assets/3d/工厂/工厂.gltf", function (gltf) {
  scene.add(gltf.scene);
});

const texture = new THREE.TextureLoader().load(yudi);
const spriteMaterial = new THREE.SpriteMaterial({
  map: texture,
});
// 批量创建多个精灵模型，在一个长方体空间上随机分布
const group = new THREE.Group();
model.add(group);
for (let i = 0; i < 200; i++) {
  // 精灵模型共享材质
  const sprite = new THREE.Sprite(spriteMaterial);
  group.add(sprite);
  sprite.scale.set(1, 1, 1);
  // 设置精灵模型位置，在长方体空间上上随机分布
  const x = 400 * (Math.random() - 0.5);
  const y = 150 * Math.random();
  const z = 400 * (Math.random() - 0.5);
  sprite.position.set(x, y, z);
}

const clock = new THREE.Clock();
// function loop() {
//   // loop()两次执行时间间隔
// }
// loop();

scene.add(model);

//光源设置
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(100 * 1, 100 * 1, 100 * 1);
scene.add(directionalLight);
const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);

const aspect = 4 / 3;

const camera = new THREE.PerspectiveCamera(30, aspect, 1, 3000);
camera.position.set(-144 * 2, 95 * 2, 95 * 2); //第2步过相机控件辅助设置OrbitControls
// camera.lookAt(0, 0, 0);
const x = -5,
  y = 0,
  z = -25; //通过OrbitControls辅助设置
camera.lookAt(x, y, z);
const renderer = new THREE.WebGLRenderer();
// //解决加载gltf格式模型颜色偏差问题
// renderer.outputEncoding = THREE.sRGBEncoding;
//新版本，加载gltf，不需要执行下面代码解决颜色偏差
renderer.outputColorSpace = THREE.SRGBColorSpace; //设置为SRGB颜色空间

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
  controls.target.set(x, y, z);
  controls.update();
  controls.addEventListener("change", function () {
    renderer.render(scene, camera); //执行渲染操作
    console.log("camera.position", camera.position);
  }); //监听鼠标、键盘事件

  //   const clock = new THREE.Clock();
  function render() {
    stats.update();

    const t = clock.getDelta();
    // loop()每次执行都会更新雨滴的位置，进而产生动画效果
    group.children.forEach((sprite) => {
      // 雨滴的y坐标每次减t*60
      sprite.position.y -= t * 60;
      if (sprite.position.y < 0) {
        // 如果雨滴落到地面，重置y，从新下落
        sprite.position.y = 150;
      }
    });

    renderer.render(scene, camera); //执行渲染操作
    requestAnimationFrame(render); //请求再次执行渲染函数render，渲染下一帧
  }
  render();

  window.onresize = setSize;
});
</script>
<style></style>
