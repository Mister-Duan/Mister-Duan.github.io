export const register3dBufferGeometry = async (app) => {
  const BufferGeometryPoint = await import("./point.vue");
  const BufferGeometryLine = await import("./line.vue");
  const BufferGeometryMian = await import("./mian.vue");
  const BufferGeometryRect = await import("./rect.vue");
  const GroupGeometryExample = await import("./Group.vue");
  const CircleTextureExample = await import("./Circle.vue");
  const PlaneTextureExample = await import("./Plane.vue");
  const TrPlaneTextureExample = await import("./TrPlane.vue");
  const CsdTextureExample = await import("./Csd.vue");

  app.component("BufferGeometryPoint", BufferGeometryPoint.default);
  app.component("BufferGeometryLine", BufferGeometryLine.default);
  app.component("BufferGeometryMian", BufferGeometryMian.default);
  app.component("BufferGeometryRect", BufferGeometryRect.default);
  app.component("GroupGeometryExample", GroupGeometryExample.default);
  app.component("CircleTextureExample", CircleTextureExample.default);
  app.component("PlaneTextureExample", PlaneTextureExample.default);
  app.component("TrPlaneTextureExample", TrPlaneTextureExample.default);
  app.component("CsdTextureExample", CsdTextureExample.default);
};
