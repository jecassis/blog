import React from 'react';
import PropTypes from 'prop-types';
import Page from './main';

const Post = ({ children }) => (
    <Page>
        <article>
            {children}
        </article>
        <style jsx>
            {`
article {
    max-width: 650px;
    margin: auto;
    font-size: 14px;
}
            `}
        </style>
        <style jsx global>
            {`
body {
    width: 100%;
    overflow-x: hidden;
}
            `}
        </style>
    </Page>
);

Post.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Post;
