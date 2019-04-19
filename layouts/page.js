import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';
import { BASE_URI, SRC_URL } from '../lib/globals';
import Meta from '../components/meta';

const MainDiv = styled.div`
    padding: 25px 50px;

    @media (max-width: 500px) {
        padding: 25px 15px;
    }
`;

const Logo = styled.div`
    padding-bottom: 50px;

    @media (max-width: 500px) {
        padding-bottom: 20px;
    }
`;

const A = styled.a`
    text-decoration: none;
`;

const Main = ({ children }) => (
    <MainDiv>
        <Logo>
            <Link prefetch href="/"><A>{BASE_URI}</A></Link>
            {' '}
            (<A href={SRC_URL} target="_blank" rel="noopener noreferrer">src</A>)
        </Logo>
        {children}
        <Meta />
    </MainDiv>
);

Main.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Main;
