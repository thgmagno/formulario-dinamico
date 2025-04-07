import {
  Table as TableCN,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MoreHorizontal } from 'lucide-react'
import { Button } from '../ui/button'
import { removeItem } from '@/actions/session'

type Item = Record<string, string | number>

type Props = {
  data: Item[]
}

export function Table({ data }: Props) {
  if (data.length === 0) return null

  const colunas = Array.from(
    new Set(
      data.flatMap((obj) =>
        Object.keys(obj).filter((k) => k !== 'key' && k !== 'id'),
      ),
    ),
  )

  return (
    <TableCN>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          {colunas.map((col) => (
            <TableHead key={col} className="text-muted-foreground capitalize">
              {col}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            {colunas.map((col) => (
              <TableCell key={col}>{item[col] ?? '-'}</TableCell>
            ))}
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Ações</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <form action={removeItem}>
                      <button type="submit">Excluir</button>
                    </form>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableCN>
  )
}
