import React from 'react';
import ContactForm from './ContactForm';
import { Box, Grid, Typography } from '@mui/material';
import { StyledContact } from '../../styles/contact/StyledContact';

import theme from '../../styles/appTheme/theme';
import { SectionCaption } from '../../styles/sharedStyles/SectionCaption';
import { StyledDivider } from '../../styles/sharedStyles/Divider';

const Contact = () => {
	return (
		<StyledContact id='contact'>
			<Grid container justifyContent={'center'} gap={5}>
				<Grid
					item
					xs={10}
					sm={8}
					md={6}
					textAlign={'left'}
					justifyContent='center'
					alignContent={'center'}
				>
					<SectionCaption>contact</SectionCaption>
					<StyledDivider />
					<Typography variant='body1' textAlign={'center'} mt={1}>
						Whether you looking for a new member to strengthen your crew or just want to
						chat, feel free to send me a message.
					</Typography>
				</Grid>
				<Grid item xs={12} md={10}>
					<ContactForm />
				</Grid>
			</Grid>
		</StyledContact>
	);
};

export default Contact;
