import React from 'react';
import PROJECTS from '../../data/projects';

import {
	MainContainer,
	ProjectsContainer,
	Title,
	CardsContainer,
} from './Projects.styles';

import ProjectCard from '../project-card/ProjectCard';

const Projects = () => {
	return (
		<ProjectsContainer id='projects'>
			<MainContainer>
				<Title>Projects I've worked on</Title>
				<CardsContainer>
					{PROJECTS.map((project) => {
						return <ProjectCard project={project} />;
					})}
				</CardsContainer>
			</MainContainer>
		</ProjectsContainer>
	);
};

export default Projects;
