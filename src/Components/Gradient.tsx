import {AbsoluteFill, useCurrentFrame} from 'remotion';

export const Gradient: React.FC<{
	height: number;
}> = ({height}) => {
	const frame = useCurrentFrame();
	const duration = 8 * 30;
	const offset = height * 1.5 * ((frame % duration) / duration);

	return (
		<AbsoluteFill>
			<AbsoluteFill
				style={{
					height: height * 1.5,
					background:
						'linear-gradient(to bottom,  #FA961B,  #FECC51, #FFE469, #FFF57B, #b9ee5a, #72de9a,#00c3ff)',
					transform: `translateY(-${offset}px)`,
				}}
			/>
			<AbsoluteFill
				style={{
					height: height * 1.5,
					top: height * 1.5 - 1,
					background:
						'linear-gradient(to bottom, #00c3ff , #FECC51, #FFE469, #FFF57B, #b9ee5a, #72de9a,#00c3ff)',
					transform: `translateY(-${offset}px)`,
				}}
			/>
		</AbsoluteFill>
	);
};
