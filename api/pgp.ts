import { NextApiRequest, NextApiResponse } from 'next';
import { join } from 'path';
import fs from 'fs';

const gpgKey = fs.readFileSync(join(__dirname, '..', 'public', 'txt', 'pgp.asc'));

export default async (_req: NextApiRequest, res: NextApiResponse<string>) => {
    const body = await gpgKey;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Content-Length', Buffer.byteLength(body));
    res.end(body);
};
