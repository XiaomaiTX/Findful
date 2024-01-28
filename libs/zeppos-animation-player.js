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
import { Time } from "@zos/sensor";

export { Fx } from "./fx";
export function lerp(begin, end, percent) {
	return begin + (end - begin) * percent;
}
export function getMixColor(color1, color2, percentage) {
	let r0 = color1 & 0xff0000,
		g0 = color1 & 0x00ff00,
		b0 = color1 & 0x0000ff;
	let r1 = color2 & 0xff0000,
		g1 = color2 & 0x00ff00,
		b1 = color2 & 0x0000ff;
	return (
		(Math.floor((r1 - r0) * percentage + r0) & 0xff0000) +
		(Math.floor((g1 - g0) * percentage + g0) & 0x00ff00) +
		(Math.floor((b1 - b0) * percentage + b0) & 0x0000ff)
	);
}
export class ZeppAnim {
	constructor(params) {
		/**
		 * @example
		 */
		// TRACK_1 = { startTime: 0, frames: [{ frame1 }, { frame2 }] };
		// TRACK_2 = { startTime: 1, frames: [{ frame1 }, { frame2 }] };
		// params.tracks= [TRACK_1, TRACK_2],
		this.time = new Time();

		this.tracks = params.tracks;
		this.tracks.forEach((track) => {
			setTimeout(() => {
				this.start(0, track, null);
			}, track.config.startTime * 1000 || 0);
		});
	}
	start(index, track, prevParams, startTime) {
		if (index < track.frames.length) {
			const frame = track.frames[index];
			const init_params = frame.init_func(prevParams); // Pass the previous end_func's return as parameter
			const onStopCallback = () => {
				const nextStartTime = this.time.getTime();

				this.start(
					index + 1,
					track,
					frame.end_func(init_params),
					nextStartTime
				); // Pass the current init_func's return as parameter
			};
			const durationFunc = (percent) => {
				frame.duration_func(
					percent,
					frame.begin,
					frame.end,
					init_params
				);
			};
			// 计算已经过去的时间
			const currentTime = this.time.getTime() - startTime;

			// 计算修正后的延迟时间，考虑时间误差
			const correctedDelay = Math.max(
				0,
				frame.delay * 1000 - currentTime
			);

			setTimeout(() => {
				new Fx({
					begin: 0,
					end: 1,
					fps: frame.fps || 30,
					time: frame.time || 1,
					style: frame.style || Fx.Styles.LINEAR,
					onStop: onStopCallback || null,
					func: durationFunc || null,
				});
			}, correctedDelay || 0);
		} else if (track.config.repeat === true) {
			index = null;
			const nextStartTime = this.time.getTime();

			this.start(0, track, null, nextStartTime);
		}
	}
}
