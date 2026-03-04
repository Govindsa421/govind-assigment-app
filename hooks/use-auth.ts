import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface User {
  firstname: string
  lastname: string
  email: string
}

const USER_STORAGE_KEY = 'user_data'

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  // Load user from localStorage on mount
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem(USER_STORAGE_KEY)
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
    } catch (error) {
      console.error('Failed to load user from localStorage:', error)
      localStorage.removeItem(USER_STORAGE_KEY)
    }
  }, [])

  const signUp = (data: User) => {
    try {
      // Store user data without password for security
      const userData: User = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
      }
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userData))
      setUser(userData)
      return true
    } catch (error) {
      console.error('Failed to save user to localStorage:', error)
      return false
    }
  }

  const logout = () => {
    try {
      localStorage.removeItem(USER_STORAGE_KEY)
      setUser(null)
      router.push('/')
    } catch (error) {
      console.error('Failed to logout:', error)
    }
  }

  const isAuthenticated = !!user

  return { user, signUp, logout, isAuthenticated }
}
