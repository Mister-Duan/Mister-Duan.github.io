---
title: Python基础
icon: code
date: 2024-12-24
category: AI
head:
  - - meta
    - name: keywords
      content: AI Python
---

此处是 Mr.Duan 存放的一些代码笔记。

## 目录

# 版本

- v2.7.14
  - 老项目依赖的比较多
- v3.x.x 一直在更新
  - 大多的库依赖这个版本

# 安装

- [python](https://www.python.org/)
  - 提供的安装包
  - 按步骤安装
  - 开发环境要配置
  - 复杂上手慢
- [Anaconda](https://www.anaconda.com/)

  - 优势
    - python大礼包(全套环境 必备的库pip 环境问题)
    - 开发环境
    - 提供了可安装的资源
    - 装起来简单 用起来也简单
  - 基础命令

    - conda list 列出已经装好的库 numpy/pandas
      - pip pip安装的
      - py35_0 python 自带的
    - 安装
      - pip install xgboost
        - 如果远程下载出现问题
          - 可以先下载whl文件（https://www.lfd.uci.edu/~gohlke/pythonlibs/ 三方库地址）
          - 然后执行 pip install xxxx.whl 文件安装
      - conda install numpy
      - 推荐pip

# 编辑器

## Jupyter Notebook

Jupyter Notebook是以网页的形式打开，可以在网页页面中直接编写代码和运行代码，代码的运行结果也会直接在代码块下显示的程序。如在编程过程中需要编写说明文档，可在同一个页面中直接编写，便于作及时的说明和解释。

### 主要特点

- 编程时具有语法高亮、缩进、tab补全的功能。
- 可直接通过浏览器运行代码，同时在代码块下方展示运行结果。
- 以富媒体格式展示计算结果。富媒体格式包括：HTML，LaTeX，PNG，SVG等。
- 对代码编写说明文档或语句时，支持Markdown语法。
- 支持使用LaTeX编写数学性说明。

# Python

- 1991年 pyton 编译器诞生
- 2000年 version2.0 稳定版本2.7
- 2008年 version3.0 破坏性升级 不兼容2.7

## 可以干什么

- 基础编程开发
- Web开发
- 运维
- 机器学习
- 运维学习
- 计算机视觉与自然语言处理
- 数据挖掘
- Spark大数
