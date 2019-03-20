const { posts } = require('../posts');

const max = 10; // Maximum returned posts

module.exports = () => `<?xml version="1.0" encoding="utf-8"?>
    <feed xmlns="http://www.w3.org/2005/Atom">
        <title>Kernel Oops</title>
        <subtitle>Blog</subtitle>
        <link href="https://oops.now.sh/atom" rel="self"/>
        <link href="https://oops.now.sh/"/>
        <updated>${posts[0].date}</updated>
        <id>https://oops.now.sh/</id>
        <author>
            <name>Kernel Oops</name>
            <email>KernelOops@outlook.com</email>
        </author>
        ${posts.slice(0, max).reduce((acc, post) => `${acc}
            <entry>
                <id>${post.id}</id>
                <title>${post.title}</title>
                <link href="https://oops.now.sh/${post.date.match(/\d{4}/)[0]}/${post.id}"/>
                <updated>${post.date}</updated>
            </entry>`, '')}
    </feed>
`;
