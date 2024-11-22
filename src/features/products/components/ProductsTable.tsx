import { Badge } from '@/components/Badge'
import { EditIcon } from '@/components/Icons'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow
} from '@/components/Table'
import { Product } from 'src/types'

export default function ProductsTable({
  title,
  data
}: {
  title: string
  data: Product[] | undefined
}) {
  return (
    <section className="p-6 border-[1px] border-light-gray rounded-xl my-8">
      <div>
        <h3 className="font-bold text-lg text-deep-blue">{title}</h3>
      </div>
      <TableRoot className="mt-8">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Id</TableHeaderCell>
              <TableHeaderCell>Producto</TableHeaderCell>
              <TableHeaderCell>Cantidad</TableHeaderCell>
              <TableHeaderCell>Tipo</TableHeaderCell>
              <TableHeaderCell>Acciones</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.stock}</TableCell>
                <TableCell>
                  <Badge variant="default">{item.unitName}</Badge>
                </TableCell>
                <TableCell>
                  <button type="button" aria-label="Edit button">
                    <EditIcon />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableRoot>
    </section>
  )
}
