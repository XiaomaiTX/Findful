import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import * as STYLE  from "zosLoader:./index.page.[pf].layout.js";

const logger = Logger.getLogger("helloworld");
Page({
  onInit() {
    logger.debug("page onInit invoked");
  },
  build() {
    logger.debug("page build invoked");
    hmUI.createWidget(hmUI.widget.IMG, STYLE.LOGO_IMG_STYLE);
    new Fx({
      begin: 0,
      end: 1,
      fps: 60,
      time: 1,
      style: Fx.Styles.EASE_IN_OUT_QUAD,
      onStop() {
        fxpush({
          url: 'page/gt/homepage/index.page',
          params: ''
        })

      },
      func: (result) => {
      }
    })
  },
  onDestroy() {
    logger.debug("page onDestroy invoked");
  },
});
