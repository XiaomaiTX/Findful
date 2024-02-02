import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import * as STYLE from "zosLoader:./index.page.[pf].layout.js";
import VisLog from "@silver-zepp/vis-log";
//import BLEMaster from "../../../libs/ble-master";
import BLEMaster from "@silver-zepp/easy-ble";
import { fpush, pageInit } from "../../../libs/zeppos-fluent-push";
import { TEST_BUTTON_STYLE, TEST_CONTAINER_STYLE } from "./index.page.r.layout";
import * as zosStorage from "@zos/storage";
// import Fx and fxpush
import * as zosInteraction from "@zos/interaction";
import * as zosRouter from "@zos/router";
import { setPageBrightTime } from "@zos/display";
import { ZeppAnim } from "../../../libs/zeppos-animation-player";
import * as ANIM_STYLE from "./animations";

const logger = Logger.getLogger("homepage");
const BLE = new BLEMaster();

Page({
	onInit() {
		logger.debug("page onInit invoked");
	},
	build() {
		pageInit({
			onStop() {
				setPageBrightTime({ brightTime: 600000 });
				zosInteraction.onGesture({
					callback: (event) => {
						if (event === zosInteraction.GESTURE_RIGHT) {
							zosRouter.exit();
						}
						return true;
					},
				});
				const vis = new VisLog("HomePage.js");
				vis.updateSettings({ line_count: 20 });

				//vis.debug("page build invoked");
				// TODO | Draw UI face

				const background = hmUI.createWidget(
					hmUI.widget.IMG,
					STYLE.BG_STYLE
				);
				const icon = hmUI.createWidget(
					hmUI.widget.IMG,
					STYLE.ICON_STYLE
				);
				const title = hmUI.createWidget(
					hmUI.widget.TEXT,
					STYLE.TITLE_STYLE
				);
				const describtionText = hmUI.createWidget(
					hmUI.widget.TEXT,
					STYLE.DESCRIBTION_STYLE
				);
				const subtitle = hmUI.createWidget(
					hmUI.widget.TEXT,
					STYLE.SUBTITLE_STYLE
				);
				new ZeppAnim({
					tracks: [ANIM_STYLE.TRACK_1],
				});
				// TODO | Animation of progress bar
				icon.addEventListener(hmUI.event.CLICK_DOWN, function (info) {
					BLE.stopScan();
					if (_devicesListUIGroup) {
						hmUI.deleteWidget(_devicesListUIGroup);
						// logger.log("delete _devicesListUIGroup");
						hmUI.redraw();
					}

					fpush({
						url: "page/gt/About/index.page",
						params: "",
					});
				});
				// TODO | Search for BLE devices
				var rawDevices = [];
				//logger.log("init rawDevices");
				var sortedDevices = [];
				function rssi2distance(rssi, m, n) {
					d = Math.pow(10, (-rssi - m) / (10 * n)).toFixed(1);
					return d;
				}

				logger.log("Init scan");
				function bleScan() {
					// Start scan | stop scan 4s later | return sortedDevices 5s later
					const scanOptions = {
						//duration: 4000,
						throttle_interval: 100,
						allow_duplicates: true,
						//on_duration: () => {
						// 	logger.log("scan stop");
						//},
					};

					BLE.startScan((scan_result) => {
						if (scan_result) {
							// Scan success
							// logger.log("Scan success");
							Object.keys(BLE.get.devices()).forEach((mac) => {
								const dev_name =
									BLE.get.devices()[mac].dev_name;
								if (dev_name !== "unnamed_device") {
									// Delete unnamed device
									const rssi = BLE.get.devices()[mac].rssi;

									rawDevices.push({ mac, dev_name, rssi });
								}
							});
						} else {
							// Scan failed
							logger.log("Scan failed");
							BLE.stopScan();
						}
					}, scanOptions);

					//BLE.stopScan();
					return 0;
				}
				function DrawDevicesList(sortedDevices, _devicesListUIGroup) {
					// TODO | Refresh scan results
					// logger.log("Draw"+rawDevices.length);
					// Delete old UI
					logger.log("========================");
					// Delete duplicate devices
					const uniqueDevices = Array.from(
						new Set(rawDevices.map((device) => device.mac))
					).map((mac) =>
						rawDevices.find((device) => device.mac === mac)
					);
					// Sort by RSSI (-20 ~ -100 dB)

					sortedDevices = uniqueDevices.sort(
						(a, b) => b.rssi - a.rssi
					);

					sortedDevices.forEach((device) => {
						logger.log(
							`${device.mac} - ${device.dev_name} - ${device.rssi}`
						);
					});

					if (_devicesListUIGroup) {
						hmUI.deleteWidget(_devicesListUIGroup);
						// logger.log("delete _devicesListUIGroup");
						hmUI.redraw();
					}
					// logger.log("Draw UI");
					const devicesListUIGroup = hmUI.createWidget(
						hmUI.widget.GROUP,
						{
							...STYLE.DEVICES_LIST_UI_GROUP_STYLE,
							h:
								STYLE.ITEM_CONTAINER_STYLE.y +
								(STYLE.ITEM_CONTAINER_STYLE.h + px(20)) *
									(sortedDevices.length + 1),
						}
					);

					_devicesListUIGroup = devicesListUIGroup;
					sortedDevices.forEach((device, index) => {
						// Draw devices list UI
						devicesListUIGroup
							.createWidget(hmUI.widget.IMG, {
								...STYLE.ITEM_CONTAINER_STYLE,
								y:
									STYLE.ITEM_CONTAINER_STYLE.y +
									(STYLE.ITEM_CONTAINER_STYLE.h + px(20)) *
										index,
							})
							.addEventListener(
								hmUI.event.CLICK_UP,
								function (info) {
									if (_devicesListUIGroup) {
										hmUI.deleteWidget(_devicesListUIGroup);
										// logger.log(
										// 	"delete _devicesListUIGroup"
										// );
										hmUI.redraw();
									}

									zosStorage.sessionStorage.setItem(
										"dev_name",
										device.dev_name
									);
									zosStorage.sessionStorage.setItem(
										"mac",
										device.mac
									);
									zosStorage.sessionStorage.setItem(
										"rssi",
										device.rssi
									);

									BLE.stopScan();
									fpush({
										url: "page/gt/Finding/index.page",
										params: "",
									});
								}
							); //*/
						devicesListUIGroup
							.createWidget(hmUI.widget.TEXT, {
								...STYLE.ITEM_TITLE_STYLE,
								y:
									STYLE.ITEM_TITLE_STYLE.y +
									(STYLE.ITEM_CONTAINER_STYLE.h + px(20)) *
										index,
								text: device.dev_name,
							})
							.setEnable(false);
						devicesListUIGroup
							.createWidget(hmUI.widget.IMG, {
								...STYLE.ITEM_ICON_STYLE,
								y:
									STYLE.ITEM_ICON_STYLE.y +
									(STYLE.ITEM_CONTAINER_STYLE.h + px(20)) *
										index,
							})
							.setEnable(false);
						devicesListUIGroup
							.createWidget(hmUI.widget.TEXT, {
								...STYLE.ITEM_DESTANCE_TEXT_STYLE,
								y:
									STYLE.ITEM_DESTANCE_TEXT_STYLE.y +
									(STYLE.ITEM_CONTAINER_STYLE.h + px(20)) *
										index,
								text: rssi2distance(device.rssi, 86, 6) + " m",
							})
							.setEnable(false);
						devicesListUIGroup
							.createWidget(hmUI.widget.TEXT, {
								...STYLE.ITEM_MAC_TEXT_STYLE,
								y:
									STYLE.ITEM_MAC_TEXT_STYLE.y +
									(STYLE.ITEM_CONTAINER_STYLE.h + px(20)) *
										index,
								text: device.mac,
							})
							.setEnable(false);
					});
					// logger.log("recreate UI");
					rawDevices.length = null;
					// logger.log("rawDevices.length " + rawDevices.length);

					sortedDevices.length = null;
					// logger.log("sortedDevices.length " + sortedDevices.length);

					return devicesListUIGroup;
				}
				bleScan();
				const scanDevicesTimer = setInterval(() => {
					switch (pageStatus) {
						case "scan_for_more_devices":
						case "scan_for_the_one_device":
					}

					_devicesListUIGroup = DrawDevicesList(
						sortedDevices,
						_devicesListUIGroup
					);
				}, 3000);
			},
		});
	},
	onDestroy() {
		logger.debug("page onDestroy invoked");
		zosInteraction.offGesture();
		BLE.stopScan();
	},
});
