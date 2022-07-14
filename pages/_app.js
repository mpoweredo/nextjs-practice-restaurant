import Head from 'next/head';
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
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
