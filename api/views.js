/* eslint-disable no-else-return */
import verify from '../lib/verify';
import { reset, increment } from '../lib/update-views';

export default async (req, res) => {
    const orig = req.headers.origin;
    if (/https:\/\/oops(.*\.)?(?:now\.sh|vercel\.app)/.test(orig)) {
        res.setHeader('Access-Control-Allow-Origin', orig);
        res.setHeader('Access-Control-Allow-Methods', 'POST');
    }

    // Ensure no duplicate voting.
    if (!verify(req, res)) {
        return res.status(429).send('Too many views per IP');
    }

    const {
        query: { id, rst },
    } = req;

    if (!id) {
        return res.status(400).send('Missing `id` parameter with blog post id');
    }

    if (rst && req.method === 'POST') {
        const count = parseInt(rst, 10);
        if (Number.isInteger(count) && Math.sign(count) >= 0) {
            const { snapshot } = await reset(id, count);
            return res.status(200).json({ total: snapshot.val() });
        }
        return res.status(400).send('`rst` parameter should be positive integer');
    } else if (req.method === 'POST') {
        const { snapshot } = await increment(id);
        return res.status(200).json({ total: snapshot.val() });
    }
    return res.status(400).send('Bad request');
};
