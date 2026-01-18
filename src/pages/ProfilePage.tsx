import DashboardLayout from "@/layouts/DashboardLayout"
import ProfileLayout from "@/layouts/ProfileLayout"

function ProfilePage() {
  return (
    <DashboardLayout section="profile">
      <ProfileLayout />
    </DashboardLayout>
  )
}

export default ProfilePage