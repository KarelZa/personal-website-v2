import React from 'react';
// Components
import { Typography } from '@mui/material';
// Styling
import { StyledSkillItem } from '../../styles/skills/StyledSkillItem';

interface SkillItemProps {
	imgPath: string;
	itemAlt: string;
	title: string;
}

const SkillItem = (props: SkillItemProps) => {
	return (
		<StyledSkillItem>
			<img src={props.imgPath} alt={props.itemAlt + ' icon'} height='40' />
			<Typography variant={'subtitle2'} component={'h5'} fontWeight={300}>
				{props.title}
			</Typography>
		</StyledSkillItem>
	);
};

export default SkillItem;
