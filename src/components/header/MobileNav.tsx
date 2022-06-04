import { Drawer, Fade, List, ListItem, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import theme from '../../styles/appTheme/theme';
import Link from '../Link';

type Props = {
	isOpen: boolean;
	navigationLinks: {
		name: string;
		href: string;
	}[];
};

const MobileNav = (props: Props) => {
	useEffect(() => {
		if (props.isOpen) {
			console.log('layout opened');

			document.body.style.overflow = 'hidden';
		} else {
			console.log('layout closed');
			document.body.style.overflow = 'unset';
		}
	}, [props.isOpen]);

	return (
		<Fade in={props.isOpen} timeout={250}>
			<Drawer
				PaperProps={{
					sx: {
						width: '100%',
						pt: '70px',
						backgroundColor: theme.palette.primary.main,
					},
				}}
				variant='permanent'
				anchor='right'
				open={props.isOpen}
				sx={{ zIndex: '-1', display: { sm: 'none' } }}
			>
				<List
					sx={{
						p: 0,
						px: 1,
						backgroundColor: 'green',
					}}
				>
					{props.navigationLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							sx={{
								color: 'white',
								textDecoration: 'none',
								backgroundColor: 'orange',
							}}
						>
							<ListItem
								sx={{
									justifyContent: 'space-around',
									my: 0.6,
									backgroundColor: 'blue',
								}}
							>
								<Typography
									variant='subtitle1'
									fontWeight={400}
									letterSpacing='0.07rem'
								>
									{link.name}
								</Typography>
							</ListItem>
						</Link>
					))}
				</List>
			</Drawer>
		</Fade>
	);
};

export default MobileNav;
