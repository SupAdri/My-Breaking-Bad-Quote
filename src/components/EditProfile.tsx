import { useUser } from "@/store/useUserStore"
import { Form } from "./ui/form"
import { Edit3Icon } from "lucide-react"
import { useForm } from "react-hook-form"
import { editSchema } from "@/validations/userValidations"
import { zodResolver } from "@hookform/resolvers/zod"
import InputForm from "./InputForm"
import DialogComponent from "./DialogComponent"

function EditProfile() {
  const { user, edit, loading } = useUser()
  const form = useForm({
    resolver: zodResolver(editSchema),
    values: {
      username: user ? user.username : '',
      name: user ? user.name : ''
    }
  })
  return (
    <DialogComponent
      loading={loading}
      textButton="Edit Profile"
      title="Edit Profile"
      description="Make changes to your profile here."
      close="Close"
      ok="Save changes"
      form="editForm"
      icon={<Edit3Icon />}
    >
      <Form {...form}>
        <form id="editForm" onSubmit={form.handleSubmit((data) => {
          if (data.name == user?.name && data.username == user?.username) {
            alert('No hay cambios.')
          } else {
            edit(data)
          }
        })}>
          <InputForm
            name="username"
            message
            label="User"
            placeholder="@username"
            form={form}
          />
          <InputForm
            name="name"
            message
            label="Name"
            placeholder="Name Full"
            form={form}
          />
        </form>
      </Form>
    </DialogComponent>
  )
}

export default EditProfile