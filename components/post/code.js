import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Source = styled.code`
    color: #666;
    font-family: monospace;
`;

const Code = ({ children }) => (
    <Source>
        {children}
    </Source>
);

Code.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Code;
