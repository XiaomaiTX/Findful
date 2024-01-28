import { Fx, lerp } from "../../../libs/zeppos-animation-player";
import * as hmUI from "@zos/ui";

export const TRACK_1 = {
	config: {
		startTime: 0,
	},

	frames: [
		{
			delay: 0,
			style: Fx.Styles.EASE_OUT_QUAD,
			fps: 60,
			time: 0.2,
			begin: {
				radius: px(0),
			},
			end: {
				radius: px(240),
			},
			init_func: (params) => {
				console.log("t1 f1");
				const mask = hmUI.createWidget(hmUI.widget.CIRCLE, {
					center_x: px(240),
					center_y: px(240),
					radius: px(240),
					color: 0x000000,
					alpha: 255,
				});

				const circle = hmUI.createWidget(hmUI.widget.CIRCLE, {
					center_x: px(240),
					center_y: px(240),
					radius: px(0),
					color: 0x69f0ae,
					alpha: 255 * 0.5,
				});
				return circle;
			},
			duration_func: (percent, begin, end, params) => {
				params.setProperty(hmUI.prop.MORE, {
					center_x: px(240),
					center_y: px(240),
					radius: lerp(begin.radius, end.radius, percent),
					color: 0x69f0ae,
					alpha: 255 * 0.5,
				});
			},
			end_func: (params) => {
				return params;
			},
		},
		{
			delay: 0,
			style: Fx.Styles.EASE_OUT_QUAD,
			fps: 60,
			time: 0.2,
			begin: {
				radius: px(240),
			},
			end: {
				radius: px(200),
			},
			init_func: (params) => {
				console.log("t1 f2");
				return params;
			},
			duration_func: (percent, begin, end, params) => {
				params.setProperty(hmUI.prop.MORE, {
					center_x: px(240),
					center_y: px(240),
					radius: lerp(begin.radius, end.radius, percent),
					color: 0x69f0ae,
					alpha: 255 * 0.5,
				});
			},
			end_func: (params) => {},
		},
	],
};
export const TRACK_2 = {
	config: {
		startTime: 0,
	},
	frames: [
		{
			delay: 0,
			time: 0.3,
			style: Fx.Styles.EASE_OUT_QUAD,

			begin: {
				radius: px(0),
			},
			end: {
				radius: px(150),
			},
			init_func: (params) => {
				console.log("t2 f1");
				const circle = hmUI.createWidget(hmUI.widget.CIRCLE, {
					center_x: px(240),
					center_y: px(240),
					radius: px(0),
					color: 0xb9f6ca,
					alpha: 255 * 0.5,
				});
				return circle;
			},
			duration_func: (percent, begin, end, params) => {
				params.setProperty(hmUI.prop.MORE, {
					center_x: px(240),
					center_y: px(240),
					radius: lerp(begin.radius, end.radius, percent),
					color: 0xb9f6ca,
					alpha: 255 * 0.5,
				});
			},
			end_func: (params) => {
				return params;
			},
		},
	],
};
export const TRACK_3 = {
	config: {
		startTime: 0,
	},

	frames: [
		{
			delay: 0,
			time: 0.2,
			begin: {
				alpha: 0,
			},
			end: {
				alpha: 255,
			},
			init_func: (params) => {
				const img = hmUI.createWidget(hmUI.widget.IMG, {
					x: (px(480) - px(158)) / 2,
					y: (px(480) - px(158)) / 2,
					w: px(158),
					h: px(158),
					alpha: 0,
					auto_scale: true,
					src: "check.png",
				});
				return img;
			},
			duration_func: (percent, begin, end, params) => {
				params.setProperty(hmUI.prop.MORE, {
					x: (px(480) - px(158)) / 2,
					y: (px(480) - px(158)) / 2,
					w: px(158),
					h: px(158),
					alpha: lerp(begin.alpha, end.alpha, percent),
					auto_scale: true,
					src: "check.png",
				});
			},
			end_func: (params) => {
				return params;
			},
		},
	],
};
