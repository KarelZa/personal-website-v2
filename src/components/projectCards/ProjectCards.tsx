import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import { BsCodeSquare } from 'react-icons/bs';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import React from 'react';
import { StyledCardsWrapper } from '../../styles/projects/StyledCardsWrapper';
import Link from '../Link';
import { StyledCard } from '../../styles/projects/StyledCard';
import { StyledCaption } from '../../styles/sharedStyles/Caption';
import theme from '../../styles/appTheme/theme';
import { StyledDivider } from '../../styles/sharedStyles/Divider';

type Props = {
	cardData: {
		title: string;
		description: string;
		tags: string[];
		id: string;
		links: {
			icon: string;
			url: string;
		}[];
	}[];
};

const ProjectCards = ({ cardData }: Props) => {
	// console.log(cardData);

	return (
		<>
			<StyledCaption contentString='PROJECTS'>
				Other {useMediaQuery(theme.breakpoints.down('md')) && 'Projects'}
			</StyledCaption>
			<StyledDivider />
			<StyledCardsWrapper>
				{cardData.map((card) => (
					<StyledCard key={card.id}>
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
				))}
			</StyledCardsWrapper>
		</>
	);
};

export default ProjectCards;
