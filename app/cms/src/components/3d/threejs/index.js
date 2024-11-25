import { register3dThreeJsBasic } from "./basic";
import { register3dBufferGeometry } from "./BufferGeometry";
import { registerWaibuMoXing } from "./WaibuMoXing";
import { register3dPbrGeometry } from "./pbr";
import { register3dLine } from "./line";

export const register3dComponents = async (app) => {
  await register3dThreeJsBasic(app);
  await register3dBufferGeometry(app);
  await registerWaibuMoXing(app);
  await register3dPbrGeometry(app);
  await register3dLine(app);
};
