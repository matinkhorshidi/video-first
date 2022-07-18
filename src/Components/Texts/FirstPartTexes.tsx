import {
	interpolate,
	spring,
	Sequence,
	AbsoluteFill,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

import styled from 'styled-components';
import {Subtitle} from './Subtitle';
import {Title} from './Title';

interface FirstPartTexesProps {
	texts: string[];
	textColors: {main: string; main_text: string};
	fonts: {main_font: string[]; secondary_font: string[]};
	[key: string]: any; // 👈️ allows dynamic keys and values
}

export const FirstPartTexes: React.FC<FirstPartTexesProps> = ({
	texts,
	textColors,
	fonts,
}) => {
	const frame = useCurrentFrame();
	const {width, height, fps} = useVideoConfig();

	const progress = spring({
		frame: frame - 10,
		fps,
		config: {
			damping: 200,
		},
	});
	const scale = interpolate(progress, [0, 1], [0, 1]);

	const UPSTART = 60;
	const upAnimation = spring({
		frame: frame - UPSTART,
		fps,
		config: {
			damping: 200,
		},
	});
	const contentTranslation = interpolate(upAnimation, [0, 1], [0, -100]);

	return (
		<>
			<Circle
				style={{
					opacity: progress,
					left: width / 2 - CIRCLE_SIZE / 2,
					top: height / 2 - CIRCLE_SIZE / 2,
					transform: `scale(${scale}) translateY(${contentTranslation}px)`,
				}}
			>
				<AbsoluteFill
					style={{
						backgroundColor: 'rgb(0,0,0,0.7)',
					}}
				/>
				<Sequence from={20} name="Title">
					<Title
						text={texts[1]}
						textColor={textColors.main}
						font={fonts.main_font}
					/>
				</Sequence>
				<Sequence from={20} name="Title">
					<Subtitle
						textOne={texts[0]}
						textTwo={texts[2]}
						textColor={textColors.main_text}
						font={fonts.secondary_font}
					/>
				</Sequence>
			</Circle>
		</>
	);
};

const CIRCLE_SIZE = 500;
const Circle = styled.div`
	width: ${CIRCLE_SIZE}px;
	height: ${CIRCLE_SIZE}px;
	border-radius: ${CIRCLE_SIZE / 2}px;
	position: absolute;
	overflow: hidden;
`;
