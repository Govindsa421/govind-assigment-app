'use client'

import React from 'react'

import { Provider } from 'react-redux'
import { store } from '../../redux/store'

type ProvidersProps = {
  children: React.ReactNode
}

function AuthInitializer({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

export const Providers = ({ children }: ProvidersProps) => {
  console.log('redux render')
  return (
    <Provider store={store}>
      <AuthInitializer>{children}</AuthInitializer>
    </Provider>
  )
}
