import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
`;

const TABLE = ({ children }) => (
    <Table>
        <tbody>
            {children}
        </tbody>
    </Table>
);

TABLE.propTypes = {
    children: PropTypes.node.isRequired,
};

export default TABLE;


const Tr = styled.tr`
    :nth-child(even) {
        background-color: #ddd;
    }
`;

const TR = ({ children }) => (
    <Tr>{children}</Tr>
);

TR.propTypes = {
    children: PropTypes.node.isRequired,
};

export { TR };


const Th = styled.th`
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
`;

const TH = ({ children }) => (
    <Th>{children}</Th>
);

TH.propTypes = {
    children: PropTypes.node.isRequired,
};

export { TH };


const Td = styled.td`
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
`;

const TD = ({ children }) => (
    <Td>{children}</Td>
);

TD.propTypes = {
    children: PropTypes.node.isRequired,
};

export { TD };
