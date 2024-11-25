---
title: PBR
icon: Dxuanzhuan
date: 2024-11-25
category: 3d
head:
  - - meta
    - name: keywords
      content: 3d可视化|threejs|PBR
---

## PBR材质金属度和粗糙度(金属效果 MeshStandardMaterial)

<Metal1Example />

## 环境贴图.envMap

环境贴图对PBR材质渲染效果影响还是比较大，一般渲染PBR材质的模型，最好设置一个合适的环境贴图。
实际生活中光源照射到一个物体上，这个物体反射出去的光线也会影响其他的物体，环境贴图就是用一种简单方式，近似模拟一个物体周边环境对物体表面的影响。

测试：对于PBR材质，如果threejs三维场景不添加任何光源，物体就是完全黑色的，你可以不添加任何光源，尝试只使用环境贴图，你会发现物体表面的颜色也能看到，这说明环境贴图其实相当于提供了物体周围环境发射或反射的光线。

测试：更换不同明暗的环境贴图，你会发现场景中模型的明暗也有变化。

<Metal2Example/>

## MeshPhysicalMaterial清漆层

MeshPhysicalMaterial和MeshStandardMaterial都是拥有金属度metalness、粗糙度roughness属性的PBR材质，MeshPhysicalMaterial是在MeshStandardMaterial基础上扩展出来的子类，除了继承了MeshStandardMaterial的金属度、粗糙度等属性，还新增了清漆.clearcoat、透光率.transmission、反射率.reflectivity、光泽.sheen、折射率.ior等等各种用于模拟生活中不同材质的属性。

<Metal3Example />

## 物理材质透光率.transmission(玻璃)

为了更好的模拟玻璃、半透明塑料一类的视觉效果，可以使用物理透明度.transmission属性代替Mesh普通透明度属性.opacity。
使用.transmission属性设置Mesh透明度,即便完全透射的情况下仍可保持高反射率。
物理光学透明度.transmission的值范围是从0.0到1.0。默认值为0.0。

<Metal4Example />
