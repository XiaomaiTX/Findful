/**
 * zeppos-animation-player.js
 * @description An advanced animation library based on Zeppos-Fx. 一个基于zeppos-fx的进阶动画库
 * @version 1.0.1
 * @date 2024/01/19
 * @author XiaomaiTX
 * @license MIT
 * https://github.com/XiaomaiTX/zeppos-animation-player
 *
 * @class ZeppAnim
 *
 */
import { Fx } from "./fx";
import * as hmUI from "@zos/ui";

export { Fx } from "./fx";
export function lerp(begin, end, percent) {
	return begin + (end - begin) * percent;
}

export class ZeppAnim {
	constructor(params) {
		/**
		 * @example
		 */
		// TRACK_1 = { startTime: 0, frames: [{ frame1 }, { frame2 }] };
		// TRACK_2 = { startTime: 1, frames: [{ frame1 }, { frame2 }] };
		// params.tracks= [TRACK_1, TRACK_2],

		this.tracks = params.tracks;
		this.tracks.forEach((track) => {
			setTimeout(() => {
				this.start(0, track, null);
			}, track.config.startTime * 1000 || 0);
		});
	}
	start(index, track, prevParams) {
		if (index < track.frames.length) {
			const frame = track.frames[index];
			const init_params = frame.init_func(prevParams); // Pass the previous end_func's return as parameter
			const onStopCallback = () => {
				this.start(index + 1, track, frame.end_func(init_params)); // Pass the current init_func's return as parameter
			};
			const durationFunc = (percent) => {
				frame.duration_func(
					percent,
					frame.begin,
					frame.end,
					init_params
				);
			};
			setTimeout(() => {
				new Fx({
					begin: 0,
					end: 1,
					fps: frame.fps || 60,
					time: frame.time || 1,
					style: frame.style || Fx.Styles.LINEAR,
					onStop: onStopCallback || null,
					func: durationFunc || null,
				});
			}, track.frames[index].delay * 1000 || 0);
		} else if (track.config.repeat === true) {
			index = null;
			this.start(0, track, null);
		}
	}
}
