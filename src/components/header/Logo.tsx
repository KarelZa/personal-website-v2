import React from 'react';
// Components
import { Typography } from '@mui/material';
import Link from '../shared/Link';

interface Props {}

const Logo = () => {
	return (
		<Link
			href='/'
			sx={{
				textDecoration: 'none',
			}}
		>
			<Typography variant='h4' fontWeight={'500'} letterSpacing='0' fontFamily={'Roboto'}>
				Karel Zamazal
			</Typography>
		</Link>
	);
};

export default Logo;
