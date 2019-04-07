import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Fig = styled.div`
    text-align: center;
    margin-bottom: 20px;

    ${(props) => props.wide && (css`
    background: #F2F2F2;
    position: relative;

    ::before {
        width: 10000%;
        content: '';
        left: -1000px;
        height: 100%;
        position: absolute;
        background: #F2F2F2;
        z-index: -1;
    }
    `)}
`;

const P = styled.p`
    font-size: 13px;
    color: #999;
    text-align: center;
    font-style: oblique;
    display: block;
`;

const Figure = ({ desc, href, children, wide }) => (
    <Fig wide={wide}>
        {href ? <a href={href} target="_blank" rel="noopener noreferrer">{children}</a> : children}
        {desc && (<P>{desc}</P>)}
    </Fig>
);

Figure.propTypes = {
    desc: PropTypes.node,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    wide: PropTypes.string,
};

Figure.defaultProps = {
    desc: '',
    href: '',
    wide: '',
};

export default Figure;


const Img = styled.img`
    max-width: 100%;
    margin: 15px 0;
`;

const Image = ({ width, src, alt }) => (
    <div>
        <Img width={width} src={src} alt={alt} />
    </div>
);

Image.propTypes = {
    src: PropTypes.node.isRequired,
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.instanceOf(undefined),
    ]),
    alt: PropTypes.string,
};

Image.defaultProps = {
    width: undefined,
    alt: '',
};


const Vid = styled.video`
    max-width: 100%;
    margin: 15px 0;
`;

const Video = ({ src }) => (
    <div>
        <Vid autoPlay loop src={src} />
    </div>
);

Video.propTypes = {
    src: PropTypes.string.isRequired,
};

export { Image, Video };
