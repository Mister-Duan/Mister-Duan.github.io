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
