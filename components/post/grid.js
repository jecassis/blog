import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Row = styled.div`
    display: flex;
`;

const Grid = ({ children }) => (
    <Row>
        {children}
    </Row>
);

Grid.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Grid;


const Col = styled.div`
    flex: ${(props) => (props.id ? `calc(${props.width}/${props.height})` : '50%')};
    padding: 5px;

    @media (max-width: 500px) {
        width: 100%;
    }
`;

const Column = ({ children, id, width, height }) => (
    <Col id={id} width={width} height={height}>
        {children}
    </Col>
);

Column.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
};

Column.defaultProps = {
    id: '',
    width: '',
    height: '',
};

export { Column };
