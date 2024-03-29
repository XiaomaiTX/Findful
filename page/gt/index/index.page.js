import * as hmUI from "@zos/ui";
import VisLog from "@silver-zepp/vis-log";

import { log as Logger } from "@zos/utils";
import * as STYLE from "zosLoader:./index.page.[pf].layout.js";
import { Fx } from "../../../libs/fx";
import { fpush, pageInit } from "../../../libs/zeppos-fluent-push";
import { push } from "@zos/router";
import { setScrollLock } from "@zos/page";
import { getScrollTop } from "@zos/page";
import { openSync, O_RDONLY, O_CREAT, O_EXCL, statSync } from "@zos/fs";

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
						//vis.log(getScrollTop());
						const result = statSync({
							path: "data.json",
						});

						if (result) {
							console.log("exist");
							fpush({
								url: "page/gt/HomePage/index.page",
								params: "",
							});
						} else {
							console.log("not exist");
							fpush({
								url: "page/gt/QuickStart/index.page",
								params: "",
							}); //*/
						}
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
