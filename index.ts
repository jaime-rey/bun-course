const server = Bun.serve({
    port: 3000,
    fetch(req) {
        return new Response("Hello, world!", {
            headers: { "content-type": "text/plain" },
        });
    },
});