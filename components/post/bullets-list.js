import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Ul = styled.ul`
    margin: 0 0 20px 0;
    padding: 0;
    list-style-type: none;
`;

const UL = ({ children }) => (
    <Ul>
        {children}
    </Ul>
);

UL.propTypes = {
    children: PropTypes.node.isRequired,
};

export default UL;


const Li = styled.li`
    margin-bottom: 5px;
    padding-left: 20px;
    line-height: 24px;

    ::before {
        content: '-';
        color: #ABABAB;
        position: absolute;
        margin-left: -20px;
    }
`;

const LI = ({ children }) => (
    <Li>{children}</Li>
);

LI.propTypes = {
    children: PropTypes.node.isRequired,
};

export { LI };
