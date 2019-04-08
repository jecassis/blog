import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const P = styled.p`
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 20px;
`;

const Paragraph = ({ children }) => <P>{children}</P>;

Paragraph.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Paragraph;
