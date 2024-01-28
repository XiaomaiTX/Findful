import * as STYLE from "zosLoader:./index.page.[pf].layout.js";
import { Fx, lerp, getMixColor } from "../../../libs/zeppos-animation-player";
import * as hmUI from "@zos/ui";

export const TIMER_TRACK = {
	config: {
		startTime: 0,
		repeat: true,
	},

	frames: [
		{
			delay: 0,
			style: Fx.Styles.LINEAR,
			time: 1, // 1秒的动画时间
			fps: 25,
			begin: {
				color: 0xffffff,
				seconds: 0,
			},
			end: { color: 0xffffff, seconds: 60 },
			init_func: (params) => {
				const text = hmUI.createWidget(
					hmUI.widget.TEXT,
					STYLE.TITLE_STYLE
				);

				return [text];
			},
			duration_func: (percent, begin, end, params) => {
				// 更新文本显示的秒数
				const seconds = Math.round(
					begin.seconds + percent * (end.seconds - begin.seconds)
				);
				params[0].setProperty(hmUI.prop.MORE, {
					...STYLE.TITLE_STYLE,
					color: getMixColor(begin.color, end.color, percent),
					text: seconds.toString(), // 实时显示秒数
				});
				return params;
			},
			end_func: (params) => {
				hmUI.deleteWidget(params[0]);
				hmUI.redraw();
				return params;
			},
		},
	],
};
