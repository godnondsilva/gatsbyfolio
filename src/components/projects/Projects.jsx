import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Tilt from 'react-tilt';
import projects from '../../data/projects';

import {
	MainContainer,
	ProjectsContainer,
	HeadingContainer,
	CardsContainer,
	CardContainer,
	DescriptionContainer,
	ImageContainer,
	Description,
	Featured,
	DescriptionTitle,
	DescriptionButtons,
	Skill,
	Source,
	Preview,
} from './Projects.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { GatsbyImage } from 'gatsby-plugin-image';

library.add(faEye, faEyeSlash);

const Projects = () => {
	const query = useStaticQuery(
		graphql`
			query ImageQuery {
				allImageSharp {
					edges {
						node {
							original {
								src
							}
							gatsbyImageData
						}
					}
				}
			}
		`,
	);

	return (
		<MainContainer>
			<ProjectsContainer id='projects' delay={200}>
				<HeadingContainer>Projects I've Worked On </HeadingContainer>
				<CardsContainer>
					{projects.map((project) => {
						return (
							<CardContainer key={project.id}>
								<DescriptionContainer>
									{project.isFeatured ? (
										<Featured>Featured Project</Featured>
									) : (
										<span></span>
									)}
									<DescriptionTitle>{project.title}</DescriptionTitle>
									<Description>{project.description}</Description>
									{project.skills.map((item, i) => (
										<Skill key={i}>{item}</Skill>
									))}
									<DescriptionButtons>
										<Source
											href={project.source}
											readSource={project.readSource}
										>
											{project.readSource ? (
												<FontAwesomeIcon icon={['fas', 'eye']} size='1x' />
											) : (
												<FontAwesomeIcon
													icon={['fas', 'eye-slash']}
													size='1x'
												/>
											)}
											&nbsp; Source
										</Source>
										<Preview href={project.projectUrl}>Preview</Preview>
									</DescriptionButtons>
								</DescriptionContainer>
								<Tilt
									className='Tilt'
									options={{
										reverse: false,
										max: 8,
										perspective: 1000,
										scale: 1,
										speed: 300,
										transition: true,
										axis: null,
										reset: true,
										easing: 'cubic-bezier(.03,.98,.52,.99)',
									}}
								>
									{query.allImageSharp.edges.map((item, i) => {
										if (item.node.original.src.includes(project.image)) {
											return (
												<ImageContainer key={i}>
													<GatsbyImage
														image={item.node.gatsbyImageData}
														alt={project.title}
													/>
												</ImageContainer>
											);
										} else {
											return null;
										}
									})}
								</Tilt>
							</CardContainer>
						);
					})}
				</CardsContainer>
			</ProjectsContainer>
		</MainContainer>
	);
};

export default Projects;
