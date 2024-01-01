import * as hmUI from "@zos/ui";
import { createWidget, widget, align, prop, text_style, event } from "@zos/ui";

import { log as Logger } from "@zos/utils";
import * as STYLE from "zosLoader:./index.page.[pf].layout.js";
import { Fx } from "../../../libs/fx";

const logger = Logger.getLogger("homepage");

Page({
	onInit() {
		logger.debug("page onInit invoked");
	},
	build() {
		logger.debug("page build invoked");
		const backgroundImg = hmUI.createWidget(
			hmUI.widget.IMG,
			STYLE.BG_STYLE
		);
		const icon = hmUI.createWidget(hmUI.widget.IMG, STYLE.ICON_STYLE);
		const title = hmUI.createWidget(hmUI.widget.TEXT, STYLE.TITLE_STYLE);
		const description = hmUI.createWidget(
			hmUI.widget.TEXT,
			STYLE.DESCRIPTION_STYLE
		);
    // Developer
		hmUI.createWidget(hmUI.widget.TEXT, {
			...STYLE.SUBTITLE_STYLE,
			text: "Developer",
		});
		hmUI.createWidget(hmUI.widget.FILL_RECT, {
			...STYLE.ITEM_CONTAINER_STYLE,
			y: px(228),
		});
		hmUI.createWidget(hmUI.widget.TEXT, {
			...STYLE.ITEM_TITLE_STYLE,
			y: px(228 + 21),
			text: "XiaomaiTX",
		});
		hmUI.createWidget(hmUI.widget.TEXT, {
			...STYLE.ITEM_SUBTITLE_STYLE,
			y: px(228 + 53),
			text: "i@lenrome.cn",
		});
	},
	onDestroy() {
		logger.debug("page onDestroy invoked");
	},
});
