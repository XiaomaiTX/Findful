import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import * as STYLE from "zosLoader:./index.page.[pf].layout.js";
import { Fx } from "../../../libs/fx";
import { fpush, pageInit } from "../../../libs/zeppos-fluent-push";
import { setScrollLock } from "@zos/page";
import { sessionStorage } from "@zos/storage";

const logger = Logger.getLogger("homepage");

Page({
	onInit() {
		logger.debug("page onInit invoked");
	},
	build() {
		pageInit({
			onStop() {
				logger.debug("page build invoked");
				setScrollLock({
					lock: true,
				});
				hmUI.createWidget(hmUI.widget.IMG, STYLE.ICON_BG_STYLE);
				hmUI.createWidget(hmUI.widget.IMG, STYLE.ICON_STYLE);
				hmUI.createWidget(hmUI.widget.TEXT, {
					...STYLE.DEVICE_NAME_STYLE,
					text: sessionStorage.getItem("dev_name"),
				});
				hmUI.createWidget(hmUI.widget.TEXT, {
					...STYLE.MAC_TEXT_STYLE,
					text: sessionStorage.getItem("mac"),
				});
				hmUI.createWidget(hmUI.widget.TEXT, {
					...STYLE.DISTANCE_TEXT_STYLE,
					text: sessionStorage.getItem("rssi"),
				});
				hmUI.createWidget(hmUI.widget.BUTTON, {
					...STYLE.BUTTON_STYLE,
					click_func: (button_widget) => {
						logger.log("button test");
					},
				});
			},
		});
	},
	onDestroy() {
		logger.debug("page onDestroy invoked");
	},
});
