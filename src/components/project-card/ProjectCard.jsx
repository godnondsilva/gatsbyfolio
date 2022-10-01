import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import Tilt from 'react-tilt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	CardContainer,
	Card,
	ImageContainer,
	Description,
	Featured,
	ProjectTitle,
	ButtonContainer,
	SkillContainer,
	Skill,
	Source,
	Preview,
} from './ProjectCard.styles';

const ProjectCard = ({ project }) => {
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
		<CardContainer key={project.id}>
			<Card>
				{project.isFeatured ? (
					<Featured>Featured Project</Featured>
				) : (
					<span></span>
				)}
				<ProjectTitle>{project.title}</ProjectTitle>
				<Description>{project.description}</Description>
				<SkillContainer>
					{project.skills.map((item, i) => (
						<Skill key={i}>{item}</Skill>
					))}
				</SkillContainer>
				<ButtonContainer>
					<Source
						href={project.source}
						readSource={project.source.length !== 0}
					>
						{project.source.length !== 0 ? (
							<FontAwesomeIcon icon={['fas', 'eye']} size='1x' />
						) : (
							<FontAwesomeIcon icon={['fas', 'eye-slash']} size='1x' />
						)}
						&nbsp; Source
					</Source>
					{project.projectUrl.length !== 0 ? (
						<Preview href={project.projectUrl}>Preview</Preview>
					) : (
						<></>
					)}
				</ButtonContainer>
			</Card>
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
};

export default ProjectCard;
