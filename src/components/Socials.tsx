import { Grid, IconButton } from '@mui/material';
import React from 'react';
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from 'react-icons/fa';
import Link from './Link';
type Props = {};

const SocialContacts = [
	{ icon: FaLinkedin, url: 'https://www.linkedin.com/in/karel-zamazal/' },
	{ icon: FaFacebookSquare, url: 'https://www.facebook.com/karel-zamazal/' },
	{ icon: FaGithubSquare, url: 'https://www.github.com' },
];

const Socials = (props: Props) => {
	return (
		<Grid
			container
			spacing={1}
			mt={2}
			sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
		>
			{SocialContacts.map((item) => (
				<Grid item key={item.url}>
					<Link href={item.url}>
						<item.icon fontSize={40} color='white' />
					</Link>
				</Grid>
			))}
		</Grid>
	);
};

export default Socials;
