import { Box, Typography } from '@mui/material';
import React from 'react';
import Link from '../Link';

type Props = {
	navigationLinks: {
		name: string;
		href: string;
	}[];
};

const Nav = (props: Props) => {
	return (
		<Box display={{ xs: 'none', sm: 'flex' }}>
			{props.navigationLinks.map((link, index) => (
				<Link
					key={index}
					href={link.href}
					sx={{
						color: 'white',
						textDecoration: 'none',
						marginLeft: '15px',
					}}
				>
					<Typography variant='body2'>{link.name}</Typography>
				</Link>
			))}
		</Box>
	);
};

export default Nav;
