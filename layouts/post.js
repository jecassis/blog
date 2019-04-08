import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';
import Title from '../components/post/title';
import Meta from '../components/post/meta';
import { posts } from '../posts';
import Page from './page';

const GlobalStyle = createGlobalStyle`
body {
    width: 100%;
    overflow-x: hidden;
}
`;

const Article = styled.article`
    max-width: 650px;
    margin: auto;
    font-size: 14px;
`;

const Post = ({ children, postId, views }) => {
    const { title, date } = posts.filter(({ id }) => postId.replace(/^\d{4}-/, '') === id)[0]; // Replace the year and '-';
    return (
        <Page>
            <Head>
                <title>{title}</title>
            </Head>
            <Article>
                <Title>{title}</Title>
                <Meta date={date} views={views} />
                {children}
            </Article>
            <GlobalStyle />
        </Page>
    );
};

Post.propTypes = {
    children: PropTypes.node.isRequired,
    postId: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
};

export default Post;
