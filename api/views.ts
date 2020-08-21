import { NextApiRequest, NextApiResponse } from 'next';
import verify from '@/lib/verify';
import { reset, increment } from '@/lib/update-views';

type Data = {
    total: number;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data | string>) => {
    const orig = req.headers.origin;
    if (/https:\/\/oops(.*\.)?(?:now\.sh|vercel\.com)/.test(orig)) {
        res.setHeader('Access-Control-Allow-Origin', orig);
        res.setHeader('Access-Control-Allow-Methods', 'POST');
    }

    // Ensure no duplicate voting.
    verify(req, res);

    const {
        query: { id, rst },
    } = req;

    if (!id) {
        res.status(400).send('Missing `id` parameter with blog post id');
    }

    if (rst && req.method === 'POST') {
        const count = parseInt(rst as string, 10);
        if (Number.isInteger(count) && Math.sign(count) >= 0) {
            const { snapshot } = await reset(id as string, count);
            res.status(200).json({ total: snapshot.val() });
        }
        res.status(400).send('`rst` parameter should be positive integer');
    } else if (req.method === 'POST') {
        const { snapshot } = await increment(id as string);
        res.status(200).json({ total: snapshot.val() });
    }
    res.status(400).send('Bad request');
};
