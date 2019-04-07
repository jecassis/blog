import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';
import { INDEX_TITLE, SUBTITLE, INSTAGRAM_URL, STRAVA_URL, TFK_URL } from '../lib/globals';
import Page from '../layouts/page';

const Home = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;
`;

const Main = styled.div`
    flex: none;
    text-align: center;
`;

const H1 = styled.h1`
    font-size: 14px;
    font-weight: normal;
`;

const Nav = styled.nav`
    margin-top: 20px;
`;

const A = styled.a`
    display: inline-block;
    margin: 0 15px;
    text-decoration: none;
`;

export default () => (
    <Page>
        <Head>
            <title>{INDEX_TITLE}</title>
        </Head>

        <Home>
            <Main>
                <H1>{INDEX_TITLE}</H1>
                <Nav>
                    <Link prefetch href="/blog"><A>{SUBTITLE}</A></Link>
                    <A href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram</A>
                    <A href={STRAVA_URL} target="_blank" rel="noopener noreferrer">Strava</A>
                    <A href={TFK_URL} target="_blank" rel="noopener noreferrer">Team for Kids</A>
                    <A href="/gpg.asc" download>GPG</A>
                </Nav>
            </Main>
        </Home>
    </Page>
);
