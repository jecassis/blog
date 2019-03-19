import React from 'react';
import PropTypes from 'prop-types';

const UL = ({ children }) => (
    <ul>
        {children}
        <style jsx>
            {`
ul {
    margin: 0 0 20px 0;
    padding: 0;
    list-style: inside decimal;
}
            `}
        </style>
    </ul>
);

UL.propTypes = {
    children: PropTypes.node.isRequired,
};

export default UL;


const LI = ({ children }) => (
    <li>
        {children}
        <style jsx>
            {`
li {
    margin-bottom: 5px;
    line-height: 24px;
}
            `}
        </style>
    </li>
);

LI.propTypes = {
    children: PropTypes.node.isRequired,
};

export { LI };
