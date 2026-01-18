import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import HomePage from "./pages/HomePage"
import ProfilePage from "./pages/ProfilePage"
import AdminPage from "./pages/AdminPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard/profile" element={<ProfilePage />} />
        <Route path="/dashboard/admin" element={<AdminPage />} />
      </Routes>
    </>
  )
}

export default App
