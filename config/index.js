const env = process.env.NODE_ENV || 'default';

import def from './config.default.js';
import dev from './config.dev.js';

const config = {
    dev,
    default: def,
};

export default config[env];
