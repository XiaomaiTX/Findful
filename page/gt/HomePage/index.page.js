import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import * as STYLE from "zosLoader:./index.page.[pf].layout.js";
import * as BLE from "@zos/ble";
import VisLog from "@silver-zepp/vis-log";
import BLEMaster from "../../../libs/ble-master";
import { fpush, pageInit } from "../../../libs/zeppos-fluent-push";
import { TEST_BUTTON_STYLE, TEST_CONTAINER_STYLE } from "./index.page.r.layout";

// import Fx and fxpush

const logger = Logger.getLogger("homepage");

Page({
  onInit() {
    logger.debug("page onInit invoked");
  },
  build() {
    pageInit({
      onStop() {
        const vis = new VisLog("HomePage.js");
        vis.updateSettings({ line_count: 20 });
        const BLE = new BLEMaster();

        //vis.debug("page build invoked");
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
        var _devicesListUIGroup;

        // TODO | Search for BLE devices
        var rawDevices = [];
        //vis.log("init rawDevices");

        //vis.log("Init scan");
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
        function refreshScan() {
          //vis.log("========================");
          // Delete duplicate devices
          const uniqueDevices = Array.from(
            new Set(rawDevices.map((device) => device.mac))
          ).map((mac) => rawDevices.find((device) => device.mac === mac));
          // Sort by RSSI (-20 ~ -100 dB)
          const sortedDevices = uniqueDevices.sort((a, b) => b.rssi - a.rssi);

          sortedDevices.forEach((device) => {
            //vis.log(`${device.mac} - ${device.dev_name} - ${device.rssi}`);
          });
          rawDevices.length = 0;
          // vis.log("clean"+rawDevices.length);
          //BLE.stopScan();
          return sortedDevices;
        }
        function DrawDevicesList() {
          // TODO | Refresh scan results
          let sortedDevices = refreshScan();
          // vis.log("Draw"+rawDevices.length);
          // Delete old UI
          if (_devicesListUIGroup) {
            hmUI.deleteWidget(_devicesListUIGroup);
            //vis.log("delete");
            hmUI.redraw();
          }

          const devicesListUIGroup = hmUI.createWidget(hmUI.widget.GROUP, {
            ...STYLE.DEVICES_LIST_UI_GROUP_STYLE,
            h:
              STYLE.ITEM_CONTAINER_STYLE.y +
              (STYLE.ITEM_CONTAINER_STYLE.h + px(20)) *
                (sortedDevices.length + 1),
          });

          _devicesListUIGroup = devicesListUIGroup;
          sortedDevices.forEach((device, index) => {
            // Draw devices list UI
            devicesListUIGroup
              .createWidget(hmUI.widget.IMG, {
                ...STYLE.ITEM_CONTAINER_STYLE,
                y:
                  STYLE.ITEM_CONTAINER_STYLE.y +
                  (STYLE.ITEM_CONTAINER_STYLE.h + px(20)) * index,
              })
              .addEventListener(hmUI.event.CLICK_UP, function (info) {}); //*/
            devicesListUIGroup
              .createWidget(hmUI.widget.TEXT, {
                ...STYLE.ITEM_TITLE_STYLE,
                y:
                  STYLE.ITEM_TITLE_STYLE.y +
                  (STYLE.ITEM_CONTAINER_STYLE.h + px(20)) * index,
                text: device.dev_name,
              })
              .setEnable(false);
           devicesListUIGroup
                  .createWidget(hmUI.widget.IMG, {
                    ...STYLE.ITEM_ICON_STYLE,
                    y:
                      STYLE.ITEM_ICON_STYLE.y +
                      (STYLE.ITEM_CONTAINER_STYLE.h + px(20)) * index,
                  })
                  .setEnable(false)
                y: /*
                  STYLE.ITEM_ICON_STYLE.y +
                  (STYLE.ITEM_CONTAINER_STYLE.h + px(20)) * index,
              })timeouteWidget(hmUI.widget.FILL_RECT, {
                    ...STYLE.ITEM_DESTANCE_CONTAINER_STYLE,
                    y:          }, 1000);

                  .setEnable(false);//*/
            devicesListUIGroup
              .createWidget(hmUI.widget.TEXT, {
                ...STYLE.ITEM_DESTANCE_TEXT_STYLE,
                y:
                  STYLE.ITEM_DESTANCE_TEXT_STYLE.y +
                  (STYLE.ITEM_CONTAINER_STYLE.h + px(20)) * index,
                text: device.rssi,
              })
              .setEnable(false);
            /*devicesListUIGroup
                  .createWidget(hmUI.widget.FILL_RECT, {
                    ...STYLE.ITEM_MAC_CONTAINER_STYLE,
                    y:
                      STYLE.ITEM_MAC_CONTAINER_STYLE.y +
                      (STYLE.ITEM_CONTAINER_STYLE.h + px(20)) * index,
                  })
                  .setEnable(false);//*/
            devicesListUIGroup
              .createWidget(hmUI.widget.TEXT, {
                ...STYLE.ITEM_MAC_TEXT_STYLE,
                y:
                  STYLE.ITEM_MAC_TEXT_STYLE.y +
                  (STYLE.ITEM_CONTAINER_STYLE.h + px(20)) * index,
                text: device.mac,
              })
              .setEnable(false);

            /*devicesListUIGroup
                  .createWidget(hmUI.widget.IMG, {
                    ...STYLE.ITEM_CHEVRON_RIGHT_STYLE,
                    y:
                      STYLE.ITEM_CHEVRON_RIGHT_STYLE.y +
                      (STYLE.ITEM_CONTAINER_STYLE.h + px(20)) * index,
                  })
                  .setEnable(false);//*/
          });
        }
        const scanDevicesTimer = setInterval(() => {
          switch (pageStatus) {
            case "scan_for_more_devices":
            case "scan_for_the_one_device":
          }

          DrawDevicesList();
        }, 3000);
        function ScanOneDevice(mac) {
          let sortedDevices = refreshScan();
        }
      },
    });
  },
  onDestroy() {
    logger.debug("page onDestroy invoked");
  },
});
