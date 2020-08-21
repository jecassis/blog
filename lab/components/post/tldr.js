import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrap = styled.div`
    margin-bottom: 25px;
    padding: 15px;
    background: #eee;
    line-height: 20px;
`;

const Content = styled.div`
    display: inline;
    font-style: oblique;
`;

const TLDR = ({ children }) => (
    <Wrap>
        <b>tl;DR:</b>
        {' '}
        <Content>{children}</Content>
    </Wrap>
);

TLDR.propTypes = {
    children: PropTypes.node.isRequired,
};

export default TLDR;
