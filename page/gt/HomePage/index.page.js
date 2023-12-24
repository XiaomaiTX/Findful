import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import * as STYLE from "zosLoader:./index.page.[pf].layout.js";
import * as BLE from "@zos/ble";
import VisLog from "@silver-zepp/vis-log";
import BLEMaster from "../../../libs/ble-master";
// import Fx and fxpush

const logger = Logger.getLogger("homepage");

Page({
	onInit() {
		logger.debug("page onInit invoked");
	},
	build() {
		const vis = new VisLog("HomePage.js");
		vis.updateSettings({ line_count: 20 });
		const BLE = new BLEMaster();

		vis.debug("page build invoked");
		// TODO | Draw UI face

		const background = hmUI.createWidget(hmUI.widget.IMG, STYLE.BG_STYLE);
		const icon = hmUI.createWidget(hmUI.widget.IMG, STYLE.ICON_STYLE);
		const title = hmUI.createWidget(hmUI.widget.TEXT, STYLE.TITLE_STYLE);
		const describtionText = hmUI.createWidget(
			hmUI.widget.TEXT,
			STYLE.DESCRIBTION_STYLE
		);
		const subtitle = hmUI.createWidget(
			hmUI.widget.TEXT,
			STYLE.SUBTITLE_STYLE
		);
		// TODO | Animation of progress bar
		const progressBar = hmUI.createWidget(
			hmUI.widget.FILL_RECT,
			STYLE.PROGRESS_BAR_STYLE
		);
		// TODO | Sreach for BLE devices
		rawDevices = [];
		vis.log("init rawDevices");

		function refreshScan() {
			vis.log("Init scan");
			BLE.startScan((scan_result) => {
				if (scan_result) {
					// Scan success
					Object.keys(BLE.get.devices()).forEach((mac) => {
						const dev_name = BLE.get.devices()[mac].dev_name;
						const rssi = BLE.get.devices()[mac].rssi;
						if (dev_name !== "unnamed_device") {
							// Delete unnamed device
							rawDevices.push({ mac, dev_name, rssi });
						}
					});
				} else {
					// Scan failed
					vis.log("Scan failed");
				}
			});
			//vis.log("========================")
			// Delete duplicate devices
			const uniqueDevices = Array.from(
				new Set(rawDevices.map((device) => device.mac))
			).map((mac) => rawDevices.find((device) => device.mac === mac));
			// Sort by RSSI (-20 ~ -100 dB)
			const sortedDevices = uniqueDevices.sort((a, b) => b.rssi - a.rssi);

			sortedDevices.forEach((device) => {
				//vis.log(`${device.mac} - ${device.dev_name} - ${device.rssi}`)
			});
			rawDevices = [];
			BLE.stopScan();
		}
		refreshScan();
		// TODO | Draw devices list
		const itemContainer = hmUI.createWidget(
			hmUI.widget.FILL_RECT,
			STYLE.ITEM_CONTAINER_STYLE
		);
		const itemTitle = hmUI.createWidget(
			hmUI.widget.TEXT,
			STYLE.ITEM_TITLE_STYLE
		);
		const itemIconBg = hmUI.createWidget(
			hmUI.widget.IMG,
			STYLE.ITEM_ICON_BG_STYLE
		);
		const itemIcon = hmUI.createWidget(
			hmUI.widget.IMG,
			STYLE.ITEM_ICON_STYLE
		);
		const itemDestanceContainer = hmUI.createWidget(
			hmUI.widget.FILL_RECT,
			STYLE.ITEM_DESTANCE_CONTAINER_STYLE
		);
		const itemDestanceText = hmUI.createWidget(
			hmUI.widget.TEXT,
			STYLE.ITEM_DESTANCE_TEXT_STYLE
		);

		const itemMacContainer = hmUI.createWidget(
			hmUI.widget.FILL_RECT,
			STYLE.ITEM_MAC_CONTAINER_STYLE
		);
		const itemMacText = hmUI.createWidget(
			hmUI.widget.TEXT,
			STYLE.ITEM_MAC_TEXT_STYLE
		);
		const itemStatusLight = hmUI.createWidget(
			hmUI.widget.CIRCLE,
			STYLE.ITEM_STATUS_LIGHT_STYLE
		);
		const itemChevronRight = hmUI.createWidget(
			hmUI.widget.IMG,
			STYLE.ITEM_CHEVRON_RIGHT_STYLE
		);

		//for (let i = 0; i < sortedDevices.length; i++) {
		//globalThis['test_' + i] = hmUI.createWidget(hmUI.widget.FILL_RECT, STYLE.PROGRESS_BAR_STYLE);
		//}
	},
	onDestroy() {
		logger.debug("page onDestroy invoked");
	},
});
