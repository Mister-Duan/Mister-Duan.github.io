<template>
  <div ref="webglBoxRef" id="webglBoxRef" class="relative min-h-300px">
    <div style="position: absolute; right: 10px; top: 10px">
      <a class="gou" style="" href="https://mister-duan.github.io/">
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
        href="https://mister-duan.github.io/"
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
      <div class="colorChoose" id="color1">
        <img class="no-view" no-view src="./assets/绿.jpg" />
      </div>
      <div class="colorChoose" id="color2">
        <img class="no-view" no-view src="./assets/灰.jpg" />
      </div>
      <div class="colorChoose" id="color3">
        <img class="no-view" no-view src="./assets/红.jpg" />
      </div>
      <div class="colorChoose" id="color4">
        <img class="no-view" no-view src="./assets/黑.jpg" />
      </div>
      <div class="colorChoose" id="color5">
        <img class="no-view" no-view src="./assets/白.jpg" />
      </div>
    </div>
    <div id="changeColor">
      <img
        src="./assets/变色.png"
        alt=""
        width="24"
        class="no-view"
        no-view
        style="vertical-align: middle"
      />
      <span id="changeColorText">停止变色</span>
    </div>
    <div id="rotateAudio">
      <div id="rotate">
        <img
          id="rotateimg"
          no-view
          src="./assets/旋转.png"
          class="no-view"
          width="24"
          style="vertical-align: middle"
        />
      </div>
      <div id="audio" style="margin-top: 20px">
        <img
          id="audioimg"
          class="no-view"
          no-view
          src="./assets/关闭声音.png"
          width="24"
          style="vertical-align: middle"
        />
      </div>
      <div style="margin-top: 20px">
        <img
          id="light"
          src="./assets/开车灯.png"
          width="24"
          class="no-view"
          no-view
          style="vertical-align: middle"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { init } from "./utils";
import { onMounted, ref } from "vue";
import { scene } from "./utils/scene";
import { model } from "./utils/model";
import { colorTween } from "./utils/colorTween.js";
import { backgroundAudio } from "./utils/backgroundAudio.js";
import {
  OpenLight,
  CloseLight,
  RotateStart,
  RotateStop,
  VoiceOpen,
  VoiceClose,
} from "./assets";
import { openCarLight, closeCarLight } from "./utils/openCarLight";

// import * as THREE from "three";
// var texLoader = new THREE.TextureLoader(); //纹理贴图加载器
const webglBoxRef = ref();
onMounted(() => {
  init(webglBoxRef.value);
  function setColor(color) {
    model.traverse(function (object) {
      if (object.type === "Mesh") {
        if (object.name.slice(0, 2) == "外壳") {
          //外壳颜色设置
          object.material.color.set(color);
        }
      }
    });
  }

  var colorArr = [0x023911, 0x222222, 0x6a030a, 0x000000, 0xffffff];
  colorArr.forEach(function (value, i) {
    var dom = document.getElementById("color" + (i + 1));
    // 单击按钮切换颜色
    dom.onclick = function () {
      setColor(value);
    };
  });
  // 背景音乐开关
  var audio = false;
  document.getElementById("audio").onclick = function () {
    if (audio) {
      backgroundAudio.pause();
      audio = false;
      document.getElementById("audioimg").src = VoiceOpen;
    } else {
      backgroundAudio.play();
      audio = true;
      document.getElementById("audioimg").src = VoiceClose;
    }
  };

  var open = true;
  // 颜色变化动画开关
  document.getElementById("changeColor").onclick = function () {
    if (open) {
      colorTween.stop(); //停止动画
      open = false;
      document.getElementById("changeColorText").innerHTML = "开始变色";
      setColor(0x023911); //动画停止，颜色回到最初的状态
    } else {
      colorTween.start(); //开始动画
      open = true;
      document.getElementById("changeColorText").innerHTML = "停止变色";
    }
  };

  // 模型旋转动画
  var rotateAnimation = null;
  function loop() {
    rotateAnimation = requestAnimationFrame(loop);
    scene.rotateY(0.001);
  }

  loop();
  var rotate = true;
  document.getElementById("rotate").onclick = function () {
    if (rotate) {
      cancelAnimationFrame(rotateAnimation);
      rotate = false;
      document.getElementById("rotateimg").src = RotateStop;
    } else {
      loop();
      rotate = true;
      document.getElementById("rotateimg").src = RotateStart;
    }
  };
  var light = false;
  document.getElementById("light").onclick = function () {
    if (light) {
      closeCarLight();
      light = false;
      document.getElementById("light").src = OpenLight;
    } else {
      openCarLight();
      light = true;
      document.getElementById("light").src = CloseLight;
    }
  };
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
