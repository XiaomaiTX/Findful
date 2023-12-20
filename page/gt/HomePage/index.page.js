import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import * as STYLE from "zosLoader:./index.page.[pf].layout.js";
import * as BLE from "@zos/ble"
// import Fx and fxpush

const logger = Logger.getLogger('homepage')


Page({
  onInit() {
    logger.debug("page onInit invoked");
  },
  build() {
    logger.debug("page build invoked");
    const title = hmUI.createWidget(hmUI.widget.TEXT, STYLE.TITLE_STYLE);
    const describtionText = hmUI.createWidget(hmUI.widget.TEXT, STYLE.DESCRIBTION_STYLE);
    const subtitle = hmUI.createWidget(hmUI.widget.TEXT, STYLE.SUBTITLE_STYLE);
    // TODO | Animation of progress bar
    const progressBar = hmUI.createWidget(hmUI.widget.FILL_RECT, STYLE.PROGRESS_BAR_STYLE);
    // TODO | Sreach for BLE devices
    BLE.mstStartScan(function (resultList) {
      for (var i = 0; i < resultList.length; i++) {
        result = resultList[i]
        console.log("---Device Name---", result.dev_name);// string
        console.log("---Device Addr---", result.dev_addr);// ArrayBuffer
        console.log("---Device RSSI---", result.rssi);// number
      }
    })
    BLE.mstStopScan()
    // TODO | Draw devices list
    for (var i = 0; i < resultList.length; i++) {
      globalThis['test_' + i] = hmUI.createWidget(hmUI.widget.FILL_RECT, STYLE.PROGRESS_BAR_STYLE);
    }

  },
  onDestroy() {
    logger.debug("page onDestroy invoked");
  },
});
