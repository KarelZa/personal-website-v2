import React from 'react';
// Components
import SkillItem from './SkillItem';
// Styling
import { StyledPrimarySkills } from '../../styles/skills/StyledPrimarySkills';

interface IconProps {
	id: string;
	imgPath: string;
	name: string;
}

interface PrimarySkillsProps {
	iconsArr: IconProps[];
	title: string;
}

const PrimarySkills = (props: PrimarySkillsProps) => {
	return (
		<StyledPrimarySkills>
			{props.iconsArr.map((icon) => (
				<SkillItem key={icon.id} imgPath={icon.imgPath} alt={icon.name} title={icon.name} />
			))}
		</StyledPrimarySkills>
	);
};

export default PrimarySkills;
