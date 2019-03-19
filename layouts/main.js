import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Meta from '../components/meta';

const Main = ({ children }) => (
    <div className="main">
        <div className="logo">
            <Link prefetch href="/"><a>oops.now.sh</a></Link>
            {' '}
            (<a href="https://github.com/jecassis/blog" target="_blank" rel="noopener noreferrer">src</a>)
        </div>

        {children}

        <Meta />

        <style jsx>
            {`
.main {
    padding: 25px 50px;
}

.logo {
    padding-bottom: 50px;
}

a {
    text-decoration: none;
}

@media (max-width: 500px) {
    .main {
        padding: 25px 15px;
    }

    .logo {
        padding-bottom: 20px;
    }
}
            `}
        </style>
    </div>
);

Main.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Main;
