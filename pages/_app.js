import Head from 'next/head';
import ErrorBoundary from '../components/errourBoundary/ErrorBoundary';
import MainNavigation from '../components/layout/MainNavigation';
import '../styles/globals.css';
import React from 'react';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<MainNavigation />
			<ErrorBoundary>
				<Component {...pageProps} />
			</ErrorBoundary>
		</>
	);
}

export default MyApp;
