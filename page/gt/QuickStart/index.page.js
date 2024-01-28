import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import * as STYLE from "zosLoader:./index.page.[pf].layout.js";
import { Fx } from "../../../libs/fx";
import { ZeppAnim } from "../../../libs/zeppos-animation-player";
import * as ANIM_STYLE from "./animations";
import { setPageBrightTime } from "@zos/display";

const logger = Logger.getLogger("homepage");

Page({
	onInit() {
		logger.debug("page onInit invoked");
	},
	build() {
		setPageBrightTime({ brightTime: 600000 });

		logger.debug("page build invoked");
		new ZeppAnim({
			tracks: [ANIM_STYLE.TRACK_1],
		});
	},
	onDestroy() {
		logger.debug("page onDestroy invoked");
	},
});
