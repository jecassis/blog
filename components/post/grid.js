import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Grid = ({ children }) => (
    <div className="row">
        {children}
        <style jsx>
            {`
.row {
    display: flex;
}
            `}
        </style>
    </div>
);

Grid.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Grid;


const Column = ({ children, id, width, height }) => (
    <div className={classNames('column', { [`${id}`]: id })}>
        {children}
        <style jsx>
            {`
.column {
    flex: ${id ? `calc(${width}/${height})` : '50%'};
    padding: 5px;
}

@media (max-width: 500px) {
    .column {
        width: 100%;
    }
}
            `}
        </style>
    </div>
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
