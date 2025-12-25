import type { Quote } from '@/services/quoteService'

const pathURL = 'http://localhost:3000/api'

export type Credencials = {
    username: string
    password: string
}

export type User = {
    token: string,
    username: string,
    name: string,
    isAdmin: boolean,
    password: string
    quote: Quote
}

export type NewUser = Partial<Omit<User, "token">> & {
    confirmPassword?: string
}

type Error = {
    message: string
}

type UserService = {
    comprobateUser: (user: NewUser) => Promise<boolean>
    login: (credencials: Credencials) => Promise<User | null>
    signUp: (user:NewUser) => Promise<User | null>
}

export const useUserService: UserService = {

    comprobateUser: async (user: NewUser) => {
        const res = await fetch(pathURL + '/user/existe/' + user.username)
        const data = await res.json()
        return data.comprobate
    },

    login: async (credencials) => {
        const res = await fetch(pathURL + '/user/', { headers: { 'Content-Type': 'application/json' }, method: 'POST', body: JSON.stringify(credencials) })

        if (res.ok) {
            const data: User = await res.json()
            return data
        } else {
            const error: Error = await res.json()
            alert(error.message)
            return null
        }

    },

    signUp: async (user) => {
        const res = await fetch(pathURL + '/user/create', { headers: { 'Content-Type': 'application/json' }, method: 'POST', body: JSON.stringify(user) })

        if (res.ok) {
            const data: User = await res.json()
            return data
        } else {
            const error: Error = await res.json()
            alert(error.message)
            return null
        }
    },
}