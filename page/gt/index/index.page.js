import * as hmUI from "@zos/ui";
import VisLog from "@silver-zepp/vis-log";

import { log as Logger } from "@zos/utils";
import * as STYLE from "zosLoader:./index.page.[pf].layout.js";
import { Fx } from "../../../libs/fx";
import { fpush, pageInit } from "../../../libs/zeppos-fluent-push";
import { push } from "@zos/router";
import { setScrollLock } from "@zos/page";
import { getScrollTop } from "@zos/page";
import { ZeppAnim } from "../../../libs/zeppos-animation-player";
import * as ANIM_STYLE from "./animations";

const logger = Logger.getLogger("index");
const vis = new VisLog("index.js");

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
				});
				hmUI.createWidget(hmUI.widget.IMG, STYLE.LOGO_IMG_STYLE);
				new Fx({
					begin: 0,
					end: 1,
					fps: 60,
					time: 1,
					style: Fx.Styles.EASE_IN_OUT_QUAD,
					onStop() {
						new ZeppAnim({
							tracks: [ANIM_STYLE.TRACK_1, ANIM_STYLE.TRACK_2],
						});
						//vis.log(getScrollTop())
						// fpush({
						// 	url: "page/gt/HomePage/index.page",
						// 	params: "",
						// }); //*/
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
