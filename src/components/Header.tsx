import React, { useState, useEffect } from 'react';
import {
	AppBar,
	Box,
	Container,
	Drawer,
	Fade,
	IconButton,
	List,
	ListItem,
	Toolbar,
	Typography,
} from '@mui/material';
import theme from '../styles/appTheme/theme';
import Link from './Link';
import { Spin as Hamburger } from 'hamburger-react';
import Logo from './Logo';
import MobileNav from './MobileNav';
import Nav from './Nav';

type Props = {};

const navigationLinks = [
	{ name: 'Home', href: '#home' },
	{ name: 'About', href: '#about' },
	{ name: 'Skills', href: '#skills' },
	{ name: 'Projects', href: '#projects' },
	{ name: 'Contact', href: '#contact' },
];

const Header = (props: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	const hamburgerOnClickHandler = () => {
		setIsOpen((prevState) => !prevState);
	};

	return (
		<AppBar sx={{ backgroundColor: 'transparent' }}>
			<Container maxWidth='lg'>
				<Toolbar
					sx={{
						margin: 0,
						padding: 0,
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						height: '8vh',
					}}
					disableGutters
				>
					<Logo />
					<Nav navigationLinks={navigationLinks} />
					<IconButton
						sx={{
							display: { sm: 'none' },
							p: 0,
							m: 0,
						}}
						onClick={hamburgerOnClickHandler}
					>
						<Hamburger label='Show menu' color='white' />
					</IconButton>
				</Toolbar>
			</Container>
			<MobileNav navigationLinks={navigationLinks} isOpen={isOpen} />
		</AppBar>
	);
};

export default Header;
