import React from 'react';
import {
	spring,
	Sequence,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

interface SubtitleProps {
	textOne: string;
	textTwo: string;
	textColor: string;
	font: string[];
	[key: string]: any; // 👈️ allows dynamic keys and values
}

export const Subtitle: React.FC<SubtitleProps> = ({
	textOne,
	textTwo,
	textColor,
	font,
}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);
	const videoConfig = useVideoConfig();
	const words = textTwo.split(' ');

	return (
		<>
			<span
				style={{...subtitle, opacity, color: textColor, fontFamily: font[0]}}
			>
				{textOne}
			</span>
			<Sequence from={10} name="Title">
				<div
					style={{
						fontSize: 80,
						textAlign: 'center',
						position: 'absolute',
						top: 280,
						width: '100%',
					}}
				>
					{words.map((t, i) => {
						const delay = i * 5;

						const scale = spring({
							fps: videoConfig.fps + 20,
							frame: frame - delay,
							config: {
								damping: 200,
							},
						});

						return (
							<span
								key={t}
								style={{
									marginLeft: 10,
									marginRight: 10,
									display: 'inline-block',
									transform: `scale(${scale})`,
									fontSize: 35,
									fontWeight: 'bold',
									color: textColor,
									fontFamily: font[0],
								}}
							>
								{t}
							</span>
						);
					})}
				</div>
			</Sequence>
		</>
	);
};

const subtitle: React.CSSProperties = {
	fontSize: 30,
	fontWeight: 100,
	textAlign: 'center',
	position: 'absolute',
	top: 130,
	width: '100%',
	fontFamily: 'Pacifico',
};
