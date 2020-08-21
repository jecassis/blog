import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import styled from 'styled-components';
import Page from '@/components/page';
import Title from '@/components/post/title';
import Meta from '@/components/post/meta';
import * as data from './posts.json';

const Article = styled.article`
    max-width: 650px;
    margin: auto;
    font-size: 14px;
`;

const Post = ({ children, postId, views }) => {
    const { title, date } = data.posts.filter(({ id }) => postId.replace(/^\d{4}-/, '') === id)[0]; // Replace the year and '-';
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
        </Page>
    );
};

Post.propTypes = {
    children: PropTypes.node.isRequired,
    postId: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
};

export default Post;
