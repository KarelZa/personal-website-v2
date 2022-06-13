import React, { useState } from 'react';
// Components
import NavLinks from './NavLinks';
import Logo from './Logo';
import MobileNav from './MobileNav';
import { IconButton, Toolbar, useMediaQuery } from '@mui/material';
import { Spin as Hamburger } from 'hamburger-react';
// Styling
import { StyledHeader } from '../../styles/header/Header.styled';
import { motion } from 'framer-motion';
import theme from '../../styles/appTheme/theme';

const navigationLinks = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '#about' },
	{ name: 'Skills', href: '#skills' },
	{ name: 'Projects', href: '#projects' },
	{ name: 'Contact', href: '#contact' },
];

const Header = () => {
	const isMobileView = useMediaQuery(theme.breakpoints.down('md'));
	const [isOpen, setIsOpen] = useState(false);
	const hamburgerOnClickHandler = () => {
		setIsOpen((prevState) => !prevState);
	};
	// parent animation
	const parentVariant = isMobileView
		? {
				hidden: {
					opacity: 0,
				},
				visible: {
					opacity: 1,
				},
		  }
		: {
				hidden: {
					opacity: 0,
				},
				visible: {
					opacity: 1,
					transition: {
						when: 'beforeChildren',
						staggerChildren: 0.3,
					},
				},
		  };

	// Child animation
	const childVariant = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
	};

	return (
		<StyledHeader>
			<Toolbar
				component={motion.nav}
				variants={parentVariant}
				initial='hidden'
				animate='visible'
			>
				<Logo animationVariant={childVariant} />
				<NavLinks navigationLinks={navigationLinks} animationVariant={childVariant} />
				<motion.div
					className='hamburger'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}
				>
					<Hamburger label='Show menu' color='white' onToggle={hamburgerOnClickHandler} />
				</motion.div>
			</Toolbar>
			<MobileNav navigationLinks={navigationLinks} isOpen={isOpen} />
		</StyledHeader>
	);
};

export default Header;
