import React, { useEffect } from 'react';
import Link from '../shared/Link';
import { Box, Typography } from '@mui/material';
import { BsCodeSquare } from 'react-icons/bs';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
// Styling
import { StyledCard } from '../../styles/projectCards/StyledCard';
// Model (Interface/Type)
import { CardProps } from '../../models/card.model';
import { useMotionObserver } from '../../utils/hooks/MotionObserver';

type ProjectCardProps = {
	card: CardProps;
};

const ProjectCard = ({ card }: ProjectCardProps) => {
	const [controls, ref] = useMotionObserver('visible');
	// const controls = useAnimation();
	// const [ref, inView] = useInView({ threshold: 0.9 });

	// useEffect(() => {
	// 	if (inView) {
	// 		controls.start('visible');
	// 	}
	// }, [controls, inView]);

	const cardVariants = {
		hidden: {
			y: -20,
			opacity: 0,
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 2, delayChilden: 2 },
		},
	};

	return (
		<StyledCard variants={cardVariants} animate={controls} initial='hidden' ref={ref}>
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
