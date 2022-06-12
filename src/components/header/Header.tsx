import React, { useState } from 'react';
// Components
import NavLinks from './NavLinks';
import Logo from './Logo';
import MobileNav from './MobileNav';
import { IconButton, Toolbar } from '@mui/material';
import { Spin as Hamburger } from 'hamburger-react';
// Styling
import { StyledHeader } from '../../styles/header/Header.styled';

const navigationLinks = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '#about' },
	{ name: 'Skills', href: '#skills' },
	{ name: 'Projects', href: '#projects' },
	{ name: 'Contact', href: '#contact' },
];

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const hamburgerOnClickHandler = () => {
		setIsOpen((prevState) => !prevState);
	};

	return (
		<StyledHeader>
			<Toolbar component={'nav'}>
				<Logo />
				<NavLinks navigationLinks={navigationLinks} />
				<IconButton onClick={hamburgerOnClickHandler}>
					<Hamburger label='Show menu' color='white' />
				</IconButton>
			</Toolbar>
			<MobileNav navigationLinks={navigationLinks} isOpen={isOpen} />
		</StyledHeader>
	);
};

export default Header;
