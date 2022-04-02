import config from './config/index.js';
import Koa from 'koa';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import sequelize from './db/index.js';

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(json());

app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = err.statusCode || err.status || 500;
        ctx.body = { code: err.statusCode, message: err.message };
        ctx.app.emit('error', err, ctx);
    }
});
sequelize
    .authenticate()
    .then(() =>
        app.listen(config.port, () => {
            console.log(`Server is running on port ${config.port}`);
        })
    )
    .catch((err) => console.error('Unable to connect to the database: ', err));
