import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('janseva_user')
    return saved ? JSON.parse(saved) : null   // { name, role, token }
  })

  const login = (userData) => {
    localStorage.setItem('janseva_user', JSON.stringify(userData))
    setUser(userData)
  }
  const logout = () => {
    localStorage.removeItem('janseva_user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
