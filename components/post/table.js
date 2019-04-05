import React from 'react';
import PropTypes from 'prop-types';

const TABLE = ({ children }) => (
    <table>
        <tbody>
            {children}
            <style jsx>
                {`
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}
                `}
            </style>
        </tbody>
    </table>
);

TABLE.propTypes = {
    children: PropTypes.node.isRequired,
};

export default TABLE;


const TR = ({ children }) => (
    <tr>
        {children}
        <style jsx>
            {`
tr:nth-child(even) {
    background-color: #ddd;
}
            `}
        </style>
    </tr>
);

TR.propTypes = {
    children: PropTypes.node.isRequired,
};

export { TR };


const TH = ({ children }) => (
    <th>
        {children}
        <style jsx>
            {`
th {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
}
            `}
        </style>
    </th>
);

TH.propTypes = {
    children: PropTypes.node.isRequired,
};

export { TH };


const TD = ({ children }) => (
    <td>
        {children}
        <style jsx>
            {`
td {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
}
            `}
        </style>
    </td>
);

TD.propTypes = {
    children: PropTypes.node.isRequired,
};

export { TD };
