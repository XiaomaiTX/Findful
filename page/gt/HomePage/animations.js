import * as STYLE from "zosLoader:./index.page.[pf].layout.js";
import { Fx, lerp } from "../../../libs/zeppos-animation-player";
import * as hmUI from "@zos/ui";

export const TRACK_1 = {
	config: {
		startTime: 0,
		repeat: true,
	},

	frames: [
		{
			delay: 0,
			style: Fx.Styles.EASE_OUT_QUAD,
			time: 1,
			begin: {
				x: STYLE.PROGRESS_BAR_STYLE.x,
				w: STYLE.PROGRESS_BAR_STYLE.w,
			},
			end: {
				x: STYLE.PROGRESS_BAR_STYLE.x + px(400),
				w: px(0),
			},
			init_func: (params) => {
				const progressBar = hmUI.createWidget(
					hmUI.widget.FILL_RECT,
					STYLE.PROGRESS_BAR_STYLE
				);
				return progressBar;
			},
			duration_func: (percent, begin, end, params) => {
				params.setProperty(hmUI.prop.MORE, {
					...STYLE.PROGRESS_BAR_STYLE,
					x: lerp(begin.x, end.x, percent),
					w: lerp(begin.w, end.w, percent),
				});
				return params;
			},
			end_func: (params) => {
				hmUI.deleteWidget(params);
				hmUI.redraw();
				return;
			},
		},
	],
};
