import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ by, children }) => (
    <blockquote>
        <p>
            {children}
            <br />
            {by && `– ${by}`}
        </p>
        <style jsx>
            {`
blockquote {
    margin: 30px 0;
    color: #9B9B9B;
    font-style: oblique;
    font-size: 12px;
}

p {
    line-height: 24px;
}
            `}
        </style>
    </blockquote>
);

Quote.propTypes = {
    by: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Quote.defaultProps = {
    by: '',
};

export default Quote;
