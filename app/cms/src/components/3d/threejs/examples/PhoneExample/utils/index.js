import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
  CSS2DObject,
  CSS2DRenderer,
} from "three/examples/jsm/renderers/CSS2DRenderer.js";
import { resizeByWindow } from "./resize";
import { scene } from "./scene";
import { model, sprite } from "./model";
import { aspect, camera } from "./camera";
export const init = (el) => {
  // 创建一个CSS2渲染器CSS2DRenderer
  var labelRenderer = new CSS2DRenderer();
  labelRenderer.setSize(window.innerWidth, window.innerHeight);
  labelRenderer.domElement.style.position = "absolute";
  // 相对标签原位置位置偏移大小
  labelRenderer.domElement.style.top = "0px";
  labelRenderer.domElement.style.left = "122px"; //HTML标签尺寸宽度一半
  // //设置.pointerEvents=none，以免模型标签HTML元素遮挡鼠标选择场景模型
  // labelRenderer.domElement.style.pointerEvents = 'none';//不执行，默认情况下，弹出标签后整个界面都不能操作
  el.appendChild(labelRenderer.domElement);
  /* 初始不渲染HTML标签，鼠标点击后在渲染出来 */
  labelRenderer.domElement.style.display = "none";

  var close = document.getElementById("close");
  // 点击关闭按钮隐藏HTML元素标签
  close.addEventListener("click", function () {
    labelRenderer.domElement.style.display = "none";
  });

  el?.addEventListener("click", function choose(event) {
    var Sx = event.offsetX; //鼠标单击位置横坐标
    var Sy = event.offsetY; //鼠标单击位置纵坐标

    let size = el.getBoundingClientRect();
    let width = size.width;
    let height = size.width * (1 / aspect);
    //屏幕坐标转WebGL标准设备坐标
    var x = (Sx / width) * 2 - 1; //WebGL标准设备横坐标
    var y = -(Sy / height) * 2 + 1; //WebGL标准设备纵坐标
    console.log({ Sy, Sx, x, y });
    //创建一个射线投射器`Raycaster`
    var raycaster = new THREE.Raycaster();
    //通过鼠标单击位置标准设备坐标和相机参数计算射线投射器`Raycaster`的射线属性.ray
    raycaster.setFromCamera(new THREE.Vector2(x, y), camera);
    //返回.intersectObjects()参数中射线选中的网格模型对象
    // 未选中对象返回空数组[],选中一个数组1个元素，选中两个数组两个元素
    var intersects = raycaster.intersectObjects([sprite]);
    // console.log("射线器返回的对象", intersects);
    // intersects.length大于0说明，说明选中了模型
    console.log(intersects.length > 0);

    if (intersects.length > 0) {
      // console.log(intersects[0].object);// 如果选中sprite，控制台打印该对象
      // window.location.href = 'http://www.webgl3d.cn/';//点击精灵热点，跳转到新的页面
      labelRenderer.domElement.style.display = "block";
    }
  });

  /**
   * 创建渲染器对象
   */
  const renderer = new THREE.WebGLRenderer({
    antialias: true, //开启锯齿
  });
  renderer.setPixelRatio(window.devicePixelRatio); //设置设备像素比率,防止Canvas画布输出模糊。
  resizeByWindow({ renderer, camera, aspect, el });
  el.appendChild(renderer.domElement);

  // 设置相机控件轨道控制器OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  // 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
  controls.addEventListener("change", function () {
    renderer.render(scene, camera); //执行渲染操作
  }); //监听鼠标、键盘事件
  function render() {
    console.log(scene.rotateY);

    labelRenderer.render(scene, camera); //渲染HTML标签对象
    renderer.render(scene, camera); //执行渲染操作
    requestAnimationFrame(render); //请求再次执行渲染函数render，渲染下一帧

    let size = el.getBoundingClientRect();
    let width = size.width;
    let height = size.width * (1 / aspect);

    labelRenderer.setSize(width, height);
  }
  render();

  // 创建一个HTML元素作为标签标注相机对应sprite对象
  // 选择id为camera的一个HTML元素作为标签标注相机对象热点位置
  var div = document.getElementById("camera");
  div.style.visibility = "visible";
  //   //div元素包装为CSS2模型对象CSS2DObject
  var label = new CSS2DObject(div);
  //   // 设置HTML元素标签在three.js世界坐标中位置
  label.position.copy(sprite.position);

  model.add(label);
};
