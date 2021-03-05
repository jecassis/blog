import ms from 'ms';
import requestIp from 'request-ip';

// Seen IPs in the last hour.
let seen = {};

// Reset blacklist every hour.
setInterval(() => {
    seen = {};
}, ms('1h'));

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const verify = (req, _res) => {
    // Ignore limits during development.
    if (process.env.NODE_ENV === 'development') {
        return true;
    }

    const clientIp = requestIp.getClientIp(req);
    seen[clientIp] = seen[clientIp] || 0;
    if (seen[clientIp] > 10) {
        return false;
    }
    seen[clientIp] += 1;
    return true;
};

export default verify;
