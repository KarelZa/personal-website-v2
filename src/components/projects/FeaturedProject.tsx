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
		<StyledFeatProject>
			<Box className='project-content'>
				<Box>
					<Typography variant='overline' color={'secondary'}>
						Featured Project
					</Typography>
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
							<Link href={link.url} key={index}>
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
						<img src={project.image.path} alt={project.image.alt} />
					</div>
				</Link>
			</Box>
		</StyledFeatProject>
	);
};

export default FeaturedProject;
