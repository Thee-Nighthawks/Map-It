import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/UI Components/Navbar/Navbar"
import HomePage from "./pages/HomePage"
import SupportPage from "./pages/SupportPage"
import DashboardPage from "./pages/Admin/DashboardPage"
import "./App.css"
import Footer from "./components/UI Components/Footer/Footer"
import ContributorPage from "./pages/ContributorPage"

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/contributors" element={<ContributorPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
