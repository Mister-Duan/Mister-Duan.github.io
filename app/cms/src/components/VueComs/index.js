export const registerVueComponents = async (app) => {
  const TextFoldExample = await import("./TextFold.vue");
  const TimeLine = await import("./TimeLine/index.vue");
  app.component("TextFoldExample", TextFoldExample.default);
  app.component("TimeLine", TimeLine.default);
};
