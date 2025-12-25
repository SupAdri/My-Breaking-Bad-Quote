import { create } from 'zustand'
import { type User, type NewUser, type Credencials, useUserService } from '@/services/userService'
import type { Quote } from '@/services/quoteService'
import {persist} from 'zustand/middleware'

type UserStore = {
    user: Omit<User, "password"> | null,
    isAuthenticate: boolean,
    loading: boolean
    signUp: (newUser: NewUser, quote: Quote) => void
    login: (credencials: Credencials) => void
    loginOut: () => void
}

export const useUser = create<UserStore>()(persist((set) => ({
    user: null,
    isAuthenticate: false,
    loading: false,
    signUp: async (newUser, quote) => {
        console.log('comenzo')
        set(() => ({
            loading: true
        }))
        newUser.quote = quote
        console.log(quote)
        const user = await useUserService.signUp(newUser)
        set(() => ({
            user: user,
            loading: false,
            isAuthenticate: true
        }))
        if (user != null) open('/', '_parent')
    },
    login: async (credencials) => {
        set(() => ({
            user: null,
            isAuthenticate: false,
            loading: true,
        }))
        const user = await useUserService.login(credencials)
        set(() => ({
            user: user,
            isAuthenticate: true,
            loading: false,
        }))
        if (user != null) open('/', '_parent')
    },
    loginOut: () => set(() => ({ user: null, isAuthenticate: false }))
}),{
    name:'user'
}))



type CreateUser = {
    user: NewUser | null,
    loading: boolean
    setUser: (user: NewUser) => void
    deleteUser: () => void
}

export const useCreateUser = create<CreateUser>((set) => ({
    user: null,
    loading: false,
    deleteUser: () => set(() => ({ user: null })),
    setUser: async (user) => {
        set(() => ({
            loading: true
        }))
        const comprobate = await useUserService.comprobateUser(user)
        if (comprobate) {
            const newUser = {
                name: user.name,
                username: user.username,
                isAdmin: user.isAdmin ? user.isAdmin : false,
                password: user.password,
                quote: user.quote
            }
            set(() => ({
                user: newUser,
                loading: false
            }))
        } else {
            alert("El usuario ya existe.")
            set(() => ({
                loading: false
            }))
        }
    },
}))