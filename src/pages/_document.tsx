import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import theme from '../styles/appTheme/theme';
import createEmotionCache from '../utils/createEmotionCache';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang='en' style={{ scrollBehavior: 'smooth' }}>
				<Head>
					{/* PWA primary color */}
					<meta name='theme-color' content={theme.palette.primary.main} />
					<link rel='shortcut icon' href='./favicon.ico' />
					<link
						href='https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700;900&family=Montserrat:wght@100;200;300;400;500;600;700&family=Pacifico&family=Permanent+Marker&family=Roboto:wght@500;700&display=swap'
						rel='stylesheet'
					/>
					{/* Inject MUI styles first to match with the prepend: true configuration. */}
					{(this.props as any).emotionStyleTags}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (context) => {
	const originalRenderPage = context.renderPage;

	// You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
	// However, be aware that it can have global side effects.
	const cache = createEmotionCache();
	const { extractCriticalToChunks } = createEmotionServer(cache);

	context.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App: any) =>
				function EnhanceApp(props) {
					return <App emotionCache={cache} {...props} />;
				},
		});

	const initialProps = await Document.getInitialProps(context);
	// This is important. It prevents emotion to render invalid HTML.
	// See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
	const emotionStyles = extractCriticalToChunks(initialProps.html);
	const emotionStyleTags = emotionStyles.styles.map((style) => (
		<style
			data-emotion={`${style.key} ${style.ids.join(' ')}`}
			key={style.key}
			// eslint-disable-next-line react/no-danger
			dangerouslySetInnerHTML={{ __html: style.css }}
		/>
	));

	return {
		...initialProps,
		emotionStyleTags,
	};
};
