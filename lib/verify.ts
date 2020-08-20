import { NextApiRequest, NextApiResponse } from 'next';
import ms from 'ms';
import requestIp from 'request-ip';

// Seen IPs in the last hour.
let seen = {};

// Reset blacklist every hour.
setInterval(() => {
    seen = {};
}, ms('1h'));

const verify = (req: NextApiRequest, res: NextApiResponse) => {
    // Ignore limits during development.
    if (process.env.NODE_ENV === 'development') {
        return;
    }

    const clientIp = requestIp.getClientIp(req);
    seen[clientIp] = seen[clientIp] || 0;
    if (seen[clientIp] > 10) {
        res.status(429).send('Too many views per IP');
    }
    seen[clientIp] += 1;
};

export default verify;
