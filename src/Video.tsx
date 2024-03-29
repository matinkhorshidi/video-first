import {Composition} from 'remotion';

import {Intro} from './Components/Intro/Intro';
import {Main} from './Main';

// Each <Composition> is an entry in the sidebar!

export const RemotionVideo: React.FC = () => {
	const config = require('./input_data/config.json');

	return (
		<>
			<Composition
				id="Main"
				component={Main}
				durationInFrames={500}
				fps={30}
				width={720}
				height={1080}
				// 👇 You can override these props for each render:
				defaultProps={{
					footages: config.footages,
					footageFirst: config.footage_first,
					footageSecond: config.footage_second,
					footageLast: config.footage_last,
					colors: config.colors,
					texts: config.texts,
					fonts: config.fonts,
				}}
			/>
			<Composition
				id="Intro"
				component={Intro}
				width={720}
				height={1080}
				durationInFrames={120}
				fps={30}
			/>
		</>
	);
};
