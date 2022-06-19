import { responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { useTheme } from 'next-themes';
import { ReactNode, useEffect, useState } from 'react';
import { lightTheme, darkTheme } from '../../styles/appTheme/theme';

interface PageProviderProps {
	children: ReactNode;
}

// Creating PageProvider to allow light/Dark mode with localstorage save before page loads
const PageProvider = ({ children }: PageProviderProps) => {
	const { resolvedTheme } = useTheme();
	const [currentTheme, setCurrentTheme] = useState(lightTheme);

	useEffect(() => {
		resolvedTheme === 'light' ? setCurrentTheme(lightTheme) : setCurrentTheme(darkTheme);
	}, [resolvedTheme]);

	return <ThemeProvider theme={responsiveFontSizes(currentTheme)}>{children}</ThemeProvider>;
};
export default PageProvider;
