import { Form, FormLabel } from "./ui/form"
import InputForm from "./InputForm"
import type { FormEventHandler } from "react"
import QuoteComponent from "./QuoteComponent"
import { Checkbox } from "./ui/checkbox"

type Props = {
    id: string
    form: any,//no se q pinga es teto
    onSubmit?: FormEventHandler<HTMLFormElement>
}

function AdminUserForm({ id, form, onSubmit }: Props) {
    return (
        <Form {...form}>
            <form id={id} onSubmit={onSubmit}>
                <InputForm
                    form={form}
                    name='username'
                    message
                    placeholder='@username'
                    label='User'
                />
                <InputForm
                    form={form}
                    name='name'
                    message
                    placeholder='Name Full'
                    label='Name'
                />
                <InputForm
                    form={form}
                    name='password'
                    message
                    placeholder='********'
                    label='Password'
                />
                <div className="pl-2 flex space-x-2">
                    <Checkbox
                        id="check"
                        defaultChecked={form.getValues('isAdmin')}
                        onClick={() => form.setValue('isAdmin', !form.getValues('isAdmin'))}
                    />
                    <FormLabel htmlFor="check">Is Admin</FormLabel>
                </div>
                <div className='w-full border-1 my-3 border-dashed'></div>
                <QuoteComponent />
            </form>
        </Form>
    )
}

export default AdminUserForm