import { fetchData } from '../../utils/fetchData.ts'

export async function get({ request }) {
  const url = new URL(request.url)
  const params = new URLSearchParams(url.search)
  const id = params.get('id') ?? undefined
  const movieData = await fetchData(id)
  return {
    body: JSON.stringify({
      type: request.method,
      name: 'Astro',
      url: 'https://astro.build/',
      id,
      movieData,
    }),
  }
}

export async function post({ request }) {
  const data = await request.json()
  const { id } = data
  const movieData = await fetchData(id)
  return {
    body: JSON.stringify({
      type: request.method,
      name: 'Astro',
      url: 'https://astro.build/',
      id,
      movieData,
    }),
  }
}
