import { fetchData } from '../../../utils/fetchData.ts'

export const get: APIRoute = async ({ params, request }) => {
  const response = await fetchData(params.id)
  return response
}
