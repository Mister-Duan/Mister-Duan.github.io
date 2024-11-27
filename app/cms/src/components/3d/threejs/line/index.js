export const register3dLine = async (app) => {
  const line1Example = await import("./line1.vue");
  const line2Example = await import("./line2.vue");
  const line3Example = await import("./line3.vue");
  const line4Example = await import("./line4.vue");
  const line5Example = await import("./line5.vue");
  const line6Example = await import("./line6.vue");
  const line7Example = await import("./line7.vue");
  const line8Example = await import("./line8.vue");
  const line9Example = await import("./line9.vue");
  app.component("Line1Example", line1Example.default);
  app.component("Line2Example", line2Example.default);
  app.component("Line3Example", line3Example.default);
  app.component("Line4Example", line4Example.default);
  app.component("Line5Example", line5Example.default);
  app.component("Line6Example", line6Example.default);
  app.component("Line7Example", line7Example.default);
  app.component("Line8Example", line8Example.default);
  app.component("Line9Example", line9Example.default);
};