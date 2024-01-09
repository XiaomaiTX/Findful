import * as hmUI from "@zos/ui";
import { getText } from "@zos/i18n";
import { getDeviceInfo } from "@zos/device";
import { px } from "@zos/utils";

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = getDeviceInfo();

export const ICON_BG_STYLE = {
	x: (px(480) - px(36)) / 2,
	y: px(14),
	src: "ble_devices_item_bg.png",
};

export const ICON_STYLE = {
	x: (px(480) - px(24)) / 2,
	y: px(20),
	src: "test_ble_icon.png",
};

export const DEVICE_NAME_STYLE = {
	x: px(84),
	y: px(50),
	w: px(313),
	h: px(54),
	color: 0xffffff,
	text_size: px(30),
	align_h: hmUI.align.CENTER_H,
	align_v: hmUI.align.CENTER_V,
	text: "Amazfit GTR 5",
};
export const MAC_TEXT_STYLE = {
	x: px(84),
	y: px(93),
	w: px(313),
	h: px(23),
	color: 0x9e9e9e,
	text_size: px(20),
	align_h: hmUI.align.CENTER_H,
	align_v: hmUI.align.CENTER_V,
	text: "A1:B1:C1:D1:F1:G1",
};
export const DISTANCE_TEXT_STYLE = {
	x: px(75),
	y: px(198),
	w: px(330),
	h: px(84),
	color: 0xffffff,
	text_size: px(70),
	align_h: hmUI.align.CENTER_H,
	align_v: hmUI.align.CENTER_V,
	text_style: hmUI.text_style.WRAP,
	text: "≤ 10 m",
};

export const BUTTON_STYLE = {
	x: px(120),
	y: px(400),
	w: px(240),
	h: px(60),
	radius: px(25),
	text_size:px(30),
	normal_color: 0x1c1c1e,
	press_color: 0x000000,
	text: getText("page_Finding_Found"),
	click_func: () => {},
};
