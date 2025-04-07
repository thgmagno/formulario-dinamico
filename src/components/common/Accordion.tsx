'use client'

import {
  Accordion as AccordionCN,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Table } from './Table'

interface Props {
  data: {
    key: string
    label: string
    data: Record<string, string | number>[]
  }[]
}

export function Accordion({ data }: Props) {
  return (
    <AccordionCN type="multiple" className="my-6 w-full">
      {data.map((dt) => (
        <AccordionItem value={dt.key}>
          <AccordionTrigger>{dt.label}</AccordionTrigger>
          <AccordionContent>
            <Table data={dt.data} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionCN>
  )
}
