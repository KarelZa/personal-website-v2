import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { StyledProject } from '../../styles/projects/StyledProjects';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Link from '../Link';

type Props = {};

const Projects = (props: Props) => {
	return (
		<StyledProject>
			<Box className='project-image'>
				<Link href={'https://karelza.github.io/printify'}>
					<div className='image-wrapper'>
						<img src='/images/halcyon.avif' />
					</div>
				</Link>
			</Box>
			<Box className='project-content'>
				<Box>
					<Typography variant='overline' color='primary'>
						Featured Project
					</Typography>
					<Typography variant='h5' fontWeight={600}>
						Printify
					</Typography>
					<Box className='project-description'>
						<Typography variant='body1'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste
							rerum similique dolore doloremque exercitationem nostrum ut quo amet
							repellendus.
						</Typography>
					</Box>
					<ul>
						<li>
							<Typography variant='body2'>React</Typography>
						</li>
						<li>
							<Typography variant='body2'>TypeScript</Typography>
						</li>
						<li>
							<Typography variant='body2'>Material-UI</Typography>
						</li>
						<li>
							<Typography variant='body2'>React</Typography>
						</li>
					</ul>

					<Box className='external-links'>
						<Link href={'https://github.com'}>
							<FiExternalLink />
						</Link>
						<Link href={'https://karelza.gitub.io/printify'}>
							<FiGithub />
						</Link>
					</Box>
				</Box>
			</Box>
		</StyledProject>
	);
};

export default Projects;
