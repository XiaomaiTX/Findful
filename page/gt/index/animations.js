import { Fx, lerp } from "../../../libs/zeppos-animation-player";
import * as hmUI from "@zos/ui";

export const TRACK_1 = {
	startTime: 1,
	frames: [
		{
			delay: 0,
			style: Fx.Styles.EASE_IN_OUT_QUAD,
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
				const circle = hmUI.createWidget(hmUI.widget.CIRCLE, {
					center_x: px(240),
					center_y: px(240),
					radius: px(0),
					color: 0x69f0ae,
					alpha: px(150),
				});
				return circle;
			},
			duration_func: (percent, begin, end, params) => {
				params.setProperty(hmUI.prop.MORE, {
					center_x: px(240),
					center_y: px(240),
					radius: lerp(begin.radius, end.radius, percent),
					color: 0x69f0ae,
					alpha: px(150),
				});
			},
			end_func: (params) => {
				return params;
			},
		},
		{
			delay: 1,
			style: Fx.Styles.EASE_IN_OUT_QUAD,
			fps: 60,
			time: 0.2,
			begin: {
				radius: px(240),
			},
			end: {
				radius: px(0),
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
					alpha: px(150),
				});
			},
			end_func: (params) => {},
		},
	],
};
export const TRACK_2 = {
	startTime: 1,
	frames: [
		{
			begin: {
				radius: px(0),
			},
			end: {
				radius: px(240),
			},
			init_func: (params) => {
				console.log("t2 f1");
				const circle = hmUI.createWidget(hmUI.widget.CIRCLE, {
					center_x: px(240),
					center_y: px(240),
					radius: px(0),
					color: 0xffffff,
					alpha: px(150),
				});
				return circle;
			},
			duration_func: (percent, begin, end, params) => {
				params.setProperty(hmUI.prop.MORE, {
					center_x: px(240),
					center_y: px(240),
					radius: lerp(begin.radius, end.radius, percent),
					color: 0xffffff,
					alpha: px(150),
				});
			},
			end_func: (params) => {
				return params;
			},
		},
		{
			begin: {
				radius: px(240),
			},
			end: {
				radius: px(0),
			},
			init_func: (params) => {
				console.log("t2 f2");
				return params;
			},
			duration_func: (percent, begin, end, params) => {
				params.setProperty(hmUI.prop.MORE, {
					center_x: px(240),
					center_y: px(240),
					radius: lerp(begin.radius, end.radius, percent),
					color: 0xffffff,
					alpha: px(150),
				});
			},
			end_func: (params) => {},
		},
	],
};
