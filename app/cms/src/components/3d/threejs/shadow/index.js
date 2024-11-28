export const register3dShadowExample = async (app) => {
  const ShadowExample1 = await import("./example1.vue");
  app.component("ShadowExample1", ShadowExample1.default);
};
