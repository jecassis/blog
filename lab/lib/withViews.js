/* eslint-disable no-console */
import { Component } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';
import { /* VIEWS_URI, */ DB_URL } from '../../lib/globals';
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
            // let views = 0;
            // axios.get(`${dbUrl}/${id}.json`)
            //     .then((res) => { views = res.data; })
            //     .catch((err) => console.error('Fetch initial error', err));

            // // Register a view asynchronously.
            // axios.get(`https://${VIEWS_URI}/?id=${encodeURIComponent(id)}`)
            //     .catch((err) => console.error('View save error', err));

            return {
                postId: id,
                // views, // views: views.val(),
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
            // db.ref('views').child(postId).on('value', this.onViews);
            // axios.get(`${dbUrl}/${postId}.json`)
            //     .then((res) => this.onViews(res.data))
            //     .catch((err) => console.error('Fetch mount error', err));
        }

        // componentWillUnmount() {
        //     const { postId } = this.props;
        //     // db.ref('views').child(postId).off('value', this.onViews);
        //     axios.get(`${dbUrl}/${postId}.json`)
        //         .then((res) => this.onViews(res.data))
        //         .catch((err) => console.error('Fetch unmount error', err));
        // }

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
