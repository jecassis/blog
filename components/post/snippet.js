import React from 'react';
import PropTypes from 'prop-types';

const Snippet = ({ children }) => (
    <pre>
        <code>{children}</code>
        <style jsx>
            {`
pre {
    line-height: 20px;
    margin-bottom: 20px;
    font-size: 12px;
}

code {
    color: #999;
}
            `}
        </style>
    </pre>
);

Snippet.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Snippet;
