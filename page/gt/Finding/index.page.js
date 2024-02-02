import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import * as STYLE from "zosLoader:./index.page.[pf].layout.js";
import { Fx } from "../../../libs/fx";
import VisLog from "@silver-zepp/vis-log";
import { fpush, pageInit, fback } from "../../../libs/zeppos-fluent-push";
import { setScrollLock } from "@zos/page";
import { sessionStorage } from "@zos/storage";
//import BLEMaster from "../../../libs/ble-master";
import BLEMaster from "@silver-zepp/easy-ble";
import { setPageBrightTime } from "@zos/display";
import { getScrollTop } from "@zos/page";
import { back } from "@zos/router";
import * as ANIM_STYLE from "./animations";
import { ZeppAnim } from "../../../libs/zeppos-animation-player";

import {
	onGesture,
	GESTURE_UP,
	GESTURE_DOWN,
	GESTURE_LEFT,
	GESTURE_RIGHT,
} from "@zos/interaction";

const logger = Logger.getLogger("homepage");
const BLE = new BLEMaster();
const vis = new VisLog("Finding.js");

Page({
	onInit() {
		logger.debug("page onInit invoked");
	},
	build() {
		pageInit({
			onStop() {
				logger.debug("page build invoked");
				const ScrollY = getScrollTop();
				logger.log(ScrollY);
				setPageBrightTime({ brightTime: 600000 });

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
				const rssiText = hmUI.createWidget(hmUI.widget.TEXT, {
					...STYLE.DISTANCE_TEXT_STYLE,
					text: "- m",
				});
				hmUI.createWidget(hmUI.widget.BUTTON, {
					...STYLE.BUTTON_STYLE,
					click_func: (button_widget) => {
						BLE.stopScan();
						new ZeppAnim({
							tracks: [
								ANIM_STYLE.TRACK_1,
								ANIM_STYLE.TRACK_2,
								ANIM_STYLE.TRACK_3,
							],
						});
					},
				});
				var color = 0xffffff;

				function rssi2distance(rssi, m, n) {
					d = Math.pow(10, (-rssi - m) / (10 * n)).toFixed(2);
					return d;
				}
				// start scanning for nearby devices
				const scanOptions = {
					//duration: 4000,
					throttle_interval: 100,
					allow_duplicates: true,
					//on_duration: () => {
					// 	logger.log("scan stop");
					//},
				};

				const scan_success = BLE.startScan((scan_result) => {
					// if THE device (mac) that we search for is found

					if (BLE.get.hasDevice(sessionStorage.getItem("mac"))) {
						const rssi = parseInt(
							BLE.get.devices()[sessionStorage.getItem("mac")]
								.rssi
						);
						const distance = rssi2distance(parseInt(rssi), 86, 6);
						// Todo | Check m and n
						if (distance >= 0 && distance < 1) {
							color = 0x00e676;
						} else if (distance >= 1 && distance < 1.5) {
							color = 0xffea00;
						} else if (distance >= 1.5 && distance < 2) {
							color = 0xff9100;
						} else if (distance >= 2 && distance < 3.7) {
							color = 0xff1744;
						}

						rssiText.setProperty(hmUI.prop.MORE, {
							text: distance + " m",
							color: color,
						});
					}
				}, scanOptions);
			},
		});
	},
	onDestroy() {
		logger.debug("page onDestroy invoked");
		BLE.stopScan();
	},
});
