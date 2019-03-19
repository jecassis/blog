import React from 'react';
import PropTypes from 'prop-types';

const Code = ({ children }) => (
    <code>
        {children}
        <style jsx>
            {`
code {
    color: #666;
    font-family: monospace;
}
            `}
        </style>
    </code>
);

Code.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Code;
