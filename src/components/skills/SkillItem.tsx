import { Typography } from '@mui/material';
import React from 'react';
import { StyledSkillItem } from '../../styles/skills/StyledSkillItem';

interface Props {
	imgPath: string;
	alt: string;
	title: string;
}

const SkillItem = (props: Props) => {
	return (
		<StyledSkillItem>
			<img src={props.imgPath} alt={props.title} height='40' />
			<Typography variant='subtitle2' fontWeight={300}>
				{props.title}
			</Typography>
		</StyledSkillItem>
	);
};

export default SkillItem;
