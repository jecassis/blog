import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Blockquote = styled.blockquote`
    margin: 30px 0;
    color: #9B9B9B;
    font-style: oblique;
    font-size: 12px;
`;

const P = styled.p`
    line-height: 24px;
`;

const Quote = ({ by, children }) => (
    <Blockquote>
        <P>
            {children}
            <br />
            {by && `– ${by}`}
        </P>
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
