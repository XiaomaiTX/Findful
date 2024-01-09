import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import * as STYLE from "zosLoader:./index.page.[pf].layout.js";
import { Fx } from "../../../libs/fx";
import VisLog from "@silver-zepp/vis-log";
import { fpush, pageInit } from "../../../libs/zeppos-fluent-push";
import { setScrollLock } from "@zos/page";
import { sessionStorage } from "@zos/storage";
import BLEMaster from "../../../libs/ble-master";
import { setPageBrightTime } from "@zos/display";
import { getScrollTop } from "@zos/page";

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
            logger.log("button test");
          },
        });
        function rssi2distance(rssi, m, n) {
          d = 10 ^ ((Math.abs(rssi) - m) / (10 * n));
          return d;
        }
        // start scanning for nearby devices
        const scan_success = BLE.startScan((scan_result) => {
          // if THE device (mac) that we search for is found

          if (BLE.get.hasDevice(sessionStorage.getItem("mac"))) {
            const rssi =
              BLE.get.devices()[sessionStorage.getItem("mac")].rssi;
			const distance=rssi2distance(rssi,50,4)
			// Todo | Check m and n
			vis.log(rssi+" "+distance+" m")
			// TODO | 
            rssiText.setProperty(hmUI.prop.MORE, {
              text: distance+" m",
            });
          }
        });
      },
    });
  },
  onDestroy() {
    logger.debug("page onDestroy invoked");
	BLE.stopScan()
  },
});
