import React from 'react';
import PropTypes from 'prop-types';
import P from './paragraph';

export const FootNotes = ({ children }) => (
    <div>
        {children}
        <style jsx>
            {`
div::before {
    width: 200px;
    content: ' ';
    margin: auto;
    border-top: 1px solid #ccc;
    padding-top: 40px;
    display: block;
    margin-top: 40px;
}
            `}
        </style>
    </div>
);

FootNotes.propTypes = {
    children: PropTypes.node.isRequired,
};


export const Ref = ({ id }) => (
    <a href={`#f${id}`} id={`s${id}`}>
        [{id}]
        <style jsx>
            {`
a {
    top: -5px;
    font-size: 10px;
    position: relative;
    text-decoration: none;
}
            `}
        </style>
    </a>
);

Ref.propTypes = {
    id: PropTypes.string.isRequired,
};


export const Note = ({ id, children }) => (
    <P>
        {id}.
        {' '}
        <a href={`#s${id}`} id={`f${id}`}>^</a>
        {' '}
        {children}
        <style jsx>
            {`
a {
    text-decoration: none;
}
            `}
        </style>
    </P>
);

Note.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
