import { User } from "../models/User"
import UserByGame from "../models/UserByGame"

const user: User = {
  id: 'user_id',
  first_name: 'Stepan',
  last_name: 'Bond',
  age: 48,
  role: 'marketer'
}

const url = 'http://localhost:3001/users'

const login = async (username: string, password: string): Promise<{user: User | null, error?: string}> => {
  const body = JSON.stringify({ username, password })
  const user: User | null | {error: string}  = await fetch(`${url}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body,
  }).then(res => res.json()).catch(err => { console.error(err); return null })

  if (!user) {
    return { user: null, error: 'Something went wrong. Please, try again later...' }
  }

  if (user.error) {
    return { user: null, error: user.error }
  }

  return { user }
}

const signIn = async (username: string, password: string): Promise<{user: User | null, error?: string}> => {
  const body = JSON.stringify({ username, password })
  const user: User | null | {error: string}  = await fetch(`${url}/signIn`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body,
  }).then(res => res.json()).catch(err => { console.error(err); return null })

  if (!user) {
    return { user: null, error: 'Something went wrong. Please, try again later...' }
  }

  if (user.error) {
    return { user: null, error: user.error }
  }

  return { user }
}

const getUsers = () => {
  return [user]
}

const loadUsers = async (parameters: string) => {
  
}

const getUsersByGameId = async (userId: string): UserByGame[] => {
  return [{...user, boughtDate: new Date()} as UserByGame]
}

const usersApi = {
  getUsers,
  loadUsers,
  login,
  signIn,
  getUsersByGameId
}

export default usersApi
