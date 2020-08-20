import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { INDEX_TITLE, SUBTITLE, INSTAGRAM_URL, STRAVA_URL } from '@/lib/globals';
import Page from '@/layouts/page';

const Index = () => (
    <Page>
        <Head>
            <title>{INDEX_TITLE}</title>
        </Head>
        <div className="home">
            <main className="main">
                <h1 className="title">{INDEX_TITLE}</h1>
                <nav className="urls">
                    <Link href="/blog">
                        <a>{SUBTITLE}</a>
                    </Link>
                    <Link href="/blog_old">
                        <a>{SUBTITLE}_old</a>
                    </Link>
                    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                    <a href={STRAVA_URL} target="_blank" rel="noopener noreferrer">
                        Strava
                    </a>
                    <a href="/pgp.asc" download>
                        PGP
                    </a>
                </nav>
            </main>
        </div>
    </Page>
);

export default Index;