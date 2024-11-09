import { EXPENSES_ENPOINTS } from '@/services/endpoints'

export default async function getReport({
  month,
  year
}: {
  month: number
  year: number
}) {
  try {
    const response = await fetch(
      `${EXPENSES_ENPOINTS.REPORT}?month=${month}&year=${year}`,
      {
        credentials: 'include'
      }
    )

    if (!response.ok) {
      throw new Error('Error: Cannot get report')
    }

    const blob = await response.blob()

    const filename = `Reporte_${month}_${year}.xlsx`

    const url = URL.createObjectURL(blob)

    const enlaceDescarga = document.createElement('a')
    enlaceDescarga.href = url
    enlaceDescarga.download = filename
    document.body.appendChild(enlaceDescarga)
    enlaceDescarga.click()
    document.body.removeChild(enlaceDescarga)

    URL.revokeObjectURL(url)
  } catch (e) {
    console.error(e)
  }
}
