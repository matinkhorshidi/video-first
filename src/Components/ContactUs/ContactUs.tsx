import {useState} from 'react';
import {Video} from 'remotion';
import {AbsoluteFill, useVideoConfig} from 'remotion';
import {SlideUpFromDown} from '../Effects/SlideUpFromDown';

interface ContactUsProps {
	texts: string[];
	textColors: {
		main: string;
		third: string;
		main_text: string;
		secondary_text: string;
	};
	fonts: {main_font: string[]; secondary_font: string[]; simple_font: string[]};
	footageLast: number;
	footages: string[];
	[key: string]: any; // 👈️ allows dynamic keys and values
}

export const ContactUs: React.FC<ContactUsProps> = ({
	texts,
	textColors,
	fonts,
	footageLast,
	footages,
}) => {
	const {height, width} = useVideoConfig();

	return (
		<>
			{/* 👇  main Container */}
			<AbsoluteFill style={{backgroundColor: textColors.main_text}}>
				{/* 👇  Upper Box Video */}
				<Video
					src={require(`../../input_data/Videos/${footages[footageLast]}`)}
					volume={0}
					style={{
						height: 540,
						width: 720,
						objectFit: 'cover',
						backgroundSize: 'cover',
						filter: 'brightness(100%) contrast(120%) opacity(0.5)',
					}}
				/>
				{/* 👇  Upper Box background And Boarders */}
				<AbsoluteFill
					style={{
						border: `solid 5px ${textColors.main}`,
						width: '90%',
						height: '50%',
						position: 'absolute',
						top: 20,
						marginLeft: 'auto',
						marginRight: 'auto',
					}}
				/>
				{/* 👇  Lower Box background And Boarders */}
				<AbsoluteFill
					style={{
						backgroundColor: textColors.main,
						border: `solid 8px ${textColors.main}`,
						width: '100%',
						height: 540,
						position: 'absolute',
						top: 540,
					}}
				>
					{/* 👇  Lower Box inner Boarders  */}
					<AbsoluteFill
						style={{
							backgroundColor: textColors.main,
							border: `solid 5px ${textColors.main_text}`,
							borderTop: '0',
							width: '92%',
							height: 510,
							top: -5,
							position: 'absolute',
							marginLeft: 'auto',
							marginRight: 'auto',
						}}
					>
						{/* 👇  Lower Box  Content */}
						<SlideUpFromDown delay={25}>
							<span
								style={{
									fontSize: 70,
									textAlign: 'center',
									position: 'absolute',
									top: height / 2 + 50,
									left: width / 2 - 320,
									color: textColors.secondary_text,
									fontFamily: fonts.secondary_font[0],
									fontWeight: 'bold',
								}}
							>
								<div
									style={{
										fontSize: 40,
										fontWeight: 100,
										textAlign: 'center',
										position: 'inherit',
										width: 540,
										padding: 10,
										fontFamily: fonts.main_font[0],
									}}
								>
									{texts[0]}
								</div>
							</span>
							<span
								style={{
									fontSize: 120,
									textAlign: 'center',
									position: 'absolute',
									top: height / 2 + 150,
									left: width / 2 - 240,
									color: textColors.main_text,
									fontFamily: fonts.main_font[0],
								}}
							>
								{texts[1]}
							</span>
							<span
								style={{
									fontSize: 70,
									textAlign: 'center',
									position: 'absolute',
									top: height / 1.5 + 50,
									right: width / 2 - 150,
									color: textColors.secondary_text,
									fontFamily: fonts.secondary_font[0],
									fontWeight: 'bold',
								}}
							>
								{texts[2]}
							</span>
							<span
								style={{
									fontSize: 40,
									textAlign: 'center',
									position: 'absolute',
									bottom: 50,
									right: width / 2 - 150,
									color: textColors.main_text,
									fontFamily: fonts.secondary_font[0],
									fontWeight: 'bold',
									backgroundColor: textColors.third,
									padding: 30,
								}}
							>
								<div
									style={{
										fontSize: 25,
										fontWeight: 100,
										textAlign: 'center',
										position: 'inherit',
										width: 540,
										padding: 10,
										fontFamily: fonts.main_font[0],
									}}
								/>
								{texts[3]}
							</span>
							<span
								style={{
									position: 'absolute',
									bottom: 10,
									left: width / 2 - 120,
									width: 0,
									height: 0,
									borderLeft: '80px solid transparent',
									borderRight: '80px solid transparent',
									borderTop: `50px solid ${textColors.third}`,
								}}
							/>
						</SlideUpFromDown>
					</AbsoluteFill>
				</AbsoluteFill>
			</AbsoluteFill>
		</>
	);
};
