import React from 'react';
// Components
import ContactForm from './ContactForm';
import { Grid, Typography } from '@mui/material';
// Styling
import { StyledSection } from '../../styles/sharedStyles/Section';
import { SectionCaption } from '../../styles/sharedStyles/SectionCaption';

const Contact = () => {
	return (
		<StyledSection id='contact'>
			<Grid container justifyContent={'center'} gap={5}>
				<Grid
					item
					xs={12}
					textAlign={'left'}
					justifyContent='center'
					alignContent={'center'}
				>
					<SectionCaption justifySelf='center'>contact</SectionCaption>
					<Typography variant='body1' textAlign={'center'} mt={1}>
						Whether you looking for a new member to strengthen your crew or just want to
						chat, feel free to send me a message.
					</Typography>
				</Grid>
				<Grid item xs={12} md={10}>
					<ContactForm />
				</Grid>
			</Grid>
		</StyledSection>
	);
};

export default Contact;
