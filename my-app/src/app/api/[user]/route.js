export async function GET(request, { params }) {
    const user = params.user
    return new Response(`Welcome to GYMIE, user: ${user}`)
}