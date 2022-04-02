import Koa from 'koa';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';

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

app.listen(5000, () => {
    console.log(`Server is running on port ${5000}`);
});
