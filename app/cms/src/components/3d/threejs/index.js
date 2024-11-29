import { register3dThreeJsBasic } from "./basic";
import { register3dBufferGeometry } from "./BufferGeometry";
import { registerWaibuMoXing } from "./WaibuMoXing";
import { register3dPbrGeometry } from "./pbr";
import { register3dLine } from "./line";
import { register3dCamera } from "./camera";
import { register3dShadowExample } from "./shadow";
import { register3dSpriteExample } from "./sprite";
import { register3dComposer } from "./composer";

export const register3dComponents = async (app) => {
  await register3dThreeJsBasic(app);
  await register3dBufferGeometry(app);
  await registerWaibuMoXing(app);
  await register3dPbrGeometry(app);
  await register3dLine(app);
  await register3dCamera(app);
  await register3dShadowExample(app);
  await register3dSpriteExample(app);
  await register3dComposer(app);
};
