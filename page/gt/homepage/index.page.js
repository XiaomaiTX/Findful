import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import * as STYLE from "zosLoader:./index.page.[pf].layout.js";

const logger = Logger.getLogger("helloworld");
Page({
  onInit() {
    logger.debug("page onInit invoked");
  },
  build() {
    logger.debug("page build invoked");
    const Title = hmUI.createWidget(hmUI.widget.TEXT, STYLE.TITLE_STYLE);
    const DescribtionText = hmUI.createWidget(hmUI.widget.TEXT, STYLE.DESCRIBTION_STYLE);
    const Subtitle = hmUI.createWidget(hmUI.widget.TEXT, STYLE.SUBTITLE_STYLE);
  },
  onDestroy() {
    logger.debug("page onDestroy invoked");
  },
});
