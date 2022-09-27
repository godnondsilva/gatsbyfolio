import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
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

library.add(faEye, faEyeSlash);

const Projects = () => {
	return (
		<MainContainer>
			<ProjectsContainer id='projects' delay={200}>
				<HeadingContainer>Projects I've Worked On </HeadingContainer>
				<CardsContainer>
					{projects.map((project) => {
						const query = graphql`
							query allTheImagesQuery {
								allImageSharp {
									edges {
										node {
											fluid {
												...GatsbyImageSharpFluid
												src
												originalName
											}
										}
									}
								}
							}
						`;
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
									<StaticQuery
										query={query}
										render={(data) =>
											data.allImageSharp.edges
												.filter(
													(edge) =>
														edge.node.fluid.originalName === project.imageUrl,
												)
												.map((myImage, i) => (
													<a key={i} href={project.projectUrl}>
														<ImageContainer fluid={myImage.node.fluid} />
													</a>
												))
										}
									/>
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
