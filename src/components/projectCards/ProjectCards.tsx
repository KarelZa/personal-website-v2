import React from 'react';
// Components
import ProjectCard from './ProjectCard';
// Styling
import { StyledCardsWrapper } from '../../styles/projectCards/StyledCardsWrapper';
import { SectionCaption } from '../../styles/sharedStyles/SectionCaption';
import { StyledSection } from '../../styles/sharedStyles/Section';
// Model (Interface/Type)
import { CardProps } from '../../models/card.model';

type ProjectCardsProps = {
	cards: CardProps[];
};

const ProjectCards = ({ cards }: ProjectCardsProps) => {
	return (
		<StyledSection>
			<SectionCaption>Other</SectionCaption>
			<StyledCardsWrapper>
				{cards.map((card) => (
					<ProjectCard key={card.id} card={card} />
				))}
			</StyledCardsWrapper>
		</StyledSection>
	);
};

export default ProjectCards;
