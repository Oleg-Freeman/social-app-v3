const config = require('./config/index.js');
const Koa = require('koa');
const json = require('koa-json');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const db = require('./models/index.js');

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

app.listen(config.port, async () => {
    console.log(`Server is running on port ${config.port}`);

    try {
        await db.sequelize.authenticate();
        console.log('Database connected');
    } catch (err) {
        console.error('Unable to connect to the database: ', err);
    }
});
