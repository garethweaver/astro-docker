export async function get({params, request}) {
  return {
    body: JSON.stringify({
      type: request.method,
      name: 'Astro',
      url: 'https://astro.build/',
    }),
  };
}

export async function post({params, request}) {
  return {
    body: JSON.stringify({
      type: request.method,
      name: 'Astro',
      url: 'https://astro.build/',
    }),
  };
}
