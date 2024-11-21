export const register3dComponents = async (app) => {
  const CameraRectBasic = await import("./basic/CameraRectBasic.vue");
  const HighLight = await import("./basic/HighLight.vue");
  const HighLightAntialias = await import("./basic/HighLightAntialias.vue");
  const GuiExample = await import("./basic/GuiExample.vue");
  const PlaneExample = await import("./basic/Plane.vue");
  const ThreeBasic = await import("./basic/Basic.vue");
  app.component("ThreeBasic", ThreeBasic.default);
  app.component("CameraRectBasic", CameraRectBasic.default);
  app.component("HighLight", HighLight.default);
  app.component("HighLightAntialias", HighLightAntialias.default);
  app.component("GuiExample", GuiExample.default);
  app.component("PlaneExample", PlaneExample.default);
};
