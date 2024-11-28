export const register3dCamera = async (app) => {
  const cameraExample1 = await import("./example1.vue");
  const cameraExample2 = await import("./example2.vue");
  const cameraExample3 = await import("./example3.vue");
  const cameraExample4 = await import("./example4.vue");
  app.component("CameraExample1", cameraExample1.default);
  app.component("CameraExample2", cameraExample2.default);
  app.component("CameraExample3", cameraExample3.default);
  app.component("CameraExample4", cameraExample4.default);
};
