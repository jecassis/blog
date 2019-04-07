import React from 'react';
import styled from 'styled-components';

const HR = styled.div`
    border-style: none;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
    
    ::after {
        content: '***';
        text-align: center;
        display: inline;
    }
`;

export default () => (
    <HR />
);
