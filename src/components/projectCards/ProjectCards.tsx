import React from 'react';
// Components
import ProjectCard from './ProjectCard';
import { useMotionObserver } from '../../utils/hooks/MotionObserver';
// Styling
import { StyledCardsWrapper } from '../../styles/projectCards/StyledCardsWrapper';
import { SectionCaption } from '../../styles/sharedStyles/SectionCaption';
import { StyledSection } from '../../styles/sharedStyles/Section';
import { sectionVariant } from '../../styles/animations/animations';
// Model (Interface/Type)
import { CardProps } from '../../models/card.model';

type ProjectCardsProps = {
	cards: CardProps[];
};

const ProjectCards = ({ cards }: ProjectCardsProps) => {
	const [controls, ref] = useMotionObserver('visible', 0.3);
	return (
		<StyledSection ref={ref} variants={sectionVariant} initial='hidden' animate={controls}>
			<SectionCaption>Other</SectionCaption>
			<StyledCardsWrapper>
				{cards.map((card, index) => (
					<ProjectCard key={card.id} card={card} index={index} />
				))}
			</StyledCardsWrapper>
		</StyledSection>
	);
};

export default ProjectCards;
