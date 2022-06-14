import React from 'react';
// Components
import FeaturedProject from './FeaturedProject';
// Model (Interface/Type)
import { ProjectProps } from '../../models/project.model';
// Styling
import { StyledFeaturedWrapper } from '../../styles/featuredProjects/StyledFeaturedWrapper';
import { SectionCaption } from '../../styles/sharedStyles/SectionCaption';
import { StyledSection } from '../../styles/sharedStyles/Section';

interface FeaturedProjectsProps {
	projects: ProjectProps[];
}

const FeaturedProjects = ({ projects }: FeaturedProjectsProps) => {
	const sectionVariant = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 2,
				when: 'beforeChildren',
				staggerChildren: 5,
			},
		},
	};

	const childVariant = {
		hidden: {
			opacity: 0,
			x: -100,
		},
		animate: {
			opacity: 1,
			x: 0,
		},
	};

	return (
		<StyledSection id='projects'>
			<SectionCaption>Projects</SectionCaption>

			<StyledFeaturedWrapper
				variants={sectionVariant}
				whileInView='visible'
				initial='hidden'
				viewport={{ once: true }}
			>
				{projects.map((project) => (
					<FeaturedProject key={project.id} project={project} varianta={childVariant} />
				))}
			</StyledFeaturedWrapper>
		</StyledSection>
	);
};

export default FeaturedProjects;
