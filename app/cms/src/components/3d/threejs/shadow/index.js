export const register3dShadowExample = async (app) => {
  const ShadowExample1 = await import("./example1.vue");
  const ShadowExample2 = await import("./example2.vue");
  app.component("ShadowExample1", ShadowExample1.default);
  app.component("ShadowExample2", ShadowExample2.default);
};
