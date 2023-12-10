import { User } from "../models/User"

const user: User = {
  id: 'user_id',
  name: 'Stepan',
 image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alamy.com%2Fstock-photo%2Fstepan-bandera.html&psig=AOvVaw1TPncsNzj9YLEYFQb-0j4N&ust=1702296456381000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCNirxc7qhIMDFQAAAAAdAAAAABAE',
  surname: 'Bond',
  age: 48
  
}

const getUsers = () => {
  return [user]
}

const loadUsers = async (parameters: string) => {
    const domain: string = ""
    let url: string = domain+parameters
    console.log(url)
    let response = await fetch(url)

    if(!response.ok) return await response.json()

    let objectResponse = await response.json()
    return objectResponse 
}

export {getUsers,loadUsers}