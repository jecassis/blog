import React from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';

const Wrap = styled.div`
    margin: 15px 0;
`;

const withDefault = (props) => (
    Object.assign({}, props, {
        opts: Object.assign({}, props.opts || {}, {
            width: '100%',
        }),
    })
);

export default (props) => (
    <Wrap>
        <YouTube {...withDefault(props)} />
    </Wrap>
);
