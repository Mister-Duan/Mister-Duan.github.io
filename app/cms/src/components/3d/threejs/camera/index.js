export const register3dCamera = async (app) => {
  const cameraExample1 = await import("./example1.vue");
  app.component("CameraExample1", cameraExample1.default);
};
