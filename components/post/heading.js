import React from 'react';
import PropTypes from 'prop-types';

const H = ({ id, level, fontSize, children }) => (
    <div>
        {
            React.createElement(`h${level}`,
                { style: { fontWeight: 500, fontSize } },
                <span>
                    <a href={`#${id}`} id={id}>#</a>
                </span>,
                children)
        }

        <style jsx>
            {`
div {
    margin: 25px 0;
    font-family: Helvetica Neue, Helvetica, Arial, "Lucida Grande", sans-serif;
}

span {
    position: absolute;
    margin-left: -15px;
    width: 15px;
}

a {
    visibility: hidden;
}

div:hover a, span:hover a {
    visibility: visible;
}
            `}
        </style>
    </div>
);

H.propTypes = {
    id: PropTypes.string.isRequired,
    level: PropTypes.number,
    fontSize: PropTypes.number,
    children: PropTypes.node.isRequired,
};

H.defaultProps = {
    level: 2,
    fontSize: 16,
};

const H2 = H;
const H3 = (props) => H({ ...props, level: 3, fontSize: 14 });

export default H2;
export { H2, H3 };
