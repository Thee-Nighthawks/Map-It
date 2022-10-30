import "../../components/AdminDashboard/AdminDashboard.css"
import AdminDashboard from "../../components/AdminDashboard/AdminDashboard"
import Header from "../../components/UI Components/Header/Header"

function AdminDashboardPage() {
  return (
    <div>
      <Header heading="Admin Dashboard" />
      <AdminDashboard />
    </div>
  )
}

export default AdminDashboardPage
