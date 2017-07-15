const send = require('koa-send');
const Koa = require('koa');
const Router = require('koa-router');
const userAgent = require('koa-useragent');
const path = require('path')
const swig = require('swig');
const router = new Router();
const app = new Koa();

const templateRoot = path.join(__dirname, "../dist/template/main")

app.use(userAgent);

router.get('/', function(ctx, next){
    ctx.cookies.set("landing", ctx.request.query.landing, {
        httpOnly: false,
    })
    if (!ctx.userAgent.isMobile) {
        let template = swig.compileFile(path.resolve(templateRoot, "auth.html"));
        ctx.body = template({})
    } else {
        let template = swig.compileFile(path.resolve(templateRoot, "auth_phone.html"));
        ctx.body = template({})
    }
});

router.get(/^\/static(?:\/|$)/, async (ctx) => {
     await send(ctx, ctx.path, {
         root: path.join(__dirname, "../dist")
     });
})

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
console.log('listening on port 3000');
