import React, { useState } from 'react';
import Link from '../shared/Link';
import { Box, Typography } from '@mui/material';

type NavLinksProps = {
	navigationLinks: {
		name: string;
		href: string;
	}[];
	animationVariant?: {
		hidden: {
			opacity: number;
		};
		visible: {
			opacity: number;
		};
	};
};

const NavLinks = ({ navigationLinks }: NavLinksProps) => {
	const [close, setClose] = useState(false);

	const closeNavHandler = () => {
		setClose((prevState) => !prevState);
	};

	return (
		<Box>
			{navigationLinks.map((link, index) => (
				<li key={index}>
					<Link href={link.href} onClick={closeNavHandler}>
						<Typography variant='body1'>{link.name}</Typography>
					</Link>
				</li>
			))}
		</Box>
	);
};

export default NavLinks;
