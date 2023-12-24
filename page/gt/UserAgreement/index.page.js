import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import * as STYLE from "zosLoader:./index.page.[pf].layout.js";
import { Fx } from "../../../libs/fx"

const logger = Logger.getLogger('homepage')

Page({
  onInit() {
    logger.debug("page onInit invoked");
  },
  build() {
    logger.debug("page build invoked");
  },
  onDestroy() {
    logger.debug("page onDestroy invoked");
  },
});
