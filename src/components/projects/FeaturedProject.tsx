import { Box, Typography } from '@mui/material';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import React from 'react';
import Link from '../Link';
import { Project } from '../../models/project.model';
import { StyledFeatProject } from '../../styles/projects/StyledFeatProject';

type Props = {
	project: Project;
};

const FeaturedProject = ({ project }: Props) => {
	return (
		<StyledFeatProject key={project.id}>
			<Box className='project-content'>
				<Box>
					<Typography variant='overline' color='primary'>
						Featured Project
					</Typography>
					<Typography variant='h4'>
						<Link href={project.link} color='#e6f1ff'>
							{project.title}
						</Link>
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
						<Link href={'https://github.com'}>
							<FiGithub />
						</Link>
						<Link href={project.link}>
							<FiExternalLink />
						</Link>
					</Box>
				</Box>
			</Box>
			<Box className='project-image'>
				<Link href={project.link}>
					<div className='image-wrapper'>
						<img src={project.image.path} alt={project.image.alt} />
					</div>
				</Link>
			</Box>
		</StyledFeatProject>
	);
};

export default FeaturedProject;
