import { Badge } from '@/components/Badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow
} from '@/components/Table'
import { Record } from 'src/types'

export function Records({ data }: { data: Record[] | undefined }) {
  return (
    <section className="p-6 border-[1px] border-light-gray rounded-xl my-8">
      <div>
        <h3 className="font-bold text-lg text-deep-blue">Últimas Salidas</h3>
      </div>
      <TableRoot className="mt-8">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Id</TableHeaderCell>
              <TableHeaderCell>Producto</TableHeaderCell>
              <TableHeaderCell>Cantidad</TableHeaderCell>
              <TableHeaderCell>Tipo</TableHeaderCell>
              <TableHeaderCell>Unidad</TableHeaderCell>
              <TableHeaderCell>Correo</TableHeaderCell>
              <TableHeaderCell className="text-right">Fecha</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.product}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>
                  <Badge variant={item.type === 'SALIDA' ? 'error' : 'success'}>
                    {item.type}
                  </Badge>
                </TableCell>
                <TableCell>{item.unit}</TableCell>
                <TableCell>
                  <Badge variant="default">{item.email}</Badge>
                </TableCell>
                <TableCell className="text-right">{item.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableRoot>
    </section>
  )
}
