<template>
  <div
    id="camera"
    class="flex items-start absolute justify-start"
    style="visibility: hidden"
  >
    <div>
      <div
        style="height: 1px; width: 20px; background: #00ffff; margin-top: 68px"
      ></div>
    </div>
    <div id="phone-message" style="width: 200px; height: 120px">
      <div style="padding: 10px 4px; font-size: 14px">双摄像头</div>
      <div style="padding: 10px 24px; font-size: 12px">
        后置主摄像头——1300万像素(F/1.8光圈)
      </div>
      <div style="padding: 10px 24px; font-size: 12px">
        后置副摄像头——200万像素的
      </div>
    </div>
    <!-- 设置一个关闭按钮 -->
    <div style="position: relative">
      <div style="position: absolute; left: -30px; top: 10px">
        <img
          id="close"
          src="./assets/关闭.png"
          alt=""
          width="18"
          style="cursor: pointer"
        />
      </div>
    </div>
  </div>
  <div ref="webglBoxRef" class="relative">
    <div
      id="phone-color"
      class="absolute bottom-10px left-6/12 -translate-x-1/2 transform"
    >
      <div class="phone-colorChoose" id="map1">
        <img src="./assets/极光紫.png" />
      </div>
      <div class="phone-colorChoose" id="map2">
        <img src="./assets/幻夜黑.png" />
      </div>
      <div class="phone-colorChoose" id="map3">
        <img src="./assets/珊瑚红.png" />
      </div>
      <div class="phone-colorChoose" id="map4">
        <img src="./assets/极光蓝.png" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { init } from "./utils";

import { onMounted, ref } from "vue";
import { envMap } from "./assets";
import { mobilePhoneMesh } from "./utils/model";
import * as THREE from "three";
var texLoader = new THREE.TextureLoader(); //纹理贴图加载器
const webglBoxRef = ref();
/**
 * 创建3D场景对象Scene
 */

onMounted(() => {
  init(webglBoxRef.value);
  var map1 = texLoader.load(envMap.map1); //颜色贴图
  var map2 = texLoader.load(envMap.map2); //颜色贴图
  var map3 = texLoader.load(envMap.map3); //颜色贴图
  var map4 = texLoader.load(envMap.map4); //颜色贴图
  map1.flipY = false; // 纹理朝向texture.flipY
  map2.flipY = false; // 纹理朝向texture.flipY
  map3.flipY = false; // 纹理朝向texture.flipY
  map4.flipY = false; // 纹理朝向texture.flipY
  var dom1 = document.getElementById("map1");
  var dom2 = document.getElementById("map2");
  var dom3 = document.getElementById("map3");
  var dom4 = document.getElementById("map4");
  var chooseDom = dom1;
  // 每个手机颜色切换按钮设置一个鼠标单击事件
  dom1.onclick = function () {
    chooseDom.style.borderColor = "#ccc";
    chooseDom = dom1;
    chooseDom.style.borderColor = "#00aaaa";
    mobilePhoneMesh.material.map = map1;
  };
  dom2.onclick = function () {
    chooseDom.style.borderColor = "#ccc";
    chooseDom = dom2;
    chooseDom.style.borderColor = "#00aaaa";
    mobilePhoneMesh.material.map = map2;
  };
  dom3.onclick = function () {
    chooseDom.style.borderColor = "#ccc";
    chooseDom = dom3;
    chooseDom.style.borderColor = "#00aaaa";
    mobilePhoneMesh.material.map = map3;
  };
  dom4.onclick = function () {
    chooseDom.style.borderColor = "#ccc";
    chooseDom = dom4;
    chooseDom.style.borderColor = "#00aaaa";
    mobilePhoneMesh.material.map = map4;
  };
});
</script>
<style>
.phone-colorChoose {
  display: inline-block;
  margin-left: 20px;
  cursor: pointer;
}

.phone-colorChoose img {
  width: 50px;
}
#phone-color {
  width: 314px;
  position: absolute;
  /* top: 30px; */
  bottom: 12px;
  /* background:rgba(255,255,255,0.1); */
}

#phone-message {
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  padding: 0px;
  /* 边框 */
  background:
    linear-gradient(#00ffff, #00ffff) left top,
    linear-gradient(#00ffff, #00ffff) left top,
    linear-gradient(#00ffff, #00ffff) right bottom,
    linear-gradient(#00ffff, #00ffff) right bottom;
  background-repeat: no-repeat;
  background-size:
    1px 20px,
    36px 1px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 18px;
  padding: 8px 12px;
}
</style>
