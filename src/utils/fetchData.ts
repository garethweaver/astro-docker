const fetchMovie = async (id: string) => {
  const response = await fetch("https://swapi-graphql.netlify.app/.netlify/functions/index",
    {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        query: `
          query getFilm ($id:ID!) {
            film(id: $id) {
              title
              releaseDate
              openingCrawl
            }
          }
        `,
        variables: {
          id
        },
      }),
    })
  return await response.json()
}

const fetchAll = async () => {
  const response = await fetch("https://swapi-graphql.netlify.app/.netlify/functions/index",
    {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        query: `
          query getAllFilms {
            allFilms {
              films {
                title
                id
              }
            }
          }
        `,
      }),
    })
  return await response.json()
}


export const fetchData = async (id: string) => {
  return id ? fetchMovie(id) : fetchAll()
}
