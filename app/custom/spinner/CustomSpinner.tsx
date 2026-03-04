import { LoaderIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Spinner({ className, ...props }: React.ComponentProps<'svg'>) {
  return <LoaderIcon role='status' aria-label='Loading' className={cn('size-8 animate-spin', className)} {...props} />
}

export default function SpinnerSmall({ className, ...props }: React.ComponentProps<'svg'>) {
  return <LoaderIcon role='status' aria-label='Loading' className={cn('size-4 animate-spin', className)} {...props} />
}

export function CustomSpinner() {
  return (
    <div className='flex items-center justify-center  gap-4'>
      <Spinner />
    </div>
  )
}
