import * as hmUI from "@zos/ui";
import { getText } from "@zos/i18n";
import { getDeviceInfo } from "@zos/device";
import { px } from "@zos/utils";

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = getDeviceInfo();

export const TITLE_STYLE = {
	text: getText("page_QuickStart_Title"),
	x: px(0),
	y: px(198),
	w: px(480),
	h: px(84),
	color: 0x000000,
	text_size: px(62),
	align_h: hmUI.align.CENTER_H,
	align_v: hmUI.align.CENTER_V,
	text_style: hmUI.text_style.WRAP,
};
export const TOP_TITLE_STYLE = {
	text: getText("page_QuickStart_Title"),
	x: px(0),
	y: px(27),
	w: px(480),
	h: px(42),
	color: 0x000000,
	text_size: px(36),
	align_h: hmUI.align.CENTER_H,
	align_v: hmUI.align.CENTER_V,
	text_style: hmUI.text_style.WRAP,
};
export const ICON_STYLE = {
	x: px(208),
	y: px(388),
	alpha: 0,
	src: "radio.png",
};
