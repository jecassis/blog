module.exports = {
    target: 'serverless',
    future: {
        webpack5: true,
    },
    async rewrites() {
        return [
            { source: '/pgp', destination: '/api/pgp' },
            { source: '/atom', destination: '/api/atom' },
        ];
    },
};
