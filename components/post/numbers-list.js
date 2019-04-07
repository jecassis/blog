import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Ul = styled.ul`
    margin: 0 0 20px 0;
    padding: 0;
    list-style: inside decimal;
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
    line-height: 24px;
`;

const LI = ({ children }) => (
    <Li>{children}</Li>
);

LI.propTypes = {
    children: PropTypes.node.isRequired,
};

export { LI };
