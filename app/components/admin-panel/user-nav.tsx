'use client'

import Link from 'next/link'
import { LogOut, User, LayoutGrid } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useAuth } from '@/hooks/use-auth'

export function UserNav() {
  const { user, logout } = useAuth()

  const initials = user ? `${user.firstname[0]}${user.lastname[0]}`.toUpperCase() : '??'

  const fullName = user ? `${user.firstname} ${user.lastname}` : 'Guest'

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className='flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition'>
          {/* Avatar */}
          <Avatar className='h-9 w-9'>
            <AvatarImage src='' alt={fullName} />
            <AvatarFallback className='bg-yellow-400 text-black text-xs font-semibold'>{initials}</AvatarFallback>
          </Avatar>

          {/* Name + Email */}
          <div className='flex flex-col leading-tight'>
            <p className='text-sm font-medium text-foreground'>{fullName}</p>
            <p className='text-xs text-zinc-400'>{user?.email ?? 'No email'}</p>
          </div>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='w-56 mb-2' align='start'>
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href='/dashboard' className='flex items-center'>
              <LayoutGrid className='w-4 h-4 mr-2' />
              Dashboard
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href='/account' className='flex items-center'>
              <User className='w-4 h-4 mr-2' />
              Account
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={logout} className='text-red-500 focus:text-red-500'>
          <LogOut className='w-4 h-4 mr-2' />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
