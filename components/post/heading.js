import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const H = styled.div`
    margin: 25px 0;
    font-family: Helvetica Neue, Helvetica, Arial, 'Lucida Grande', sans-serif;

    a {
        visibility: hidden;
    }

    &:hover a {
        visibility: visible;
    }
`;

const Span = styled.span`
    position: absolute;
    margin-left: -15px;
    width: 15px;

    a {
        visibility: hidden;
    }

    &:hover a {
        visibility: visible;
    }
`;

const Heading = ({ id, level, fontSize, children }) => (
    <H>
        {createElement(
            `h${level}`,
            { style: { fontWeight: 500, fontSize } },
            <Span>
                <a href={`#${id}`} id={id}>#</a>
            </Span>,
            children,
        )}
    </H>
);

Heading.propTypes = {
    id: PropTypes.string.isRequired,
    level: PropTypes.number,
    fontSize: PropTypes.number,
    children: PropTypes.node.isRequired,
};

Heading.defaultProps = {
    level: 2,
    fontSize: 16,
};

const H2 = Heading;
const H3 = (props) => Heading({ ...props, level: 3, fontSize: 14 });

export default H2;
export { H2, H3 };
