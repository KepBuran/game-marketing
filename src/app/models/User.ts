type UserRole = 'user' | 'marketer'

export interface User {
    id: string
    name: string
    image: string
    surname: string
    age: number
    role: UserRole
}