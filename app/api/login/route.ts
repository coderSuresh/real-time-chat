const POST = async (req: Request) => {
    try {
        const username = await req.json();
        return new Response(JSON.stringify({ username: username }), {
            status: 200,
            headers: { 'content-type': 'application/json' },
        })
    }
    catch (err: any) {
        return new Response(JSON.stringify({ error: err.message || err.toString() }), {
            status: 500,
            headers: { 'content-type': 'application/json' },
        })
    }
}
export { POST };