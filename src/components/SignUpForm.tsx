import { Form } from "./ui/form"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { userSchema } from "@/validations/userValidatios"
import InputForm from "./InputForm"
import { useCreateUser } from "@/store/useUserStore"

function SignUpForm() {

    const {setUser} = useCreateUser()

    const form = useForm({
        resolver: zodResolver(userSchema)
    })

    return (
        <Form {...form}>
            <form id="loginForm" onSubmit={form.handleSubmit((data) => setUser(data))}>
                <InputForm
                    name="username"
                    form={form}
                    placeholder="@username"
                    label="User"
                    message
                />
                <InputForm
                    name="name"
                    form={form}
                    placeholder="Full Name"
                    label="Name"
                    message
                />
                <InputForm
                    name="password"
                    form={form}
                    type='password'
                    placeholder="********"
                    label="Password"
                    message
                />
                <InputForm
                    name="confirmPassword"
                    form={form}
                    type='password'
                    placeholder="********"
                    label="Confirm Password"
                    message
                />
            </form>
        </Form>
    )
}

export default SignUpForm