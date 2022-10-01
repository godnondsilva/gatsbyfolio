import React from 'react';
import CONTENT from '../../data/content';

import {
	ContactContainer,
	DataContainer,
	Title,
	Description,
	IconData,
	FontAwesomeIconContainer,
	IconText,
	Button,
} from './Contact.styles';

const Contact = () => {
	return (
		// The id below is for the scroller
		<ContactContainer id='contact'>
			<DataContainer>
				<Title>Get In Touch</Title>
				<Description>
					Do you want to get in touch? Drop a message below and I will get back
					to you soon!
				</Description>
				<Button href={`mailto:${CONTENT.email}`}>Let's Talk</Button>
			</DataContainer>

			<div>
				<IconData href={`mailto:${CONTENT.email}`}>
					<FontAwesomeIconContainer icon={['fas', 'envelope']} size='2x' />
					<IconText>{CONTENT.email}</IconText>
				</IconData>
				<IconData href={CONTENT.github}>
					<FontAwesomeIconContainer icon={['fab', 'github']} size='2x' />
					<IconText>{CONTENT.githubTitle}</IconText>
				</IconData>
				<IconData href={CONTENT.linkedin}>
					<FontAwesomeIconContainer icon={['fab', 'linkedin']} size='2x' />
					<IconText>&nbsp;{CONTENT.linkedinTitle}</IconText>
				</IconData>
				<IconData href={CONTENT.twitter}>
					<FontAwesomeIconContainer icon={['fab', 'twitter']} size='2x' />
					<IconText>{CONTENT.twitterTitle}</IconText>
				</IconData>
			</div>
		</ContactContainer>
	);
};

export default Contact;
