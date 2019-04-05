import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { INDEX_TITLE, SUBTITLE, INSTAGRAM_URL, STRAVA_URL, TFK_URL } from '../lib/globals';
import Page from '../layouts/main';

export default () => (
    <Page>
        <Head>
            <title>{INDEX_TITLE}</title>
        </Head>

        <div className="home">
            <div className="main">
                <h1>{INDEX_TITLE}</h1>
                <nav>
                    <Link prefetch href="/blog"><a>{SUBTITLE}</a></Link>
                    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href={STRAVA_URL} target="_blank" rel="noopener noreferrer">Strava</a>
                    <a href={TFK_URL} target="_blank" rel="noopener noreferrer">Team for Kids</a>
                    <a href="/gpg.asc" download>GPG</a>
                </nav>
            </div>
        </div>

        <style jsx>
            {`
.home {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;
}

.main {
    flex: none;
    text-align: center;
}

h1 {
    font-size: 14px;
    font-weight: normal;
}

nav {
    margin-top: 20px;
}

a {
    display: inline-block;
    margin: 0 15px;
    text-decoration: none;
}
            `}
        </style>
    </Page>
);
