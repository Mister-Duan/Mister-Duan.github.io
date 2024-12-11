export const register3dThreeJsExamples = async (app) => {
  const PhoneExample = await import("./PhoneExample/index.vue");
  const CarExample = await import("./CarExample/index.vue");
  app.component("PhoneExample", PhoneExample.default);
  app.component("CarExample", CarExample.default);
};
