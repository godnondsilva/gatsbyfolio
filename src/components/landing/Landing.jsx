import React from 'react';
import { Link as ScrollTo } from 'react-scroll';

// Data
import landingBackground from '../../images/landing-background.svg';
import CONTENT from '../../data/content';

// Styles
import {
	LandingContainer,
	FlexContainer,
	Title,
	Subtitle,
	ButtonContainer,
	DarkButton,
	LightButton,
	IconContainer,
	IconData,
	FontAwesomeIconContainer,
	Blue,
	ImageContainer,
} from './Landing.styles';

const Landing = () => {
	return (
		<LandingContainer id='home'>
			<FlexContainer>
				<Title>
					Hey, I'm <Blue>{CONTENT.shortName}.</Blue>
				</Title>
				<Subtitle>{CONTENT.description}</Subtitle>
				<ButtonContainer>
					<DarkButton>
						<ScrollTo to='about' duration={1000} smooth={true}>
							Learn More
						</ScrollTo>
					</DarkButton>
					<LightButton href={CONTENT.resume}>View Resume</LightButton>
				</ButtonContainer>
				<IconContainer>
					<IconData href={`mailto:${CONTENT.email}`}>
						<FontAwesomeIconContainer icon={['fas', 'envelope']} size='2x' />
					</IconData>
					<IconData href={CONTENT.github}>
						<FontAwesomeIconContainer icon={['fab', 'github']} size='2x' />
					</IconData>
					<IconData href={CONTENT.linkedin}>
						<FontAwesomeIconContainer icon={['fab', 'linkedin']} size='2x' />
					</IconData>
					<IconData href={CONTENT.twitter}>
						<FontAwesomeIconContainer icon={['fab', 'twitter']} size='2x' />
					</IconData>
				</IconContainer>
			</FlexContainer>
			<ImageContainer src={landingBackground} alt='Landing Background' />
		</LandingContainer>
	);
};

export default Landing;
