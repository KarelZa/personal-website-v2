import React from 'react';
import Link from '../shared/Link';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

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
	return (
		<Box>
			{navigationLinks.map((link, index) => (
				<li key={index}>
					<Link href={link.href}>
						<Typography variant='body1'>{link.name}</Typography>
					</Link>
				</li>
			))}
		</Box>
	);
};

export default NavLinks;
