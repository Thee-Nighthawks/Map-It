import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/UI Components/Navbar/Navbar"
import HomePage from "./pages/HomePage"
import SupportPage from "./pages/SupportPage"
import Footer from "./components/UI Components/Footer/Footer"
import ContributorPage from "./pages/ContributorPage"
import DashboardPage from "./pages/DashboardPage"
import AdminDashboardPage from "./pages/Admin/AdminDashboardPage"
import "./App.css"
import TryMap from "./components/TryMap"
function App() {
  const coordinates = {
    lat: 59.95,
    lng: 30.33,
  }
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/contributors" element={<ContributorPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/admin/t" element={<TryMap />} />
            <Route path="/admin">
              <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
            </Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  )
}

export default App
