import { useUser } from "@/store/useUserStore"
import { Form } from "./ui/form"
import { KeyRoundIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { changePasswordSchema } from "@/validations/userValidatios"
import DialogComponet from "./DialogComponet"
import InputForm from "./InputForm"
export default function ChangePassword() {
  const { edit, loading } = useUser()
  const form = useForm({
    resolver: zodResolver(changePasswordSchema)
  })
  return (
    <DialogComponet
      icon={<KeyRoundIcon />}
      textButton="Change Password"
      ok="Save Change"
      loading={loading}
      title="Change Password"
      description="Change your password."
      form="changepassword"
    >
      <Form {...form}>
        <form id="changepassword" onSubmit={form.handleSubmit((data) => edit({ password: data.password }))}>
          <InputForm
            name="password"
            label="New password"
            type="password"
            placeholder="********"
            message
            form={form}
          />
          <InputForm
            name="confirmPassword"
            label="Confirm new password"
            type="password"
            placeholder="********"
            message
            form={form}
          />
        </form>
      </Form>
    </DialogComponet>
  )
}