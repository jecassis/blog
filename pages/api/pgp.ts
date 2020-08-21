import { NextApiRequest, NextApiResponse } from 'next';
import { join } from 'path';
import fs from 'fs';

const gpgKey = fs.readFileSync(join(process.cwd(), 'assets', 'pgp.asc'));

export default async (req: NextApiRequest, res: NextApiResponse<string>) => {
    const body = await gpgKey;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Content-Length', Buffer.byteLength(body));
    res.end(body);
};