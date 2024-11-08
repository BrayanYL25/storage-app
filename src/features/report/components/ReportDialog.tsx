import { CloseIcon } from '@/components/Icons'
import useReportStore from '../../dashboard/store/useReportStore.ts'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/Tab.tsx'
import DownloadReport from './DownloadReport.tsx'
import Overlay from '@/components/Overlay.tsx'

export default function ReportDialog() {
  const { closeReportDialog } = useReportStore()

  return (
    <Overlay>
      <Tabs
        defaultValue="tab1"
        className="w-1/2 lg:w-1/3 bg-white p-6 rounded-lg"
      >
        <section className="flex items-center justify-between">
          <h3 className="text-deep-blue font-bold text-xl mb-4">
            Generar Reporte
          </h3>

          <button type="button" aria-label="Cerrar" onClick={closeReportDialog}>
            <CloseIcon />
          </button>
        </section>
        <TabsList>
          <TabsTrigger value="tab1">Descargar</TabsTrigger>
          <TabsTrigger value="tab2">Enviar Correo</TabsTrigger>
        </TabsList>
        <div className="ml-2 mt-4">
          <TabsContent
            value="tab1"
            className="space-y-2 text-sm leading-7 text-gray-600 dark:text-gray-500"
          >
            <DownloadReport />
          </TabsContent>
          <TabsContent
            value="tab2"
            className="space-y-2 text-sm leading-7 text-gray-600 dark:text-gray-500"
          >
            <p className="text-xl font-semibold text-deep-blue">
              Funcionalidad de envio por correo en proceso
            </p>
          </TabsContent>
        </div>
      </Tabs>
    </Overlay>
  )
}
