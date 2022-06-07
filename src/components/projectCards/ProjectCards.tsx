import { Box, Container, Typography } from '@mui/material';
import { BsCodeSquare } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import React from 'react';
import { StyledCardsWrapper } from '../../styles/projects/StyledCardsWrapper';
import Link from '../Link';
import { StyledCard } from '../../styles/projects/StyledCard';

type Props = {
	cardData: { title: string; description: string; tags: string[]; id: string }[];
};

const ProjectCards = ({ cardData }: Props) => {
	console.log(cardData);

	return (
		<StyledCardsWrapper>
			{cardData.map((card) => (
				<StyledCard key={card.id}>
					<Box className='card-inner'>
						<div className='card--body'>
							<div className='card--badges'>
								<BsCodeSquare size={33} />
								<Link href={'http://seznam.cz'}>
									<FiExternalLink size={25} />
								</Link>
							</div>
							<Typography variant='h6'>{card.title}</Typography>
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
			))}
		</StyledCardsWrapper>
	);
};

export default ProjectCards;
