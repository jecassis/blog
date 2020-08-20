import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { INDEX_TITLE } from '@/lib/globals';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default () => (
    <div>
        <Head>
            <link href="/atom" type="application/atom+xml" rel="alternate" title={INDEX_TITLE} />
        </Head>
    </div>
);
