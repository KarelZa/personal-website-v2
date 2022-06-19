import React from 'react';
// Components
import FeaturedProject from './FeaturedProject';
// Model (Interface/Type)
import { ProjectProps } from '../../models/project.model';
// Styling
import { StyledFeaturedWrapper } from '../../styles/featuredProjects/StyledFeaturedWrapper';
import { SectionCaption } from '../../styles/sharedStyles/SectionCaption';
import { StyledSection } from '../../styles/sharedStyles/Section';
import { useMotionObserver } from '../../utils/hooks/MotionObserver';
import { sectionVariant } from '../../styles/animations/animations';

interface FeaturedProjectsProps {
	projects?: ProjectProps[];
}

const FeaturedProjects = ({ projects }: FeaturedProjectsProps) => {
	const [controls, ref] = useMotionObserver('visible', 0.1);

	return (
		<StyledSection
			id='projects'
			ref={ref}
			variants={sectionVariant}
			initial='hidden'
			animate={controls}
		>
			<SectionCaption>Projects</SectionCaption>
			<StyledFeaturedWrapper>
				{projects?.map((project, index) => (
					<FeaturedProject key={project.id} project={project} index={index} />
				))}
			</StyledFeaturedWrapper>
		</StyledSection>
	);
};

export default FeaturedProjects;
