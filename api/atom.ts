import { NextApiRequest, NextApiResponse } from 'next';
import { BASE_URI, INDEX_TITLE, SUBTITLE, AUTHOR_NAME, AUTHOR_EMAIL } from '../lib/globals';
import { getSortedPostsData as posts } from '../lib/posts';

const max = 10; // Maximum returned posts

const basePropertyOf = (object: any) => (key: string) => (object == null ? undefined : object[key]);

const htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
};

const escapes = (string: string) => string.replace(/[&<>"']/g, basePropertyOf(htmlEscapes));

const HOST_URL = `https://${BASE_URI}/`;

// prettier-ignore
const atom = () => `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${INDEX_TITLE}</title>
  <subtitle>${SUBTITLE}</subtitle>
  <link href="${HOST_URL}atom" rel="self" type="application/atom+xml"/>
  <link href="${HOST_URL}"/>
  <updated>${posts().length > 0 ? posts()[0].date : 'Unknown'}</updated>
  <id>${HOST_URL}</id>
  <author>
    <name>${AUTHOR_NAME}</name>
    <email>${AUTHOR_EMAIL}</email>
  </author>
${posts().slice(0, max).map(({ id, date, title, summary }: { id: string; date: string; title: string; summary: string }) => `  <entry>
    <id>${id}</id>
    <title>${escapes(title)}</title>
    <link href="${HOST_URL}post/${id}"/>
    <updated>${date || 'Unknown'}</updated>
    <summary>${escapes(summary)}</summary>
  </entry>`).join('\n')}
</feed>
`;

export default async (_req: NextApiRequest, res: NextApiResponse<string>) => {
    const body = atom();
    res.setHeader('Content-Type', 'application/atom+xml');
    res.setHeader('Content-Length', Buffer.byteLength(body));
    res.end(body);
};
