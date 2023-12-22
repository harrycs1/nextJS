// export async function POST() {
//     const res = await fetch('https://news-api-ndji.onrender.com/api/articles/:article_id/comments', {
//         method: POST,
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             "username" : "rogersop",
//             "body" : "Hello, I am a comment!"
//         }),
//     })

//     const data = await res.json()

//     return Response.json(data)
// }

export async function GET(Request) {
    return new Response("This is a new API route")
}