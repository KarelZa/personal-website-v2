import React from 'react';
import { Project } from '../../models/project.model';
import FeaturedProject from './FeaturedProject';
import { StyledFeatWrapper } from '../../styles/projects/StyledFeatWrapper';

interface Props {
	projects: Project[];
}

const Projects = ({ projects }: Props) => {
	return (
		<>
			<StyledFeatWrapper>
				{projects.map((project) => (
					<FeaturedProject project={project} />
				))}
			</StyledFeatWrapper>
		</>
	);
};

export default Projects;
