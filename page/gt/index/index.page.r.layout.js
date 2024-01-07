import * as hmUI from "@zos/ui";
import { getText } from "@zos/i18n";
import { getDeviceInfo } from "@zos/device";
import { px } from "@zos/utils";

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = getDeviceInfo();

export const LOGO_IMG_STYLE = {
	x: (px(480) - px(100)) / 2,
	y: (px(480) - px(100)) / 2,
	w: px(100),
	h: px(100),
	auto_scale: true,
	src: "icon.png",
};
