export const resizeByWindow = ({ renderer, camera, aspect, el }) => {
  const setSize = () => {
    let size = el.getBoundingClientRect();
    let width = size.width;
    let height = size.width * (1 / aspect);
    // 重置渲染器输出画布canvas尺寸
    renderer.setSize(width, height);
    // 全屏情况下：设置观察范围长宽比aspect为窗口宽高比
    camera.aspect = aspect;
    camera.updateProjectionMatrix();
  };
  setSize();
  window.onresize = setSize;
};
