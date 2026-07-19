import { Table } from '@/components/ui/table';
import { cn } from '@/lib/cn';
import type { ComponentProps } from 'react';

type VocabTableProps = ComponentProps<typeof Table>;

export default function VocabTable({ className, ...props }: VocabTableProps) {
  return <Table className={cn('vocab-table w-full', className)} {...props} />;
}

VocabTable.displayName = 'VocabTable';
