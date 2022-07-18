import {Video} from 'remotion';
import {
	interpolate,
	spring,
	AbsoluteFill,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

interface SlideUpFromDownProps {
	children?: JSX.Element | JSX.Element[];
	delay: number;
	[key: string]: any; // 👈️ allows dynamic keys and values
}

export const SlideUpFromDown: React.FC<SlideUpFromDownProps> = (props) => {
	const frame = useCurrentFrame();
	// Const opacity = interpolate(frame, [0, 30], [0, 1]);
	const {height, fps} = useVideoConfig();

	const deviderAnimation = spring({
		frame: frame - props.delay,
		fps,
		config: {
			damping: 200,
		},
	});

	const contentTranslationDevider = interpolate(
		deviderAnimation,
		[0, 1],
		[0, -1080]
	);
	return (
		<>
			<span
				style={{
					position: 'absolute',
					background: props.color,
					width: 720,
					height,
					bottom: -1080,
					// Position: 'absolute',
					// top: 0,
					// height: 1080,
					// width: 720,
					transform: `translateY(${contentTranslationDevider}px)`,
				}}
			>
				{props.children}
			</span>
		</>
	);
};
