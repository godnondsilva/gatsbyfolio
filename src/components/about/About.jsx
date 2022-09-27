import React from 'react';

import {
	MainContainer,
	AboutContainer,
	HeadingContainer,
	Text,
	Blue,
	SkillContainer,
	ListItem,
} from './About.styles';

const About = () => {
	return (
		<MainContainer>
			<AboutContainer id='about'>
				<HeadingContainer>About Me</HeadingContainer>
				<Text>
					Hello! I'm <Blue>Godnon Dsilva</Blue>, a student studying{' '}
					<Blue>Computer Science & Engineering</Blue> in Mangalore, India.
				</Text>
				<Text>
					I enjoy creating things that live on the internet, whether that be{' '}
					<Blue>websites, applications, or anything in between</Blue>. My goal
					is to always build products that provide{' '}
					<Blue>pixel-perfect, performant experiences.</Blue>
				</Text>
				<Text>
					Here are a few technologies I've been working with recently:
				</Text>
				<SkillContainer>
					<ul>
						<ListItem>
							<Blue>JavaScript</Blue>
						</ListItem>
						<ListItem>React</ListItem>
						<ListItem>Node.js</ListItem>
					</ul>
					<ul>
						<ListItem>Gatsby</ListItem>
						<ListItem>Deno</ListItem>
						<ListItem>Python</ListItem>
					</ul>
					<ul>
						<ListItem>PostgreSQL</ListItem>
						<ListItem>MySQL</ListItem>
						<ListItem>MongoDB</ListItem>
					</ul>
				</SkillContainer>
			</AboutContainer>
		</MainContainer>
	);
};

export default About;
