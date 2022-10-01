import React from 'react';
import CONTENT from '../../data/content';

import {
	AboutContainer,
	Title,
	Text,
	Blue,
	TechnologyContainer,
	TechnologyList,
} from './About.styles';

const About = () => {
	return (
		<AboutContainer id='about'>
			<Title>About Me</Title>
			<Text>
				Hello! I'm <Blue>{CONTENT.name}</Blue>, a student/employee being
				studying/working <Blue>Education/Work</Blue> in City, Country.
			</Text>
			<Text>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque sint
				sit soluta. Vero voluptate molestiae maxime architecto, perferendis
				magnam enim totam quidem corrupti ut nesciunt sunt error tempore eum
				iure.
			</Text>
			<Text>Here are a few technologies I've been working with recently:</Text>
			<TechnologyContainer>
				<TechnologyList>
					<li>
						<Blue>Technology</Blue>
					</li>
					<li>Technology</li>
					<li>Technology</li>
				</TechnologyList>
				<TechnologyList>
					<li>Technology</li>
					<li>Technology</li>
					<li>Technology</li>
				</TechnologyList>
				<TechnologyList>
					<li>Technology</li>
					<li>Technology</li>
					<li>Technology</li>
				</TechnologyList>
			</TechnologyContainer>
		</AboutContainer>
	);
};

export default About;
