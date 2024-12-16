import { registerVueComponents } from "./VueComs";
export const registerComponents = async (app) => {
  return Promise.all([registerVueComponents(app)]);
};
