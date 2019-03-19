import React from 'react';
import PropTypes from 'prop-types';

const TLDR = ({ children }) => (
    <div className="wrap">
        <b>tl;DR:</b>
        {' '}
        <div className="content">{children}</div>
        <style jsx>
            {`
.wrap {
    margin-bottom: 25px;
    padding: 15px;
    background: #eee;
    line-height: 20px;
}
  
.content {
    display: inline;
    font-style: oblique;
}
            `}
        </style>
    </div>
);

TLDR.propTypes = {
    children: PropTypes.node.isRequired,
};

export default TLDR;
