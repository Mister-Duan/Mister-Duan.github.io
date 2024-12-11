<template>
  <div ref="webglBoxRef" class="relative min-h-300px">
    <div style="position: absolute; right: 10px; top: 10px">
      <a
        class="gou"
        style=""
        href="https://www.bydauto.com.cn/news-id-2775.html"
      >
        <img
          src="./assets/购买.png"
          alt=""
          width="24"
          style="vertical-align: middle"
        />
        <span>购买</span>
      </a>

      <a
        class="gou"
        style="margin-top: 10px"
        href="https://www.bydauto.com.cn/news-id-2775.html"
      >
        <img
          src="./assets/试驾.png"
          alt=""
          width="24"
          style="vertical-align: middle"
        />
        <span>试驾</span>
      </a>
    </div>
    <div id="color" style="">
      <div class="colorChoose" id="color1"><img src="./assets/绿.jpg" /></div>
      <div class="colorChoose" id="color2"><img src="./assets/灰.jpg" /></div>
      <div class="colorChoose" id="color3"><img src="./assets/红.jpg" /></div>
      <div class="colorChoose" id="color4"><img src="./assets/黑.jpg" /></div>
      <div class="colorChoose" id="color5"><img src="./assets/白.jpg" /></div>
    </div>
    <div id="changeColor">
      <img
        src="./assets/变色.png"
        alt=""
        width="24"
        style="vertical-align: middle"
      />
      <span id="changeColorText">停止变色</span>
    </div>
    <div id="rotateAudio">
      <div id="rotate">
        <img
          id="rotateimg"
          src="./assets/旋转.png"
          alt=""
          width="24"
          style="vertical-align: middle"
        />
      </div>
      <div id="audio" style="margin-top: 20px">
        <img
          id="audioimg"
          src="./assets/关闭声音.png"
          alt=""
          width="24"
          style="vertical-align: middle"
        />
      </div>
      <div style="margin-top: 20px">
        <img
          id="light"
          src="./assets/开车灯.png"
          alt=""
          width="24"
          style="vertical-align: middle"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { init } from "./utils";
import { onMounted, ref } from "vue";
import * as THREE from "three";
var texLoader = new THREE.TextureLoader(); //纹理贴图加载器
const webglBoxRef = ref();
/**
 * 创建3D场景对象Scene
 */

onMounted(() => {
  init(webglBoxRef.value);
});
</script>
<style>
.colorChoose {
  display: inline-block;
  margin-left: 20px;
  cursor: pointer;
}

.colorChoose img {
  width: 50px;
  border-radius: 25px;
}

#color {
  width: 380px;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  padding: 10px 16px;
  border-radius: 6px;
  left: 50%;
  margin-left: -190px;
  top: 100%;
  margin-top: -80px;
}

.gou {
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  display: block;
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 30px;
  height: 28px;
  line-height: 28px;
}

#changeColor {
  color: #ffffff;
  font-size: 16px;
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 30px;
  height: 28px;
  line-height: 28px;

  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -22px;
}

#rotateAudio {
  position: absolute;
  left: 10px;
  top: 50%;
  margin-top: -88px;
}

#rotateAudio div {
  padding: 10px 10px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 22px;
  cursor: pointer;
}
</style>
