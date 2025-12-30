import { useAdminService } from "@/services/adminServices";
import type { User } from "@/services/userService";
import { create } from "zustand";

type AdminStore = {
    users: [User] | null
    loading: boolean
    editUser: (user: Partial<User>, token: string) => void
    createUser: (user: Partial<User>, token: string) => void
    getUsers: (token: string) => void
    deleteUsers: (user: Partial<User>, token: string) => void
}

export const useAdmin = create<AdminStore>((set) => ({
    users: null,
    loading: false,
    editUser: async (user,token) => {
        set(() => ({
            loading: true
        }))
        const res = await useAdminService.editUser(user, token)
        alert(res)
        set(() => ({
            loading: false
        }))
    },
    createUser: async (user, token) => {
        set(() => ({
            loading: true
        }))
        const res = await useAdminService.createUser(user, token)
        alert(res)
        set(() => ({
            loading: false
        }))
    },
    getUsers: async (token) => {
        set(() => ({
            loading: true
        }))
        const users = await useAdminService.getUsers(token)
        set(() => ({
            users: users,
            loading: false
        }))
    },
    deleteUsers: async (user, token) => {
        set(() => ({
            loading: true
        }))
        const res = await useAdminService.deleteUser(user, token)
        alert(res)
        set(() => ({
            loading: false
        }))
        open('/dashboard/admin', '_parent')
    },
}))