const register3dComponents = async (app) => {
  //   const TextFoldExample = await import("../components/VueComs/TextFold.vue");
  //   const TimeLine = await import("../components/VueComs/TimeLine/index.vue");
  const ThreeBasic = await import("../components/3d/threejs/Basic.vue");
  const CameraRectBasic = await import(
    "../components/3d/threejs/CameraRectBasic.vue"
  );
  const HighLight = await import("../components/3d/threejs/HighLight.vue");
  const HighLightAntialias = await import(
    "../components/3d/threejs/HighLightAntialias.vue"
  );
  const GuiExample = await import("../components/3d/threejs/GuiExample.vue");
  const PlaneExample = await import("../components/3d/threejs/Plane.vue");

  app.component("TextFoldExample", TextFoldExample.default);
  app.component("ThreeBasic", ThreeBasic.default);
  app.component("CameraRectBasic", CameraRectBasic.default);
  app.component("HighLight", HighLight.default);
  app.component("HighLightAntialias", HighLightAntialias.default);
  app.component("GuiExample", GuiExample.default);
  app.component("TimeLine", TimeLine.default);
  app.component("PlaneExample", PlaneExample.default);
};
