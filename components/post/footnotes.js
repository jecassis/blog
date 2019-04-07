import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import P from './paragraph';

const Foot = styled.div`
    ::before {
        width: 200px;
        content: ' ';
        margin: auto;
        border-top: 1px solid #ccc;
        padding-top: 40px;
        display: block;
        margin-top: 40px;
    }
`;

export const FootNotes = ({ children }) => (
    <Foot>
        {children}
    </Foot>
);

FootNotes.propTypes = {
    children: PropTypes.node.isRequired,
};

const RefA = styled.a`
    top: -5px;
    font-size: 10px;
    position: relative;
    text-decoration: none;
`;

export const Ref = ({ id }) => (
    <RefA href={`#f${id}`} id={`s${id}`}>[{id}]</RefA>
);

Ref.propTypes = {
    id: PropTypes.string.isRequired,
};


const NoteA = styled.a`
    text-decoration: none;
`;

export const Note = ({ id, children }) => (
    <P>
        {id}.
        {' '}
        <NoteA href={`#s${id}`} id={`f${id}`}>^</NoteA>
        {' '}
        {children}
    </P>
);

Note.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
