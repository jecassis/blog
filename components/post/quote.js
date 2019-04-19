import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Blockquote = styled.blockquote`
    margin: 30px 0;
    color: #9b9b9b;
    font-style: oblique;
    font-size: 12px;

    p {
        line-height: 24px;
    }
`;

const Quote = ({ by, children }) => (
    <Blockquote>
        <p>
            {children}
            <br />
            {by && `– ${by}`}
        </p>
    </Blockquote>
);

Quote.propTypes = {
    by: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Quote.defaultProps = {
    by: '',
};

export default Quote;
