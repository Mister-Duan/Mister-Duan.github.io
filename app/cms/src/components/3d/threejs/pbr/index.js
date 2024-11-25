export const register3dPbrGeometry = async (app) => {
  const metal1Example = await import("./metal1.vue");
  const metal2Example = await import("./metal2.vue");
  const metal3Example = await import("./metal3.vue");
  const Metal4Example = await import("./metal4.vue");
  app.component("Metal1Example", metal1Example.default);
  app.component("Metal1Example", metal1Example.default);
  app.component("Metal2Example", metal2Example.default);
  app.component("Metal4Example", Metal4Example.default);
};
