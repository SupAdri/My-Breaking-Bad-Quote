import { Form } from "./ui/form"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from "@/validations/userValidations"
import InputForm from "./InputForm"
import { useUser } from "@/store/useUserStore"
import { useEffect } from "react"


function LoginForm() {

    const{login,setLoading} = useUser()

    const form = useForm({
        resolver: zodResolver(loginSchema)
    })

    useEffect(()=>{
        setLoading(false)
    },[])

    return (
        <Form {...form}>
            <form id="loginForm" onSubmit={form.handleSubmit((data) => login(data))}>
                <InputForm
                    name="username"
                    form={form}
                    placeholder="@username"
                    label="User"
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
            </form>
        </Form>
    )
}

export default LoginForm