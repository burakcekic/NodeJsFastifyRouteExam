const fs = require('fs');
const path = require('path');
const routes = require('./routes/route');
//const fastifyStatic = require('fastify-static');
const fastify = require('fastify')(
{
    logger: true,
    trustProxy: true
});

fastify.get("/",async (request,reply) =>{
    const stream = fs.createReadStream('index.html');
    reply.type('text/html').send(stream)
});


routes.forEach((route, index) => {
    fastify.route(route)
});



// LISTENER
const start = async () => {
    try {
        // await fastify.listen(8020, 'localhost'); //on localhost
        await fastify.listen(8080, 'localhost'); //on server
        fastify.swagger;
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
        fastify.log.error(err);
    }
};

start();

