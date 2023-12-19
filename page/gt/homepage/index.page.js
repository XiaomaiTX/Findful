import * as hmUI from "@zos/ui";
import { log as logger } from "@zos/utils";
import * as STYLE from "zosLoader:./index.page.[pf].layout.js";
// import Fx and fxpush

Page({
  onInit() {
    logger.debug("page onInit invoked");TEXT
  },
  build() {
    logger.debug("page build invoked");
    const title = hmUI.createWidget(hmUI.widget.TEXT, STYLE.TITLE_STYLE);
    const describtionText = hmUI.createWidget(hmUI.widget.TEXT, STYLE.DESCRIBTION_STYLE);
    const subtitle = hmUI.createWidget(hmUI.widget.TEXT, STYLE.SUBTITLE_STYLE);
    // TODO | Animation of progress bar
    const progressBar =  hmUI.createWidget(hmUI.widget.FILL_RECT, STYLE.PROGRESS_BAR_STYLE);
    // TODO | Sreach for BL devices

    // TODO | Draw devices list
  },
  onDestroy() {
    logger.debug("page onDestroy invoked");
  },
});
