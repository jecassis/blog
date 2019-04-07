import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import format from 'comma-number';

const MetaDiv = styled.div`
    margin-bottom: 20px;
    color: #777;

    .highlight {
        animation-name: highlight;
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }

    @keyframes highlight {
        from { background-color: yellow; }
        to { background-color: #fff; }
    }
`;

export default class Meta extends Component {
    static propTypes = {
        views: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            highlight: false,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.views !== nextProps.views) {
            if (this.raf) return;
            if (this.state.highlight) {
                // reset the animation
                this.setState({ highlight: false }, () => {
                    this.raf = requestAnimationFrame(() => {
                        this.raf = null;
                        this.setState({ highlight: true });
                    });
                });
            } else {
                this.setState({ highlight: true });
            }
        }
    }

    render() {
        const { date, views } = this.props;
        const { highlight } = this.state;
        return (
            <MetaDiv>
                {date}
                {' '}
                –
                {' '}
                {' '}
                {
                    <span className={highlight ? 'highlight' : undefined}>
                        {format(views)}
                        {' '}
                        {views === 1 ? 'view' : 'views' }
                    </span>
                }
            </MetaDiv>
        );
    }
}
