---
title: 外部三维模型加载
icon: Dxuanzhuan
date: 2024-11-19
category: 3d
head:
  - - meta
    - name: keywords
      content: 3d可视化|threejs|三维模型｜blender
---

- 使用三维建模软件(3D美术常用的三维建模软件，比如Blender、3dmax、C4D、maya等等)绘制3D模型，导出gltf等常见格式
- gltf格式的重要性
  - GLTF格式是新2015发布的三维模型格式，随着物联网、WebGL、5G的进一步发展，会有越来越多的互联网项目Web端引入3D元素，你可以把GLTF格式的三维模型理解为.jpg、.png格式的图片一样，现在的网站，图片基本是标配，对于以后的网站来说如果需要展示一个场景，使用3D来替换图片表达也是很正常的事情。图片有很多格式，对于三维模型自然也是如此，Web开发的时候图片会有常用格式，对于Web3D开发也一样，肯定会根据需要选择一个常见的大家都熟悉的格式，随时时间的发展，GLTF必然称为一个极为重要的标准格式。
  - 不仅three.js，其它的WebGL三维引擎cesium、babylonjs都对gltf格式有良好的的支持。

### gltf不同文件形式(.glb)

.gltf格式模型文件，有不同的组织形式。

- 单独.gltf文件
- 单独.glb文件
- .gltf + .bin + 贴图文件
  这些不同形式的gltf模型，加载代码其实没啥区别。

```javascript
// 单独.gltf文件
loader.load("../../工厂.gltf", function (gltf) {
  scene.add(gltf.scene);
});
```

### .getObjectByName()根据.name获取模型节点

一般三维建模软件的目录树，都有模型的名称，three.js加载外部模型，外部模型的名称体现为three.js对象的.name属性,three.js可以通过.getObjectByName()方法，把模型节点的名字.name作为改函数参数，快速查找某个模型对象。

```javascript
// 返回名.name为"1号楼"对应的对象
const nameNode = gltf.scene.getObjectByName("1号楼");
nameNode.material.color.set(0xff0000); //改变1号楼Mesh材质颜色
```

### 纹理贴图颜色偏差解决

three.js加载gltf模型的时候，可能会遇到three.js渲染结果颜色偏差，对于这种情况，你只需要修改WebGL渲染器默认的编码方式.outputEncoding即可

```js
//解决加载gltf格式模型纹理贴图和原图不一样问题
renderer.outputEncoding = THREE.sRGBEncoding;
```

注意！！！！！！！最新版本属性名字有改变。渲染器属性名.outputEncoding已经变更为.outputColorSpace。
查WebGL渲染器文档，你可以看到.outputColorSpace的默认值就是SRGB颜色空间THREE.SRGBColorSpace，意味着新版本代码中，加载gltf，没有特殊需要，不设置.outputColorSpace也不会引起色差。

```javascript
//新版本，加载gltf，不需要执行下面代码解决颜色偏差
renderer.outputColorSpace = THREE.SRGBColorSpace; //设置为SRGB颜色空间
```

```json
{
  "asset": {
    "version": "2.0",
  },
...
// 模型材质信息
  "materials": [
    {
      "pbrMetallicRoughness": {//PBR材质
        "baseColorFactor": [1,1,0,1],
        "metallicFactor": 0.5,//金属度
        "roughnessFactor": 1//粗糙度
      }
    }
  ],
  // 网格模型数据
  "meshes": ...
  // 纹理贴图
  "images": [
        {
            // uri指向外部图像文件
            "uri": "贴图名称.png"//图像数据也可以直接存储在.gltf文件中
        }
   ],
     "buffers": [
    // 一个buffer对应一个二进制数据块，可能是顶点位置 、顶点索引等数据
    {
      "byteLength": 840,
     //这里面的顶点数据，也快成单独以.bin文件的形式存在
      "uri": "data:application/octet-stream;base64,AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAC/.......
    }
  ],
}

```

#

# 外部三维模型

## 工厂

<WaibuMoXingDuckExample/>

### 不同格式的类型

```javascript
// 单独.gltf文件
// loader.load("../../工厂.gltf", function (gltf) {
// model.add(gltf.scene);
// })
// 单独.glb文件
// loader.load("../../工厂.glb", function (gltf) {
// model.add(gltf.scene);
// })
// .gltf + .bin + 贴图文件
// loader.load("../../工厂/工厂.gltf", function (gltf) {
// model.add(gltf.scene);
// })
```

### 简易的小区

<WaibuMoXingDuckExample1/>

### 手机模型

<WaibuMoXingDuckExample2/>
