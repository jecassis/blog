import { Component } from 'react';
import PropTypes from 'prop-types';
import db from './db';
import 'isomorphic-fetch';

const withViews = (fn) => (
    class extends Component {
        static async getInitialProps({ pathname }) {
            const id = pathname
                // remove leading `/`
                .substr(1)
                // replace the `/` after the year with a `-`
                .replace(/(\d+)\//, '$1-');

            // fetch views
            const ref = db.ref('views').child(id);
            const views = await ref.once('value');

            // register a view asynchronously
            fetch(`https://-blog-views.now.sh/?id=${encodeURIComponent(id)}`) // eslint-disable-line no-undef
                .catch((err) => console.error('view save error:', err.stack)); // eslint-disable-line no-console

            return {
                postId: id,
                views: views.val(),
            };
        }

        static propTypes = {
            postId: PropTypes.string.isRequired,
        }

        constructor(props) {
            super(props);
            this.state = Object.assign({}, props);
            this.onViews = this.onViews.bind(this);
        }

        componentDidMount() {
            const { postId } = this.props;
            db.ref('views').child(postId).on('value', this.onViews);
        }

        componentWillUnmount() {
            const { postId } = this.props;
            db.ref('views').child(postId).off('value', this.onViews);
        }

        onViews(views) {
            this.setState({ views: views.val() });
        }

        render() {
            return fn(this.state);
        }
    }
);

export default withViews;
