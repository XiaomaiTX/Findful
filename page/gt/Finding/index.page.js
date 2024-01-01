import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import * as STYLE from "zosLoader:./index.page.[pf].layout.js";
import { Fx } from "../../../libs/fx";
import VisLog from "@silver-zepp/vis-log";
import { fpush, pageInit } from "../../../libs/zeppos-fluent-push";
import { setScrollLock } from "@zos/page";
import { sessionStorage } from "@zos/storage";
import BLEMaster from "../../../libs/ble-master";
import {
	onGesture,
	GESTURE_UP,
	GESTURE_DOWN,
	GESTURE_LEFT,
	GESTURE_RIGHT,
} from "@zos/interaction";

const logger = Logger.getLogger("homepage");

Page({
	onInit() {
		logger.debug("page onInit invoked");
	},
	build() {
		pageInit({
			onStop() {
				logger.debug("page build invoked");
				const BLE = new BLEMaster();
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
				const rssi = hmUI.createWidget(hmUI.widget.TEXT, {
					...STYLE.DISTANCE_TEXT_STYLE,
					text: sessionStorage.getItem("rssi"),
				});
				hmUI.createWidget(hmUI.widget.BUTTON, {
					...STYLE.BUTTON_STYLE,
					click_func: (button_widget) => {
						logger.log("button test");
					},
				});
				// start scanning for nearby devices
				const scan_success = BLE.startScan((scan_result) => {
					// if the device that we search for is found

					if (BLE.get.hasDevice(sessionStorage.getItem("mac"))) {
						const rssi = BLE.get.devices()[sessionStorage.getItem("mac")].rssi;

						// stop the scan
						
						rssi.setProperty(prop.MORE, {
							text: "hello",
						});
						// start connecting
					}
				});
			},
		});
	},
	onDestroy() {
		logger.debug("page onDestroy invoked");
	},
});
