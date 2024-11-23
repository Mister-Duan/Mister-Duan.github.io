export const registerWaibuMoXing = async (app) => {
  const WaibuMoXingDuckExample = await import("./duck.vue");
  const WaibuMoXingDuckExample1 = await import("./duck1.vue");
  const WaibuMoXingDuckExample2 = await import("./duck2.vue");
  app.component("WaibuMoXingDuckExample", WaibuMoXingDuckExample.default);
  app.component("WaibuMoXingDuckExample1", WaibuMoXingDuckExample1.default);
  app.component("WaibuMoXingDuckExample2", WaibuMoXingDuckExample2.default);
};
