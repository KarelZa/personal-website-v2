import React from 'react';
// Components
import FeaturedProject from './FeaturedProject';
// Model (Interface/Type)
import { ProjectProps } from '../../models/project.model';
// Styling
import { StyledFeaturedWrapper } from '../../styles/featuredProjects/StyledFeaturedWrapper';
import { SectionCaption } from '../../styles/sharedStyles/SectionCaption';
import { StyledSection } from '../../styles/sharedStyles/Section';
import { Typography } from '@mui/material';

interface FeaturedProjectsProps {
	projects: ProjectProps[];
}

const FeaturedProjects = ({ projects }: FeaturedProjectsProps) => {
	return (
		<StyledSection id='projects'>
			<SectionCaption>Projects</SectionCaption>

			<StyledFeaturedWrapper>
				{projects.map((project) => (
					<FeaturedProject key={project.id} project={project} />
				))}
			</StyledFeaturedWrapper>
		</StyledSection>
	);
};

export default FeaturedProjects;
