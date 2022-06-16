import * as React from 'react';
// import { theme } from '../styles/appTheme/theme'; // own theme
import createEmotionCache from '../utils/emotion/createEmotionCache'; // own cache
import PageProvider from '../components/shared/PageProvider';
import Head from 'next/head'; // metadata
import { AppProps } from 'next/app'; // types from nextjs
import { responsiveFontSizes } from '@mui/material/styles'; // ThemeProvider from Materiaul-iu
import CssBaseline from '@mui/material/CssBaseline'; // Css reset
import { CacheProvider, css, EmotionCache } from '@emotion/react'; // shared client-side cache for a user session
import { GlobalStyles, ScopedCssBaseline } from '@mui/material';
import { ThemeProvider } from 'next-themes';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// extending AppProps from Nextjs with custom cache type
interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	return (
		<ThemeProvider enableColorScheme>
			<CacheProvider value={emotionCache}>
				<PageProvider>
					<Head>
						<meta name='viewport' content='initial-scale=1, width=device-width' />
					</Head>

					{/* <ThemeProvider theme={responsiveFontSizes(theme)}> */}
					{/* CssReset */}
					<CssBaseline enableColorScheme />

					<Component {...pageProps} />

					{/* </ThemeProvider> */}
				</PageProvider>
			</CacheProvider>
		</ThemeProvider>
	);
}
