import React from 'react';
import { Link as ScrollTo } from 'react-scroll';
import landingBg from '../../images/bg-landing.svg';

import {
	LandingContainer,
	DataContainer,
	Title,
	Subtitle,
	ButtonContainer,
	DarkButton,
	LightButton,
	IconContainer,
	IconData,
	FontAwesomeIconContainer,
	LinkContainer,
	Blue,
	ImageContainer,
} from './Landing.styles';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faGithub, faLinkedin, faTwitter, faEnvelope);

const Landing = () => {
	return (
		<LandingContainer>
			<DataContainer id='home'>
				<Title>
					Hey, I'm <Blue>Godnon</Blue>
				</Title>
				<Subtitle>
					I am a fullstack developer from India. I enjoy building everything
					from small business apps to interactive web apps. If you're looking to
					hire me, you can get in touch with me{' '}
					<LinkContainer to='/contact'>here</LinkContainer>
				</Subtitle>
				<ButtonContainer>
					<DarkButton>
						<ScrollTo to='about' duration={1000} smooth={true} offset={-60}>
							Learn More
						</ScrollTo>
					</DarkButton>
					<LightButton href='/'>View Resume</LightButton>
				</ButtonContainer>
				<IconContainer>
					<IconData href='mailto:godnondsilva@gmail.com'>
						<FontAwesomeIconContainer icon={['fas', 'envelope']} size='2x' />
					</IconData>
					<IconData href='https://github.com/godnondsilva'>
						<FontAwesomeIconContainer icon={['fab', 'github']} size='2x' />
					</IconData>
					<IconData href='https://linkedin.com/in/godnon-dsilva'>
						<FontAwesomeIconContainer icon={['fab', 'linkedin']} size='2x' />
					</IconData>
					<IconData href='https://twitter.com/GodnonDsilva'>
						<FontAwesomeIconContainer icon={['fab', 'twitter']} size='2x' />
					</IconData>
				</IconContainer>
			</DataContainer>
			<ImageContainer src={landingBg} />
		</LandingContainer>
	);
};

export default Landing;
