import {
  Settings,
  LayoutGrid,
  LucideIcon,
  ClipboardCheck,
  FileChartColumnIncreasing,
  CalendarMinus2,
  Bell,
  Info,
} from 'lucide-react'

type Submenu = {
  href: string
  label: string
  active?: boolean
}

type Menu = {
  href: string
  label: string
  active?: boolean
  icon: LucideIcon
  submenus?: Submenu[]
}

type Group = {
  groupLabel: string
  menus: Menu[]
}

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: '',
      menus: [
        {
          href: '/dashboard',
          label: 'Dashboard',
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    { groupLabel: '', menus: [{ href: '/projects', label: 'Projects', icon: ClipboardCheck, submenus: [] }] },
    { groupLabel: '', menus: [{ href: '/scans', label: 'Scans', icon: FileChartColumnIncreasing, submenus: [] }] },

    {
      groupLabel: '',
      menus: [
        {
          href: '/schedule',
          label: 'Schedule',
          icon: CalendarMinus2,
        },
      ],
    },

    {
      groupLabel: '',
      menus: [
        {
          href: '/notification',
          label: 'Notifications',
          icon: Bell,
        },
      ],
    },

    {
      groupLabel: '',
      menus: [
        {
          href: '/settings',
          label: 'Settings',
          icon: Settings,
        },
      ],
    },
    {
      groupLabel: '',
      menus: [
        {
          href: '/support',
          label: 'Support',
          icon: Info,
        },
      ],
    },
  ]
}
