import { register3dThreeJsBasic } from "./basic";
import { register3dBufferGeometry } from "./BufferGeometry";
import { registerWaibuMoXing } from "./WaibuMoXing";
import { register3dPbrGeometry } from "./pbr";

export const register3dComponents = async (app) => {
  await register3dThreeJsBasic(app);
  await register3dBufferGeometry(app);
  await registerWaibuMoXing(app);
  await register3dPbrGeometry(app);
};
