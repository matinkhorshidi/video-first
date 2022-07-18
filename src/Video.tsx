import {Composition} from 'remotion';
import {Gradient} from './Components/Gradient';
import {Intro} from './Components/Intro/Intro';
import {Scene3} from './Components/Scene3';

import {HelloWorld} from './HelloWorld';
import {Logo} from './HelloWorld/Logo';
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
				// DefaultProps={{
				// 	height: 1080,
				// }}
			/>

			<Composition
				id="Gradient"
				component={Gradient}
				width={720}
				height={1080}
				durationInFrames={120}
				fps={30}
				defaultProps={{
					height: 1080,
				}}
			/>
			<Composition
				id="Scene3"
				component={Scene3}
				width={720}
				height={1280}
				durationInFrames={150}
				fps={30}
				defaultProps={{
					topSongName: 'All I Talk Is Money',
					topSongArtistName: 'Albusta',
					topSongCover:
						'https://i.scdn.co/image/ab67616d00001e02d0108ee3b4a64bddfa7e6cc2',
				}}
			/>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.tsx <id> out/video.mp4
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={150}
				fps={30}
				width={720}
				height={1080}
				// You can override these props for each render:
				// https://www.remotion.dev/docs/parametrized-rendering
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			{/* Mount any React component to make it show up in the sidebar and work on it individually! */}
			<Composition
				id="OnlyLogo"
				component={Logo}
				durationInFrames={150}
				fps={30}
				width={720}
				height={1080}
			/>
		</>
	);
};
