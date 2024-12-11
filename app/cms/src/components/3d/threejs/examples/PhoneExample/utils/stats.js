//引入性能监视器stats.js,显示帧率
import Stats from "three/examples/jsm/libs/stats.module.js";
//创建stats对象

const stats = new Stats();

//Stats.domElement:web页面上输出计算结果,一个div元素
webglBoxRef.value.appendChild(stats.domElement);
stats.domElement.style.position = "absolute";
stats.domElement.style.zIndex = 0;
stats.update();
