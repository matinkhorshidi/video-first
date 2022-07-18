import {FC} from 'react';
import {ColorBar} from './ColorBar';
import {blue, pink, purple, red, yellow} from './Color';
import {Sequence} from 'remotion';

export const ColorBars: FC = () => {
	const colors = [blue, pink, purple, red, yellow];
	return (
		<>
			{colors.map((color, index) => (
				<Sequence key={color} from={index * 4 + 10}>
					<ColorBar key={color} color={color} index={index} />
				</Sequence>
			))}
		</>
	);
};
