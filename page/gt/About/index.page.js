import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import * as STYLE from "zosLoader:./index.page.[pf].layout.js";
import { Fx } from "../../../libs/fx";

const logger = Logger.getLogger("homepage");

Page({
  onInit() {
    logger.debug("page onInit invoked");
  },
  build() {
    logger.debug("page build invoked");
    const title = hmUI.createWidget(hmUI.widget.TEXT, STYLE.TITLE_STYLE);
    const describtion = hmUI.createWidget(hmUI.widget.TEXT, STYLE.DESCRIBTION_STYLE);
    const developerTitle = hmUI.createWidget(hmUI.widget.TEXT, STYLE.SUBTITLE_STYLE);
    const developerContainer = hmUI.createWidget(hmUI.widget.FILL_RECT, STYLE.DESCRIBTION_STYLE);
    const developerName = hmUI.createWidget(hmUI.widget.TEXT, STYLE.ITEM_TITLE_STYLE);
    const developerMail= hmUI.createWidget(hmUI.widget.TEXT, STYLE.ITEM_SUBTITLE_STYLE);
  },
  onDestroy() {
    logger.debug("page onDestroy invoked");
  },
});
