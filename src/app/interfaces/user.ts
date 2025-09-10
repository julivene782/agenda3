export interface User {
    id: number,
    firstName: string,
    lastname: string,
    email: string,
    password: string
}
export type NewUser = Omit<User,"id">;