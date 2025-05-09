const { app } = require('@azure/functions');

app.http('today-friday-func-name', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        return { body: `Nirban Says, ${name}!` };
    }
});
