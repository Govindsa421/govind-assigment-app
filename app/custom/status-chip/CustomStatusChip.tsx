interface CustomStatusChipProps {
  status: 'Completed' | 'Scheduled' | 'Failed'
}

const statusStyles = {
  Completed: 'bg-green-100 text-green-700',
  Scheduled: 'bg-gray-200 text-gray-600',
  Failed: 'bg-red-100 text-red-700',
}

export function CustomStatusChip({ status }: CustomStatusChipProps) {
  return <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusStyles[status]}`}>{status}</span>
}
