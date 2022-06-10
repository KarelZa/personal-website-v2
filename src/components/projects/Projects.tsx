import React from 'react';
import { Project } from '../../models/project.model';
import FeaturedProject from './FeaturedProject';
import { StyledFeatWrapper } from '../../styles/projects/StyledFeatWrapper';
import { SectionCaption } from '../../styles/sharedStyles/SectionCaption';
import { StyledDivider } from '../../styles/sharedStyles/Divider';
import { useMediaQuery } from '@mui/material';
import theme from '../../styles/appTheme/theme';

interface Props {
	projects: Project[];
}

const Projects = ({ projects }: Props) => {
	return (
		<section id='projects'>
			<SectionCaption>Projects</SectionCaption>
			<StyledDivider />
			<StyledFeatWrapper>
				{projects.map((project) => (
					<FeaturedProject key={project.id} project={project} />
				))}
			</StyledFeatWrapper>
		</section>
	);
};

export default Projects;
