import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import * as STYLE from "zosLoader:./index.page.[pf].layout.js";
import { Fx } from "../../../libs/fx";
import { fpush, pageInit } from "../../../libs/zeppos-fluent-push";
import { push } from "@zos/router";
import { setScrollLock } from '@zos/page'

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
        })
        hmUI.createWidget(hmUI.widget.IMG, STYLE.LOGO_IMG_STYLE);
        new Fx({
          begin: 0,
          end: 1,
          fps: 60,
          time: 1,
          style: Fx.Styles.EASE_IN_OUT_QUAD,
          onStop() {
            fpush({
              url: "page/gt/HomePage/index.page",
              params: "",
            });
          },
          func: (result) => {},
        }); //*/
      },
    });
  },
  onDestroy() {
    logger.debug("page onDestroy invoked");
  },
});
