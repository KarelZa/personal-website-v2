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
import theme from '../../styles/appTheme/theme';
import { useMediaQuery } from '@mui/material';

interface FeaturedProjectsProps {
	projects: ProjectProps[];
}

const FeaturedProjects = ({ projects }: FeaturedProjectsProps) => {
	const [controls, ref] = useMotionObserver('visible');
	const sectionVariant = {
		hidden: {
			opacity: 0,
			x: 0,
		},
		visible: {
			opacity: 1,
			x: 0,
			// backgroundColor: '#FF0000',
			// transition: {
			// 	duration: 0.7,
			// },
			// transition: {
			// 	when: 'beforeChildren',
			// 	staggerChildren: 5,
			// 	delay: 5,
			// },
		},
	};

	const itemVariant = {
		hidden: (i: number) => ({
			opacity: 0,
			x: i % 2 === 0 ? (i === 0 ? 15 : i * 15) : i * -15,
		}),
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				delay: 0.3,
				duration: 0.8,
			},
		},
	};

	return (
		<StyledSection id='projects'>
			<SectionCaption>Projects</SectionCaption>
			<StyledFeaturedWrapper variants={sectionVariant} animate='visible' initial='hidden'>
				{projects.map((project, index) => (
					<FeaturedProject
						key={project.id}
						project={project}
						varianta={itemVariant}
						index={index}
					/>
				))}
			</StyledFeaturedWrapper>
		</StyledSection>
	);
};

export default FeaturedProjects;
