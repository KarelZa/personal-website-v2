import { Grid, IconButton } from '@mui/material';
import React from 'react';
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from 'react-icons/fa';
import { StyledSocials } from '../../styles/heroSection/socials';
import Link from '../Link';
type Props = {};

const SocialContacts = [
	{ icon: FaLinkedin, url: 'https://www.linkedin.com/in/karel-zamazal/' },
	{ icon: FaFacebookSquare, url: 'https://www.facebook.com/karel-zamazal/' },
	{ icon: FaGithubSquare, url: 'https://www.github.com' },
];

const Socials = (props: Props) => {
	return (
		<StyledSocials>
			{SocialContacts.map((item) => (
				<Link href={item.url} key={item.url}>
					<item.icon fontSize={40} />
				</Link>
			))}
		</StyledSocials>
	);
};

export default Socials;
