import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Pre = styled.pre`
    line-height: 20px;
    margin-bottom: 20px;
    font-size: 12px;

    code {
        color: #999;
    }
`;

const Snippet = ({ children }) => (
    <Pre>
        <code>{children}</code>
    </Pre>
);

Snippet.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Snippet;
