const { BASE_URI, BLOG_TITLE, BLOG_SUBTITLE, AUTHOR_NAME, AUTHOR_EMAIL } = require('./globals');
const { posts } = require('../posts');

const max = 10; // Maximum returned posts

module.exports = () => `<?xml version="1.0" encoding="utf-8"?>
    <feed xmlns="http://www.w3.org/2005/Atom">
        <title>${BLOG_TITLE}</title>
        <subtitle>${BLOG_SUBTITLE}</subtitle>
        <link href="https://${BASE_URI}/atom" rel="self"/>
        <link href="https://${BASE_URI}/"/>
        <updated>${posts[0].date}</updated>
        <id>https://${BASE_URI}/</id>
        <author>
            <name>${AUTHOR_NAME}</name>
            <email>${AUTHOR_EMAIL}</email>
        </author>
        ${posts.slice(0, max).reduce((acc, post) => `${acc}
            <entry>
                <id>${post.id}</id>
                <title>${post.title}</title>
                <link href="https://${BASE_URI}/${post.date.match(/\d{4}/)[0]}/${post.id}"/>
                <updated>${post.date}</updated>
                <summary>${post.summary}</summary>
            </entry>`, '')}
    </feed>
`;
