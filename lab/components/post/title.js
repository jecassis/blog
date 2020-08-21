import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const H1 = styled.h1`
    font: 18px Helvetica Neue, Helvetica, Arial, "Lucida Grande", sans-serif;
    font-weight: 500;
    margin-bottom: 10px;
`;

const A = styled.a`
    color: #FF001F;
    text-decoration: none;

    :hover {
        color: #fff;
        background-color: #FF001F;
    }
`;

const Title = ({ children }) => (
    <H1>
        <A href="#">{children}</A>
    </H1>
);

Title.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Title;
