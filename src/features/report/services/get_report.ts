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

    // Crea un nombre para el archivo si no viene en los encabezados
    const filename = `Reporte_${month}_${year}.xlsx`

    // Crea una URL de objeto temporal para el Blob
    const url = URL.createObjectURL(blob)

    // Crea un elemento <a> para descargar el archivo
    const enlaceDescarga = document.createElement('a')
    enlaceDescarga.href = url
    enlaceDescarga.download = filename // Nombre del archivo descargado
    document.body.appendChild(enlaceDescarga)
    enlaceDescarga.click() // Activa la descarga
    document.body.removeChild(enlaceDescarga)

    // Libera la URL de objeto
    URL.revokeObjectURL(url)
  } catch (e) {
    console.error(e)
  }
}
