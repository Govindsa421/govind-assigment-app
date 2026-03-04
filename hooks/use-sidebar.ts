'use client'

import {
  selectOpenState,
  toggleOpen,
  setIsOpen,
  setIsHover,
  setSettings,
  selectSidebar,
} from '../redux/slice/sidebarSlice'
import { useAppDispatch, useAppSelector } from './redux'

export function useSidebar() {
  const dispatch = useAppDispatch()
  const sidebar = useAppSelector(selectSidebar)
  const isOpenState = useAppSelector(selectOpenState)

  return {
    //state

    isOpen: sidebar.isOpen,
    isHover: sidebar.isHover,
    settings: sidebar.settings,

    // actions

    toggleOpen: () => dispatch(toggleOpen()),
    setIsOpen: (isOpen: boolean) => dispatch(setIsOpen(isOpen)),
    setIsHover: (ishover: boolean) => dispatch(setIsHover(ishover)),
    setSettings: (settings: Partial<typeof sidebar.settings>) => dispatch(setSettings(settings)),

    //computed

    getOpenState: () => isOpenState,
  }
}
