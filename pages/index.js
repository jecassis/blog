import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Page from '../layouts/main';

export default () => (
    <Page>
        <Head>
            <title>Oops</title>
        </Head>

        <div className="home">
            <div className="main">
                <h1>Oops</h1>
                <nav>
                    <Link prefetch href="/blog"><a>Blog</a></Link>
                    <a href="https://instagram.com/bug_check" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.strava.com/athletes/oops" target="_blank" rel="noopener noreferrer">Strava</a>
                    <a href="https://runwithtfk.org/Profile/PublicPage/73521" target="_blank" rel="noopener noreferrer">Team for Kids</a>
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
