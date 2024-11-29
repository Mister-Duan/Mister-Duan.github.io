export const register3dComposer = async (app) => {
  const composerExample1 = await import("./composer1.vue");
  app.component("ComposerExample1", composerExample1.default);
};
