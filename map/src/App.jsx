import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/UI Components/Navbar/Navbar"
import HomePage from "./pages/HomePage"
import SupportPage from "./pages/SupportPage"
import DashboardPage from "./pages/Admin/DashboardPage"
import "./App.css"
import Footer from "./components/UI Components/Footer/Footer"

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/admin">
            <Route path="/admin/dashboard" element={<DashboardPage />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
