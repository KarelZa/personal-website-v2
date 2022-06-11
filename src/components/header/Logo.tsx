import React from 'react';
// Components
import { Typography } from '@mui/material';
import Link from '../shared/Link';

const Logo = () => {
	return (
		<Link
			href='/'
			sx={{
				color: 'white',
				textDecoration: 'none',
			}}
		>
			<Typography
				variant='subtitle1'
				fontWeight={'500'}
				letterSpacing='.10rem'
				fontFamily={'Roboto'}
			>
				KAREL ZAMAZAL
			</Typography>
		</Link>
	);
};

export default Logo;
