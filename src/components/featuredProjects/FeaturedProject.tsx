import React from 'react';
import Link from '../shared/Link';
import { Box, Typography } from '@mui/material';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
// Model (Interface/Type)
import { ProjectProps } from '../../models/project.model';
// Styling
import { StyledFeatProject } from '../../styles/featuredProjects/StyledFeatProject';
import { useMotionObserver } from '../../utils/hooks/MotionObserver';
import { projectVariant } from '../../styles/animations/animations';
import { motion } from 'framer-motion';

type FeaturedProjectProps = {
	project: ProjectProps;
	index: number;
};

const FeaturedProject = ({ project, index }: FeaturedProjectProps) => {
	const [controls, ref] = useMotionObserver('visible', 0.4);

	return (
		<StyledFeatProject
			ref={ref}
			variants={projectVariant}
			custom={index}
			initial='hidden'
			animate={controls}
		>
			<Box className='project-content'>
				<Box>
					<Typography variant='overline'>Featured Project</Typography>
					<Typography variant='h4'>
						<Link href={project.links[0].url}>{project.title}</Link>
					</Typography>
					<Box className='project-description'>
						<Typography variant='body1'>{project.description}</Typography>
					</Box>
					<ul className='tech-list'>
						{project.tech.map((tech, index) => (
							<li key={index}>
								<Typography variant='body1'>{tech}</Typography>
							</li>
						))}
					</ul>
					<Box className='external-links'>
						{project.links.map((link, index) => (
							<Link
								href={link.url}
								key={index}
								aria-label={
									link.name === 'github' ? 'github link' : 'external link'
								}
							>
								{link.name === 'github' ? <FiGithub /> : <FiExternalLink />}
							</Link>
						))}
					</Box>
				</Box>
			</Box>
			<Box className='project-image'>
				<Link
					href={
						project.links[0].name !== 'github'
							? project.links[0].url
							: project.links[1].url
					}
				>
					<div className='image-wrapper'>
						<motion.img
							src={project.image.path}
							alt={project.image.alt}
							whileHover={{
								scale: 1.015,
								transition: { type: 'tween', duration: 1.5, ease: 'easeOut' },
							}}
						/>
					</div>
				</Link>
			</Box>
		</StyledFeatProject>
	);
};

export default FeaturedProject;
