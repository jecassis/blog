import { Component } from 'react';
import PropTypes from 'prop-types';
import 'isomorphic-fetch';
import { VIEWS_URI, DB_URL } from './globals';
// import db from './db';

const dbUrl = `${DB_URL}/views`;

const withViews = (fn) => (
    class extends Component {
        static async getInitialProps({ pathname }) {
            const id = pathname
                .substr(1) // Remove leading '/'
                .replace(/(\d+)\//, '$1-'); // Replace the '/' after the year with a '-'

            // Fetch views
            // const ref = db.ref('views').child(id);
            // const views = await ref.once('value');
            let views = 0;
            fetch(`${dbUrl}/${id}.json`) // eslint-disable-line no-undef
                .then((res) => res.json())
                .then((val) => { views = val; })
                .catch((err) => console.error('Fetch initial error', err)); // eslint-disable-line no-console

            // Register a view asynchronously.
            fetch(`https://${VIEWS_URI}/?id=${encodeURIComponent(id)}`) // eslint-disable-line no-undef
                .catch((err) => console.error('View save error', err)); // eslint-disable-line no-console

            return {
                postId: id,
                views, // views: views.val(),
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
            const { postId } = this.props; // eslint-disable-line no-unused-vars
            // db.ref('views').child(postId).on('value', this.onViews);
            fetch(`${dbUrl}/${postId}.json`) // eslint-disable-line no-undef
                .then((res) => res.json())
                .then((val) => this.onViews(val))
                .catch((err) => console.error('Fetch mount error', err)); // eslint-disable-line no-console
        }

        componentWillUnmount() {
            const { postId } = this.props; // eslint-disable-line no-unused-vars
            // db.ref('views').child(postId).off('value', this.onViews);
            fetch(`${dbUrl}/${postId}.json`) // eslint-disable-line no-undef
                .then((res) => res.json())
                .then((val) => this.onViews(val))
                .catch((err) => console.error('Fetch unmount error', err)); // eslint-disable-line no-console
        }

        onViews(views) {
            // this.setState({ views: views.val() });
            this.setState({ views });
        }

        render() {
            return fn(this.state);
        }
    }
);

export default withViews;
