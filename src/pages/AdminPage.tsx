import AdminLayout from "@/layouts/AdminLayout"
import DashboardLayout from "@/layouts/DashboardLayout"

function AdminPage() {
  return (
    <DashboardLayout section="admin">
        <AdminLayout/>
    </DashboardLayout>
  )
}

export default AdminPage