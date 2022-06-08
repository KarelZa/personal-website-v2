import { styled } from '@mui/material/styles';
import hero from '../../../public/images/hero.jpg';

export const StyledHeroSection = styled('div')({
	// background: `linear-gradient(rgba(0, 0, 0, .9), rgba(0, 0,0, 1)) ,url(${hero.src})`,
	// 	background-color: #000000;
	// background-image: linear-gradient(43deg, #000000 0%, #2d2b2b 50%, #1a1a1d 100%);

	height: '100vh',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
});
