export default async function getData() {
    const res =  await fetch('https://exercisedb.p.rapidapi.com/exercises?limit=10', {
        headers: {
            'X-RapidAPI-Key': '64a5032ec7msh6a0da25c8e7525fp13c541jsn442f68ed88d6',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}