import * as hmUI from "@zos/ui";
import { getText } from "@zos/i18n";
import { createWidget, widget, align, prop, text_style, event } from "@zos/ui";
import { getDeviceInfo } from "@zos/device";
import { px } from "@zos/utils";

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = getDeviceInfo();

export const BG_STYLE = {
	x: px(0),
	y: px(0),
	src: "background.png",
};

export const ICON_STYLE = {
	x: (px(480) - px(62)) / 2,
	y: px(27),
	src: "compass.png",
};

export const TITLE_STYLE = {
	x: px(0),
	y: px(27 + 63),
	w: px(480),
	h: px(54),
	color: 0xffffff,
	text_size: px(46),
	align_h: align.CENTER_H,
	align_v: align.CENTER_V,
	text_style: text_style.NONE,
	text: "Findful",
};

export const DESCRIBTION_STYLE = {
	x: px(0),
	y: px(27 + 116),
	w: px(480),
	h: px(30),
	color: 0x9e9e9e,
	text_size: px(28),
	align_h: align.CENTER_H,
	align_v: align.CENTER_V,
	text_style: text_style.NONE,
	text: "Find your device easily",
};

export const SUBTITLE_STYLE = {
	x: px(39),
	y: px(198),
	w: px(71),
	h: px(23),
	color: 0xffffff,
	text_size: px(20),
	align_h: align.CENTER_H,
	align_v: align.CENTER_V,
	text_style: text_style.NONE,
	text: "Devices",
};

export const PROGRESS_BAR_STYLE = {
	x: px(40),
	y: px(230),
	w: px(400),
	h: px(5),
	radius: px(3),
	color: 0x3e3e3e,
};

export const DEVICES_LIST_UI_GROUP_STYLE = {
	x: px(20),
	y: px(244),
	w: px(440),
	h: px(480),
};
export const ITEM_CONTAINER_STYLE = {
	x: px(0),
	y: px(0),
	w: px(440),
	h: px(100),
	src: "item_container.png",
	/*
	x: px(0),
	y: px(0),
	w: px(440),
	h: px(100),
	radius: px(25),
	color: 0x1c1c1e,//*/
};
export const ITEM_TITLE_STYLE = {
	x: px(0 + 68),
	y: px(0 + 21),
	w: px(313),
	h: px(29),
	color: 0xffffff,
	text_size: px(26),
	align_h: align.LEFT,
	align_v: align.CENTER_V,
	text_style: text_style.NONE,
	text: "Amazfit GTR 5",
};
export const ITEM_ICON_BG_STYLE = {
	x: px(0 + 16),
	y: px(0 + 32),
	src: "ble_devices_item_bg.png",
};
export const ITEM_ICON_STYLE = {
	x: px(0 + 16 + 6),
	y: px(0 + 32 + 6),
	src: "test_ble_icon.png",
};
export const ITEM_DESTANCE_CONTAINER_STYLE = {
	x: px(0 + 68),
	y: px(0 + 57),
	w: px(50),
	h: px(22),
	radius: px(11),
	color: 0x3adb31,
};
export const ITEM_DESTANCE_TEXT_STYLE = {
	x: px(0 + 68),
	y: px(0 + 57),
	w: px(50),
	h: px(22),
	color: 0xffffff,
	text_size: px(15),
	align_h: align.CENTER_H,
	align_v: align.CENTER_V,
	text_style: text_style.NONE,
	text: "10 m",
};

export const ITEM_MAC_CONTAINER_STYLE = {
	x: px(0 + 125),
	y: px(0 + 57),
	w: px(150),
	h: px(22),
	radius: px(11),
	color: 0x3adb31,
};
export const ITEM_MAC_TEXT_STYLE = {
	x: px(0 + 125),
	y: px(0 + 57),
	w: px(150),
	h: px(22),
	color: 0xffffff,
	text_size: px(15),
	align_h: align.CENTER_H,
	align_v: align.CENTER_V,
	text_style: text_style.NONE,
	text: "A1:B1:C1:D1:F1:G1",
};


export const ITEM_CHEVRON_RIGHT_STYLE = {
	x: px(0 + 400),
	y: px(0 + 38),
	src: "chevron-right.png",
};
