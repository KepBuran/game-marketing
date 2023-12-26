type UserRole = 'user' | 'marketer'
type Sex = 'male' | 'female'

export interface User {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    registration_date: Date;
    age: number;
    sex: Sex;
    role: UserRole
}