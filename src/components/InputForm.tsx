import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "./ui/form"
import { Input } from "./ui/input"

type InputFormType = {
    name: string,
    label?: string,
    type?: React.HTMLInputTypeAttribute,
    placeholder?: string,
    description?: string,
    message?: boolean,
    className?: string
    form: any //no se q pinga iba a recibir aqui asi q puse un any pa la pinga
}

function InputForm({ name, label, type, placeholder, description, message, form, className }: InputFormType) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className="m-2">
                    {label && <FormLabel>{label}</FormLabel>}
                    <FormControl>
                        <Input className={className} type={type} placeholder={placeholder} {...field} />
                    </FormControl>
                    {description && <FormDescription>{description}</FormDescription>}
                    {message && <FormMessage />}
                </FormItem>
            )}
        />
    )
}

export default InputForm