import {Img} from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';
interface LogoProps {
	imageSrc: string;
}
export const Logo: React.FC<LogoProps> = ({imageSrc}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const development = spring({
		config: {
			damping: 100,
			mass: 0.5,
		},
		fps: videoConfig.fps,
		frame,
	});

	const rotationDevelopment = spring({
		config: {
			damping: 100,
			mass: 0.5,
		},
		fps: videoConfig.fps,
		frame,
	});

	const scale = spring({
		frame,
		config: {
			mass: 0.5,
		},
		fps: videoConfig.fps,
	});

	const logoRotation = interpolate(
		frame,
		[0, videoConfig.durationInFrames],
		[0, 360]
	);

	return (
		<AbsoluteFill
			style={{
				transform: `scale(${scale}) rotate(${logoRotation}deg)`,
			}}
		>
			<Cover>
				<Img src={imageSrc} style={{height: COVER_SIZE, width: COVER_SIZE}} />
			</Cover>
		</AbsoluteFill>
	);
};
export const COVER_SIZE = 400;
const Cover = styled.div`
	width: ${COVER_SIZE}px;
	height: ${COVER_SIZE}px;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
`;
