import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type SidebarSettings = {
  disabled: boolean
  isHoverOpen: boolean
}

export type SidebarStore = {
  isOpen: boolean
  isHover: boolean
  settings: SidebarSettings
}

const initialState: SidebarStore = {
  isOpen: true,
  isHover: false,
  settings: {
    disabled: false,
    isHoverOpen: false,
  },
}

function getInitialSidebarStore(): SidebarStore {
  if (typeof window !== 'undefined') {
    const persistedSidebar = localStorage.getItem('sidebar')
    if (persistedSidebar) {
      try {
        return { ...initialState, ...JSON.parse(persistedSidebar) }
      } catch (e) {
        console.error('Error parsing sidebar state:', e)
      }
    }
  }
  return initialState
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: getInitialSidebarStore(),
  reducers: {
    toggleOpen: (state) => {
      state.isOpen = !state.isOpen
    },
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    },
    setIsHover: (state, action: PayloadAction<boolean>) => {
      state.isHover = action.payload
    },
    setSettings: (state, action: PayloadAction<Partial<SidebarSettings>>) => {
      state.settings = { ...state.settings, ...action.payload }
    },
  },
})

export const { toggleOpen, setIsOpen, setIsHover, setSettings } = sidebarSlice.actions

// Selectors
export const selectSidebar = (state: { sidebar: SidebarStore }) => state.sidebar

export const selectIsOpen = (state: { sidebar: SidebarStore }) => state.sidebar.isOpen

export const selectIsHover = (state: { sidebar: SidebarStore }) => state.sidebar.isHover

export const selectSettings = (state: { sidebar: SidebarStore }) => state.sidebar.settings

export const selectOpenState = (state: { sidebar: SidebarStore }) =>
  state.sidebar.isOpen || (state.sidebar.settings.isHoverOpen && state.sidebar.isHover)

export default sidebarSlice.reducer
