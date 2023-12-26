import { User } from "../models/User"

const user: User = {
  id: 'user_id',
  name: 'Stepan',
 image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alamy.com%2Fstock-photo%2Fstepan-bandera.html&psig=AOvVaw1TPncsNzj9YLEYFQb-0j4N&ust=1702296456381000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCNirxc7qhIMDFQAAAAAdAAAAABAE',
  surname: 'Bond',
  age: 48,
  role: 'marketer'
}

const login = (username: string, password: string): {user: User | null, error?: string} => {
  return {user}  
}

const signIn = (username: string, password: string): {user: User | null, error?: string} => {
  return {user}
}

const getUsers = () => {
  return [user]
}

const loadUsers = async (parameters: string) => {
  
}

export {getUsers,loadUsers,login,signIn}