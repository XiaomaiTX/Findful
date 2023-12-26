<<<<<<< HEAD
import * as hmUI from "@zos/ui";
import { getText } from "@zos/i18n";
import { getDeviceInfo } from "@zos/device";
import { px } from "@zos/utils";

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = getDeviceInfo();

export const LOGO_IMG_STYLE = {
  x: (px(480)-px(64))/2,
  y: (px(480)-px(64))/2,
  img:"icon_64x64.png"
};
=======
import * as hmUI from "@zos/ui";
import { getText } from "@zos/i18n";
import { getDeviceInfo } from "@zos/device";
import { px } from "@zos/utils";

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = getDeviceInfo();

export const LOGO_IMG_STYLE = {
  x: (px(480)-px(64))/2,
  y: (px(480)-px(64))/2,
  img:"icon_64x64.png"
};
>>>>>>> 185a591fc5e1a4a8b263fc6fa9424cd5830df340
