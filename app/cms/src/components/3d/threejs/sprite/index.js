export const register3dSpriteExample = async (app) => {
  const SpriteExample1 = await import("./example1.vue");
  const SpriteExample2 = await import("./example2.vue");
  //   const SpriteExample2 = await import("./example2.vue");
  app.component("SpriteExample1", SpriteExample1.default);
  app.component("SpriteExample2", SpriteExample2.default);
  //   app.component("ShadowExample2", ShadowExample2.default);
};
