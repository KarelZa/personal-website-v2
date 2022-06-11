import React from 'react';
// Components
import FeaturedProject from './FeaturedProject';
// Model (Interface/Type)
import { ProjectProps } from '../../models/project.model';
// Styling
import { StyledFeatWrapper } from '../../styles/projects/StyledFeatWrapper';
import { SectionCaption } from '../../styles/sharedStyles/SectionCaption';
import { StyledDivider } from '../../styles/sharedStyles/Divider';
import { StyledSection } from '../../styles/sharedStyles/Section';

interface FeaturedProjectsProps {
	projects: ProjectProps[];
}

const FeaturedProjects = ({ projects }: FeaturedProjectsProps) => {
	return (
		<StyledSection id='projects'>
			<SectionCaption>Projects</SectionCaption>
			<StyledDivider />
			<StyledFeatWrapper>
				{projects.map((project) => (
					<FeaturedProject key={project.id} project={project} />
				))}
			</StyledFeatWrapper>
		</StyledSection>
	);
};

export default FeaturedProjects;
