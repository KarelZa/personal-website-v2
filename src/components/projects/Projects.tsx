import { Box, Grid, Icon, Typography } from '@mui/material';
import React from 'react';
import { StyledProject, StyledProjectsWrapper } from '../../styles/projects/StyledProjects';
import Link from '../Link';
import { IconType } from 'react-icons/';
// import { FiExternalLink, FiGithub } from 'react-icons/fi';

interface Props {
	data: {
		title: string;
		desc: string;
		tech: string[];
		links: {
			icon: JSX.Element;
			url: string;
		}[];
	}[];
}

const Projects = (props: Props) => {
	return (
		<StyledProjectsWrapper>
			{props.data.map((project) => (
				<StyledProject>
					<Box className='project-content'>
						<Box>
							<Typography variant='overline' color='primary'>
								Featured Project
							</Typography>
							<Typography variant='h4'>
								<Link href={'https://github.com'} color='#e6f1ff'>
									{project.title}
								</Link>
							</Typography>
							<Box className='project-description'>
								<Typography variant='body1'>{project.desc}</Typography>
							</Box>
							<ul className='tech-list'>
								{project.tech.map((tech) => (
									<li>
										<Typography variant='body1'>{tech}</Typography>
									</li>
								))}
							</ul>
							<Box className='external-links'>
								{project.links.map((link) => (
									<Link href={link.url}>{link.icon}</Link>
								))}
							</Box>
						</Box>
					</Box>
					<Box className='project-image'>
						<Link href={'https://karelza.github.io/printify'}>
							<div className='image-wrapper'>
								<img src='/images/halcyon.avif' />
							</div>
						</Link>
					</Box>
				</StyledProject>
			))}
		</StyledProjectsWrapper>
	);
};

export default Projects;

{
	/* <StyledProject>
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
			<Box className='project-image'>
				<Link href={'https://karelza.github.io/printify'}>
					<div className='image-wrapper'>
						<img src='/images/halcyon.avif' />
					</div>
				</Link>
			</Box>
		</StyledProject> */
}
