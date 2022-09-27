import React from 'react';
import SocialLinks from '../../data/social-links';

import {
	ContactContainer,
	MainContainer,
	DataContainer,
	TextContainer,
	HeadingContainer,
	DescriptionContainer,
	Description,
	IconContainer,
	IconData,
	FontAwesomeIconContainer,
	IconText,
	LightButton,
} from './Contact.styles';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
library.add(faEnvelope, faGithub, faLinkedin, faTwitter);

const Contact = () => {
	return (
		// The id below is for the scroller
		<ContactContainer id='contact'>
			<MainContainer>
				<DataContainer>
					<TextContainer>
						<HeadingContainer>Get In Touch</HeadingContainer>

						<DescriptionContainer>
							<Description>
								Do you want to get in touch? Drop a message below and I will get
								back to you soon!
							</Description>
							<LightButton to='/contact'>Let's Talk</LightButton>
						</DescriptionContainer>
					</TextContainer>
				</DataContainer>

				<IconContainer>
					<IconData href={`mailto:${SocialLinks.Email}`}>
						<FontAwesomeIconContainer icon={['fas', 'envelope']} size='2x' />
						<IconText>{SocialLinks.Email}</IconText>
					</IconData>
					<IconData href={SocialLinks.Github}>
						<FontAwesomeIconContainer icon={['fab', 'github']} size='2x' />
						<IconText>/godnondsilva</IconText>
					</IconData>
					<IconData href={SocialLinks.LinkedIn}>
						<FontAwesomeIconContainer icon={['fab', 'linkedin']} size='2x' />
						<IconText>&nbsp;/in/godnon-dsilva</IconText>
					</IconData>
					<IconData href={SocialLinks.Twitter}>
						<FontAwesomeIconContainer icon={['fab', 'twitter']} size='2x' />
						<IconText>/GodnonDsilva</IconText>
					</IconData>
				</IconContainer>
			</MainContainer>
		</ContactContainer>
	);
};

export default Contact;
