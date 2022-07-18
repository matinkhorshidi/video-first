import React from 'react';

import {
	spring,
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const ColorBar: React.FC<{
	color: string;
	index: number;
}> = ({color, index}) => {
	const {width} = useVideoConfig();
	const barHeight = 20;
	const barWidth = width / 5;
	const barLeft = barWidth * index;

	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	// Fade out the animation at the end
	const opacity = interpolate(frame, [0, 3], [0, 1], {
		extrapolateRight: 'clamp',
	});
	return (
		<div
			style={{
				opacity,
				backgroundColor: color,
				width: barWidth,
				height: barHeight,
				left: barLeft,
				position: 'fixed',
			}}
		/>
	);
};
