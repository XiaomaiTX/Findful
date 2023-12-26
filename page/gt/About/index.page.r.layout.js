import * as hmUI from "@zos/ui";
import { getText } from "@zos/i18n";
import { getDeviceInfo } from "@zos/device";
import { px } from "@zos/utils";

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = getDeviceInfo();

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
export const ITEM_CONTAINER_STYLE = {
  x: px(0),
  y: px(0),
  w: px(440),
  h: px(100),
  radius: px(25),
  color: 0x1c1c1e,
};
export const ITEM_TITLE_STYLE = {
  x: px(28),
  y: px(21),
  w: px(313),
  h: px(29),
  color: 0xffffff,
  text_size: px(26),
  align_h: align.LEFT,
  align_v: align.CENTER_V,
  text_style: text_style.NONE,
  text: "Devices",
};
export const ITEM_SUBTITLE_STYLE = {
  x: px(28),
  y: px(53),
  w: px(313),
  h: px(29),
  color: 0x9e9e9e,
  text_size: px(24),
  align_h: align.LEFT,
  align_v: align.CENTER_V,
  text_style: text_style.NONE,
  text: "Devices",
};
