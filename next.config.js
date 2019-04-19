module.exports = {
    target: 'serverless',
};

// const webpack = require('webpack');

// module.exports = {
//     target: 'serverless',
//     webpack: (config) => {
//         config.plugins.push(
//             new webpack.IgnorePlugin({
//                 resourceRegExp: /^\.\/iconv-loader$/,
//                 contextRegExp: /lib$/,
//             }),
//         );

//         return config;
//     },
// };

// const withAssetRelocator = (nextConfig = {}) => Object.assign({}, nextConfig, {
//     webpack(config, options) {
//         const { isServer } = options;

//         if (isServer) {
//             // eslint-disable-next-line no-param-reassign
//             config.node = Object.assign({}, config.node, {
//                 __dirname: false,
//                 __filename: false,
//             });

//             config.module.rules.unshift({
//                 test: /\.(m?js|node)$/,
//                 parser: { amd: false },
//                 use: {
//                     loader: '@zeit/webpack-asset-relocator-loader',
//                     options: {
//                         outputAssetBase: 'assets',
//                         existingAssetNames: [],
//                         wrapperCompatibility: true,
//                         escapeNonAnalyzableRequires: true,
//                     },
//                 },
//             });
//         }

//         if (typeof nextConfig.webpack === 'function') {
//             return nextConfig.webpack(config, options);
//         }
//         return config;
//     },
// });

// module.exports = withAssetRelocator({
//     target: 'serverless',
//     webpack: (config) => {
//         config.plugins.push(
//             new webpack.IgnorePlugin({
//                 resourceRegExp: /^\.\/iconv-loader$/,
//                 contextRegExp: /lib$/,
//             }),
//         );

//         return config;
//     },
// });
