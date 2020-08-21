import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { INDEX_TITLE, SUBTITLE, BASE_URI } from '@/lib/globals';

export default class Doc extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self'; media-src 'self' data:; img-src 'self' data: https://oops-blog.s3-us-west-2.amazonaws.com https://wpassets.trainingpeaks.com; connect-src 'self' https://oops-blog.s3-us-west-2.amazonaws.com https://oops-views.now.sh; child-src 'self'; frame-src 'self'; form-action 'self'; prefetch-src 'self' https://oops-blog.s3-us-west-2.amazonaws.com; worker-src 'self'; manifest-src 'self'; object-src 'none'; base-uri 'none'; block-all-mixed-content; upgrade-insecure-requests" />
                    <meta name="theme-color" content="#3c4556" />
                    <meta name="application-name" content={INDEX_TITLE} />
                    <meta name="apple-mobile-web-app-title" content="Oops" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="msapplication-config" content="/browserconfig.xml" />
                    <meta name="msapplication-TileColor" content="#2fafe0" />
                    <meta name="msapplication-tap-highlight" content="no" />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="format-detection" content="date=no" />
                    <meta name="format-detection" content="address=no" />
                    <meta name="format-detection" content="email=no" />
                    <meta name="robots" content="index,follow" />
                    <meta name="googlebot" content="index,follow" />
                    <meta name="description" content={`${SUBTITLE} for ${INDEX_TITLE}`} />
                    {/* <meta name="twitter:card" content="summary_large_image" /> */}
                    {/* <meta name="twitter:site" content="@bug_check" /> */}
                    {/* <meta name="twitter:creator" content="@bug_check" /> */}
                    <meta name="og:title" content={INDEX_TITLE} />
                    <meta property="og:url" content={`https://${BASE_URI}/`} />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={INDEX_TITLE} />
                    <meta property="og:description" content={`${SUBTITLE} for ${INDEX_TITLE}`} />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:site_name" content={INDEX_TITLE} />
                    {/* <meta property="og:image" content={`https://og-image.now.sh/${encodeURI(INDEX_TITLE)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} /> */}
                    <link href="https://oops-blog.s3-us-west-2.amazonaws.com" rel="preconnect" crossOrigin="anonymous" />
                    {/* <link href="https://oops-blog.s3-us-west-2.amazonaws.com/AvenirLTStd-Light.woff2" rel="preload" as="font" type="font/woff2" crossOrigin="anonymous" /> */}
                    {/* <link href="https://oops-blog.s3-us-west-2.amazonaws.com/AvenirLTStd-Roman.woff2" rel="preload" as="font" type="font/woff2" crossOrigin="anonymous" /> */}
                    {/* <link href="https://oops-blog.s3-us-west-2.amazonaws.com/AvenirLTStd-Heavy.woff2" rel="preload" as="font" type="font/woff2" crossOrigin="anonymous" /> */}
                    <link href="/site.webmanifest" rel="manifest" /* importance="low" */ />
                    <link href="/humans.txt" rel="author" type="text/plain" /* importance="low" */ />
                    <link href="/atom" rel="alternate" type="application/atom+xml" title={INDEX_TITLE} />
                    <link href="/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
                    {/* <link href="/favicon-194x194.png" rel="icon" type="image/png" sizes="194x194" /> */}
                    <link href="/android-chrome-192x192.png" rel="icon" type="image/png" sizes="192x192" />
                    <link href="/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
                    <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
                    <link href="/safari-pinned-tab.svg" rel="mask-icon" color="#3c4556" /* importance="low" */ />
                    <link href="/apple-touch-icon.png" rel="apple-touch-icon" /* importance="low" */ />
                    <link href={`https://${BASE_URI}/`} rel="canonical" />
                    {/* <link href="https://oops-blog.s3-us-west-2.amazonaws.com/profile.png" rel="preload" as="image" /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
