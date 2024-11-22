export const register3dThreeJsBasic = async (app) => {
  const CameraRectBasic = await import("./CameraRectBasic.vue");
  const HighLight = await import("./HighLight.vue");
  const HighLightAntialias = await import("./HighLightAntialias.vue");
  const GuiExample = await import("./GuiExample.vue");
  const PlaneExample = await import("./Plane.vue");
  const ThreeBasic = await import("./Basic.vue");
  app.component("ThreeBasic", ThreeBasic.default);
  app.component("CameraRectBasic", CameraRectBasic.default);
  app.component("HighLight", HighLight.default);
  app.component("HighLightAntialias", HighLightAntialias.default);
  app.component("GuiExample", GuiExample.default);
  app.component("PlaneExample", PlaneExample.default);
};
