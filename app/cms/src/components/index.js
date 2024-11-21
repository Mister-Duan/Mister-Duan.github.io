import { registerVueComponents } from "./VueComs";
import { register3dComponents } from "./3d/threejs";
export const registerComponents = async (app) => {
  return Promise.all([register3dComponents(app), registerVueComponents(app)]);
};
