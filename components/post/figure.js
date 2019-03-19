/* eslint-disable jsx-a11y/media-has-caption, jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';

const Figure = ({ desc, href, children, wide }) => (
    <div className={wide && 'wide'}>
        {href ? <a href={href} target="_blank" rel="noopener noreferrer">{children}</a> : children}
        {desc && (<p>{desc}</p>)}
        <style jsx>
            {`
div {
    text-align: center;
    margin-bottom: 20px;
}

p {
    font-size: 13px;
    color: #999;
    text-align: center;
    font-style: oblique;
    display: block;
}

.wide {
    background: #F2F2F2;
    position: relative;
}

.wide::before {
    width: 10000%;
    content: '';
    left: -1000px;
    height: 100%;
    position: absolute;
    background: #F2F2F2;
    z-index: -1;
}
            `}
        </style>
    </div>
);

Figure.propTypes = {
    desc: PropTypes.string,
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


const Image = ({ width, src }) => (
    <div>
        <img width={width} src={src} />
        <style jsx>{`
      img {
        max-width: 100%;
        margin: 15px 0;
      }
    `}
        </style>
    </div>
);

Image.propTypes = {
    src: PropTypes.node.isRequired,
    width: PropTypes.string.isRequired,
};

const Video = ({ src }) => (
    <div>
        <video autoPlay loop src={src} />
        <style jsx>{`
      video {
        max-width: 100%;
        margin: 15px 0;
      }
    `}
        </style>
    </div>
);

Video.propTypes = {
    src: PropTypes.string.isRequired,
};

export { Image, Video };
