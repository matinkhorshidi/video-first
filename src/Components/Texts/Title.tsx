import {continueRender, delayRender, staticFile} from 'remotion';

import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

interface TitleProps {
	text: string;
	textColor: string;
	font: string[];
	[key: string]: any; // 👈️ allows dynamic keys and values
}

export const Title: React.FC<TitleProps> = ({text, textColor, font}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const words = text.split(' ');

	return (
		<h1 style={title}>
			{words.map((t, i) => {
				const scale = spring({
					fps: videoConfig.fps,
					frame,
					config: {
						damping: 200,
					},
				});

				return (
					<span
						key={t}
						style={{
							...word,
							transform: `scale(${scale})`,
							color: textColor,
							fontFamily: `${font[0]},${font[1]}`,
							fontWeight: 500,
						}}
					>
						{t}
					</span>
				);
			})}
		</h1>
	);
};

const title: React.CSSProperties = {
	// FontFamily: FONT_FAMILY,
	fontSize: 80,
	textAlign: 'center',
	position: 'absolute',
	top: 120,
	width: '100%',
};

const word: React.CSSProperties = {
	marginLeft: 10,
	marginRight: 10,
	display: 'inline-block',
};
