import type { User } from "./userService"

//const pathURL = 'http://localhost:3000/api'
const pathURL = 'https://my-breaking-bad-quote-back.vercel.app/api'

type AdminService = {
    createUser: (user: Partial<User>, token: string) => Promise<string>
    getUsers: (token: string) => Promise<[User] | null>
    editUser: (user: Partial<User>, token: string) => Promise<string>
    deleteUser: (user: Partial<User>, token: string) => Promise<string | null>
}

export const useAdminService: AdminService = {

    createUser: async (user, token) => {
        const res = await fetch(pathURL + '/admin/user/create', {
            headers: { "Authorization": token, 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(user)
        })
        const error: Error = await res.json()
        if (!res.ok) {
            open('/', '_parent')
        } else {
            open('/dashboard/admin', '_parent')
        }
        return error.message
    },

    getUsers: async (token) => {
        const res = await fetch(pathURL + '/admin/users', { headers: { "Authorization": token } })

        if (res.ok) {
            const users: [User] = await res.json()
            return users
        } else {
            const error: Error = await res.json()
            alert(error.message)
            open('/', '_parent')
            return null
        }
    },

    editUser: async (user, token) => {
        const res = await fetch(pathURL + '/admin/user/edit', {
            headers: { "Authorization": token, 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(user)
        })
        const error: Error = await res.json()
        if (!res.ok) {
            open('/', '_parent')
        } else {
            open('/dashboard/admin', '_parent')
        }
        return error.message
    },

    deleteUser: async (user, token) => {
        const res = await fetch(pathURL + '/admin/user/delete', {
            headers: { "Authorization": token, 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(user)
        })
        const error: Error = await res.json()

        if (res.ok) {
            return error.message
        } else {
            alert(error.message)
            open('/', '_parent')
            return null
        }
    }

}