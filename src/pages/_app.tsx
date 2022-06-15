import * as React from 'react';
import Head from 'next/head'; // metadata
import { AppProps } from 'next/app'; // types from nextjs
import { responsiveFontSizes, ThemeProvider } from '@mui/material/styles'; // ThemeProvider from Materiaul-iu
import CssBaseline from '@mui/material/CssBaseline'; // Css reset
import { CacheProvider, EmotionCache } from '@emotion/react'; // shared client-side cache for a user session
import theme from '../styles/appTheme/theme'; // own theme
import createEmotionCache from '../utils/emotion/createEmotionCache'; // own cache

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// extending AppProps from Nextjs with custom cache type
interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

export default function MyApp({
	Component,
	emotionCache = clientSideEmotionCache,
	pageProps,
}: MyAppProps) {
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name='viewport' content='initial-scale=1, width=device-width' />
			</Head>
			<ThemeProvider theme={responsiveFontSizes(theme)}>
				{/* CssReset */}
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	);
}
