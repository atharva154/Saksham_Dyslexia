export const getUser = () => {
  const userStr = localStorage.getItem('user')
  if (!userStr) return null
  try {
    return JSON.parse(userStr)
  } catch {
    return null
  }
}

export const logout = async () => {
  localStorage.removeItem('user')
  await fetch('http://localhost:3001/api/logout', {
    method: 'POST',
    credentials: 'include'
  })
} 