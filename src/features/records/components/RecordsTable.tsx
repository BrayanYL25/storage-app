import { Badge } from '@/components/Badge'
import { DeleteIcon, EditIcon } from '@/components/Icons'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow
} from '@/components/Table'
import { dialog, EdittedRecord, Record, TypeRecord } from 'src/types'
import { useState } from 'react'
import DeleteRecordDialog from './DeleteRecordDialog'
import EditDialogRecord from './EditDialogRecord'

export function RecordsTable({
  data,
  isLoading,
  hasError,
  errorMessage,
  title,
  type
}: {
  data: Record[] | undefined
  hasError: boolean
  errorMessage: string | null
  isLoading: boolean
  title: string
  type: TypeRecord
}) {
  const [deleteDialogState, setDeleteDialogState] = useState<dialog>({
    id: null,
    isOpen: false
  })
  const [editDialogState, setEditDialogState] = useState<EdittedRecord>({
    open: false,
    recordId: -1,
    productId: -1,
    unitId: -1,
    productName: '',
    quantity: -1,
    date: ''
  })

  const handleEdit = (item: Record) => {
    setEditDialogState({
      open: true,
      recordId: item.recordId,
      productId: item.productId,
      unitId: item.unitId,
      productName: item.productName,
      quantity: item.quantity,
      date: item.date
    })
  }
  return (
    <>
      {deleteDialogState.isOpen && (
        <DeleteRecordDialog
          id={deleteDialogState.id}
          type={type}
          set={setDeleteDialogState}
        />
      )}
      {editDialogState.open && (
        <EditDialogRecord
          setClose={setEditDialogState}
          type={type}
          recordId={editDialogState.recordId}
          productId={editDialogState.productId}
          unitId={editDialogState.unitId}
          productName={editDialogState.productName}
          recordQuantity={editDialogState.quantity}
          recordDate={editDialogState.date}
        />
      )}
      <section className="p-6 border-[1px] border-light-gray rounded-xl my-8">
        <div>
          <h3 className="font-bold text-lg text-deep-blue">{title}</h3>
        </div>
        {isLoading && (
          <p className="font-bold text-lg text-deep-blue text-center">
            Cargando
          </p>
        )}
        {hasError && (
          <p className="font-bold text-lg text-deep-blue text-center">
            {errorMessage}
          </p>
        )}
        {data && (
          <TableRoot className="mt-8">
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeaderCell>#</TableHeaderCell>
                  <TableHeaderCell>Producto</TableHeaderCell>
                  <TableHeaderCell>Cantidad</TableHeaderCell>
                  <TableHeaderCell>Tipo</TableHeaderCell>
                  <TableHeaderCell>Unidad</TableHeaderCell>
                  <TableHeaderCell>Correo</TableHeaderCell>
                  <TableHeaderCell className="text-right">
                    Fecha
                  </TableHeaderCell>
                  <TableHeaderCell className="text-center">
                    Acciones
                  </TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item, index) => (
                  <TableRow key={item.recordId}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.productName}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>
                      <Badge
                        variant={item.type === 'SALIDA' ? 'error' : 'success'}
                      >
                        {item.type}
                      </Badge>
                    </TableCell>
                    <TableCell>{item.unit}</TableCell>
                    <TableCell>
                      <Badge variant="default">{item.email}</Badge>
                    </TableCell>
                    <TableCell className="text-right font-semibold">
                      {item.date}
                    </TableCell>
                    <TableCell className="flex justify-center gap-4">
                      <button
                        type="button"
                        aria-label="Editar Registro"
                        onClick={() => handleEdit(item)}
                      >
                        <EditIcon />
                      </button>
                      <button
                        type="button"
                        aria-label="Borrar registro"
                        onClick={() =>
                          setDeleteDialogState({
                            id: item.recordId,
                            isOpen: true
                          })
                        }
                      >
                        <DeleteIcon />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableRoot>
        )}
      </section>
    </>
  )
}
