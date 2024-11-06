import { RECORD_ENDPOINTS } from '@/services/endpoints'

export default async function deleteRecord({ id }: { id: number }) {
  try {
    const response = await fetch(`${RECORD_ENDPOINTS.RECORD}/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    })

    if (!response.ok) {
      console.log(response)
      throw new Error('Error borrando')
    }

    return 'Se borro el registro existosamente'
  } catch (e) {
    console.error(e)
  }
}
