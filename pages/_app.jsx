import App from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import React from 'react';
import withRedux from "next-redux-wrapper";
import store from '../store';
import 'bootstrap/dist/css/bootstrap.min.css';


class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return { pageProps: pageProps };
    }

    render() {
        const { Component, pageProps, store } = this.props;
        return (
            <Provider store={store}>
                <Head>
                    <title>Ali News</title>
                    <link
                        href="https://fonts.googleapis.com/css?family=Inria+Sans:300,400,700&display=swap"
                        rel="stylesheet" />
                </Head>
                <Component {...pageProps} />
            </Provider>
        );
    }
}
export default withRedux(() => store)(MyApp);

