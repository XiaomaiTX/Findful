import * as STYLE from "zosLoader:./index.page.[pf].layout.js";
import { Fx, lerp, getMixColor } from "../../../libs/zeppos-animation-player";
import * as hmUI from "@zos/ui";
import { fpush } from "../../../libs/zeppos-fluent-push";
import { openSync, O_RDONLY, O_CREAT, O_EXCL, statSync } from "@zos/fs";
import { getText } from "@zos/i18n";

export const TRACK_1 = {
	config: {
		startTime: 0.5,
	},

	frames: [
		{
			delay: 0,
			style: Fx.Styles.EASE_OUT_QUAD,
			time: 0.5,
			begin: {
				color: 0x000000,
			},
			end: { color: 0xffffff },
			init_func: (params) => {
				const text = hmUI.createWidget(
					hmUI.widget.TEXT,
					STYLE.TITLE_STYLE
				);
				const sub = hmUI.createWidget(
					hmUI.widget.TEXT,
					STYLE.TOP_TITLE_STYLE
				);

				const img = hmUI.createWidget(
					hmUI.widget.IMG,
					STYLE.ICON_STYLE
				);

				return [text, img, sub];
			},
			duration_func: (percent, begin, end, params) => {
				params[0].setProperty(hmUI.prop.MORE, {
					...STYLE.TITLE_STYLE,
					color: getMixColor(begin.color, end.color, percent),
				});
				return params;
			},
			end_func: (params) => {
				return params;
			},
		},
		{
			delay: 1,
			style: Fx.Styles.EASE_OUT_QUAD,
			time: 0.5,
			begin: {
				color: 0xffffff,
			},
			end: { color: 0x000000 },
			init_func: (params) => {
				return params;
			},
			duration_func: (percent, begin, end, params) => {
				params[0].setProperty(hmUI.prop.MORE, {
					...STYLE.TITLE_STYLE,
					color: getMixColor(begin.color, end.color, percent),
				});
				return params;
			},
			end_func: (params) => {
				STYLE.TITLE_STYLE.text = getText("page_QuickStart_Text_1");
				params[0].setProperty(hmUI.prop.MORE, {
					...STYLE.TITLE_STYLE,
				});

				return params;
			},
		},
		{
			delay: 0,
			style: Fx.Styles.EASE_OUT_QUAD,
			time: 0.5,
			begin: {
				color: 0x000000,

				alpha: 0,
			},
			end: { color: 0xffffff, top_color: 0x73ffb2, alpha: 255 },
			init_func: (params) => {
				return params;
			},
			duration_func: (percent, begin, end, params) => {
				params[0].setProperty(hmUI.prop.MORE, {
					...STYLE.TITLE_STYLE,
					color: getMixColor(begin.color, end.color, percent),
				});
				params[1].setProperty(hmUI.prop.MORE, {
					...STYLE.ICON_STYLE,
					alpha: lerp(begin.alpha, end.alpha, percent),
				});
				params[2].setProperty(hmUI.prop.MORE, {
					...STYLE.TOP_TITLE_STYLE,
					color: getMixColor(begin.color, end.top_color, percent),
				});

				return params;
			},
			end_func: (params) => {
				return params;
			},
		},
		{
			delay: 1,
			style: Fx.Styles.EASE_OUT_QUAD,
			time: 0.5,
			begin: {
				color: 0xffffff,
				alpha: 255,
			},
			end: { color: 0x000000, alpha: 0 },
			init_func: (params) => {
				return params;
			},
			duration_func: (percent, begin, end, params) => {
				params[0].setProperty(hmUI.prop.MORE, {
					...STYLE.TITLE_STYLE,
					color: getMixColor(begin.color, end.color, percent),
				});
				params[1].setProperty(hmUI.prop.MORE, {
					...STYLE.ICON_STYLE,
					alpha: lerp(begin.alpha, end.alpha, percent),
				});

				return params;
			},
			end_func: (params) => {
				STYLE.TITLE_STYLE.text = getText("page_QuickStart_Text_2");
				STYLE.ICON_STYLE.src = "search.png";
				return params;
			},
		},
		{
			delay: 0,
			style: Fx.Styles.EASE_OUT_QUAD,
			time: 0.5,
			begin: {
				color: 0x000000,
				alpha: 0,
			},
			end: { color: 0xffffff, alpha: 255 },
			init_func: (params) => {
				return params;
			},
			duration_func: (percent, begin, end, params) => {
				params[0].setProperty(hmUI.prop.MORE, {
					...STYLE.TITLE_STYLE,
					color: getMixColor(begin.color, end.color, percent),
				});
				params[1].setProperty(hmUI.prop.MORE, {
					...STYLE.ICON_STYLE,
					alpha: lerp(begin.alpha, end.alpha, percent),
				});

				return params;
			},
			end_func: (params) => {
				return params;
			},
		},
		{
			delay: 1,
			style: Fx.Styles.EASE_OUT_QUAD,
			time: 0.5,
			begin: {
				color: 0xffffff,
				alpha: 255,
			},
			end: { color: 0x000000, alpha: 0 },
			init_func: (params) => {
				return params;
			},
			duration_func: (percent, begin, end, params) => {
				params[0].setProperty(hmUI.prop.MORE, {
					...STYLE.TITLE_STYLE,
					color: getMixColor(begin.color, end.color, percent),
				});
				params[1].setProperty(hmUI.prop.MORE, {
					...STYLE.ICON_STYLE,
					alpha: lerp(begin.alpha, end.alpha, percent),
				});
				return params;
			},
			end_func: (params) => {
				STYLE.TITLE_STYLE.text = getText("page_QuickStart_Text_3");
				STYLE.ICON_STYLE.src = "map-pin.png";
				return params;
			},
		},
		{
			delay: 0,
			style: Fx.Styles.EASE_OUT_QUAD,
			time: 0.5,
			begin: {
				color: 0x000000,
				alpha: 0,
			},
			end: { color: 0xffffff, alpha: 255 },
			init_func: (params) => {
				return params;
			},
			duration_func: (percent, begin, end, params) => {
				params[0].setProperty(hmUI.prop.MORE, {
					...STYLE.TITLE_STYLE,
					color: getMixColor(begin.color, end.color, percent),
				});
				params[1].setProperty(hmUI.prop.MORE, {
					...STYLE.ICON_STYLE,
					alpha: lerp(begin.alpha, end.alpha, percent),
				});
				return params;
			},
			end_func: (params) => {
				return params;
			},
		},
		{
			delay: 1,
			style: Fx.Styles.EASE_OUT_QUAD,
			time: 0.5,
			begin: {
				color: 0xffffff,
				top_color: 0x73ffb2,
				alpha: 255,
			},
			end: { color: 0x000000, alpha: 0 },
			init_func: (params) => {
				return params;
			},
			duration_func: (percent, begin, end, params) => {
				params[0].setProperty(hmUI.prop.MORE, {
					...STYLE.TITLE_STYLE,
					color: getMixColor(begin.color, end.color, percent),
				});
				params[1].setProperty(hmUI.prop.MORE, {
					...STYLE.ICON_STYLE,
					alpha: lerp(begin.alpha, end.alpha, percent),
				});
				params[2].setProperty(hmUI.prop.MORE, {
					...STYLE.TOP_TITLE_STYLE,
					alpha: lerp(begin.top_color, end.color, percent),
				});
				return params;
			},
			end_func: (params) => {
				const fd = openSync({
					path: "data.json",
					flag: O_CREAT,
				});
				fpush({
					url: "page/gt/HomePage/index.page",
					params: "",
				});
				return params;
			},
		},
	],
};
