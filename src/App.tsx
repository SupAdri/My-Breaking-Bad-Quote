import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import HomePage from "./pages/HomePage"
import PorfilePage from "./pages/PorfilePage"
import AdminPage from "./pages/AdminPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard/porfile" element={<PorfilePage />} />
        <Route path="/dashboard/admin" element={<AdminPage />} />
      </Routes>
    </>
  )
}

export default App
