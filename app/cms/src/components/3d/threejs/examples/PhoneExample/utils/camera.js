import * as THREE from "three";

export const aspect = 4 / 3;
// 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面
export const camera = new THREE.PerspectiveCamera(40, aspect, 1, 3000);
camera.position.set(292, 50, 185); //相机在Three.js三维坐标系中的位置
camera.lookAt(0, 0, 0); //相机观察目标指向Three.js坐标系原点
