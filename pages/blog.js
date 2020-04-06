import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';
import { SUBTITLE } from '../lib/globals';
import Page from '../layouts/page';
import { posts } from '../posts';

const PostDiv = styled.div`
    margin-bottom: 10px;

    @media (max-width: 500px) {
        margin-bottom: 15px;
    }

    a {
        text-decoration: none;
    }
`;

const PostDate = styled.span`
    display: inline-block;
    width: 140px;
    text-align: right;
    margin-right: 30px;
    color: #999;

    @media (max-width: 500px) {
        display: block;
        width: inherit;
        text-align: inherit;
        font-size: 11px;
        color: #ccc;
        margin-bottom: 5px;
    }
`;

const Post = ({ id, date, title }) => (
    <PostDiv>
        <PostDate>{date}</PostDate>
        <Link href={`/${new Date(date).getFullYear()}/${id}`}>
            <a>{title}</a>
        </Link>
    </PostDiv>
);

Post.propTypes = {
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default () => (
    <Page>
        <Head>
            <title>{SUBTITLE}</title>
        </Head>
        <div className="posts">
            {posts.map(({ id, date, title }) => (
                <Post id={id} key={id} date={date} title={title} />
            ))}
        </div>
    </Page>
);
