import React from 'react';
import Link from '../shared/Link';
import { Box, Typography } from '@mui/material';
import { BsCodeSquare } from 'react-icons/bs';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
// Styling
import { StyledCard } from '../../styles/projects/StyledCard';
// Model (Interface/Type)
import { CardProps } from '../../models/card.model';

type ProjectCardProps = {
	card: CardProps;
};

const ProjectCard = ({ card }: ProjectCardProps) => {
	return (
		<StyledCard>
			<Box className='card-inner'>
				<div className='card--body'>
					<div className='card--top'>
						<BsCodeSquare size={33} />
						<div>
							{card.links.map((link, index) => (
								<Link href={link.url} key={index}>
									{link.icon === 'github' ? (
										<FiGithub size={25} />
									) : (
										<FiExternalLink size={25} />
									)}
								</Link>
							))}
						</div>
					</div>
					<Link href={card.links[0].url}>
						<Typography variant='h6'>{card.title}</Typography>
					</Link>
					<Typography variant='body2'>{card.description}</Typography>
				</div>
				<div className='card--footer'>
					<ul>
						{card.tags.map((tag, index) => (
							<li key={index}>
								<Typography variant='caption'>{tag}</Typography>
							</li>
						))}
					</ul>
				</div>
			</Box>
		</StyledCard>
	);
};

export default ProjectCard;
