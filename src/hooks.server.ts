import type { Handle } from "@sveltejs/kit";

export const handle = (async ({ resolve, event }) => {
    const response = await resolve(event);
    response.headers.set("Access-Control-Allow-Origin", "*")
    return response
}) satisfies Handle;
