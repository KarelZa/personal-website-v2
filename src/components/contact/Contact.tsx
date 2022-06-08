import { Box, Button, Grid, TextField, Typography, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import theme from '../../styles/appTheme/theme';
import { StyledContact } from '../../styles/contact/StyledContact';
import { StyledForm } from '../../styles/contact/StyledForm';
import { Flex } from '../../styles/sharedStyles/Flex';

// type IFormInputs = {
// 	name: string;
// 	email: string;
// 	subject: string;
// 	message: string;
// };

// interface CSS {
// 	focusColor?: string;
// }

// const CssTextField = styled(TextField, {
// 	shouldForwardProp: (props) => props !== 'focusColor',
// })<CSS>((p) => ({
// 	// input label when focused
// 	'& label.Mui-focused': {
// 		color: p.focusColor,
// 	},
// 	// focused color for input with variant='standard'
// 	'& .MuiInput-underline:after': {
// 		borderBottomColor: p.focusColor,
// 	},
// 	// focused color for input with variant='filled'
// 	'& .MuiFilledInput-underline:after': {
// 		borderBottomColor: p.focusColor,
// 	},
// 	// focused color for input with variant='outlined'
// 	'& .MuiOutlinedInput-root': {
// 		'&.Mui-focused fieldset': {
// 			borderColor: p.focusColor,
// 		},
// 	},
// }));

const Contact = () => {
	return (
		<StyledContact>
			<Grid container my={5}>
				<Grid
					container
					md={5}
					margin='0 auto'
					textAlign={'left'}
					justifyContent='center'
					alignContent={'center'}
				>
					<Typography variant='h4' textAlign={'center'}>
						Get in touch
					</Typography>
					<Typography variant='body1'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi ipsam
						impedit voluptas architecto dolor obcaecati ratione nulla ex unde esse.
					</Typography>
				</Grid>

				<Grid item xs={12} md={9} margin='0 auto'>
					<StyledForm>
						<Flex
							direction={useMediaQuery(theme.breakpoints.up('md')) ? 'row' : 'column'}
							gap='1rem'
						>
							<TextField
								id='filled-basic'
								label='Name'
								variant='filled'
								sx={{ width: '100%' }}
							/>
							<TextField id='filled-basic' label='Email' variant='filled' />
						</Flex>
						{/* <TextField id='filled-basic' label='Subject' variant='filled' /> */}
						<TextField id='filled-basic' label='Subject' variant='filled' />
						<TextField
							id='filled-multiline-static'
							label='Message'
							multiline
							rows={5}
							variant='filled'
						/>
						<Button variant='outlined' color='primary' size='large'>
							SEND MESSAGE
						</Button>
					</StyledForm>
				</Grid>
			</Grid>
		</StyledContact>
	);
};

export default Contact;
