import React from 'react';
// Components
import { Typography, useMediaQuery } from '@mui/material';
import Socials from '../shared/Socials';
// Styling
import { StyledFooter } from '../../styles/footer/StyledFooter';

const Footer = () => {
	return (
		<StyledFooter>
			<Socials />
			<Typography variant='subtitle1'>Build by Karel Zamazal</Typography>
			<Typography variant='subtitle2'>2022</Typography>
		</StyledFooter>
	);
};

export default Footer;
