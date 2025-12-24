import { z } from 'zod'

const errors = {
    noInput: 'Please fill in this field',
    minCharacters: (min: number) => `The value must be greater than ${min} characters.`,
    maxCharacters: (max: number) => `The value cannot exceed ${max} characters.`,
    username: 'The username cannot contain spaces'
}

export const loginSchema = z.object({
    username: z.string({ error: errors.noInput }),
    password: z.string({ error: errors.noInput }),
})

export const userSchema = z.object({

    name:
        z.string({ error: errors.noInput })
            .min(5, { error: errors.minCharacters(5) })
            .max(50, { error: errors.maxCharacters(50) })
            .refine((value)=>!value.includes(' '),),

    username:
        z.string({ error: errors.noInput })
            .min(3, { error: errors.minCharacters(3) })
            .max(20, { error: errors.maxCharacters(20) }),

    password:
        z.string({ error: errors.noInput })
            .min(8, { error: errors.minCharacters(8) }),

    confirmPassword:
        z.string({ error: errors.noInput }),

}).refine((data) => data.password == data.confirmPassword, {
    error: "The passwords do not match",
    path: ['confirmPassword']
})