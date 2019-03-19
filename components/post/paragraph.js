import React from 'react';
import PropTypes from 'prop-types';

const P = ({ children }) => (
    <p>
        {children}
        <style jsx>
            {`
p {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 20px;
}
            `}
        </style>
    </p>
);

P.propTypes = {
    children: PropTypes.node.isRequired,
};

export default P;
