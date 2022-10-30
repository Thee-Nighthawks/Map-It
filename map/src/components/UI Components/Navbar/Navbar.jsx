import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
function Navbar() {
  return (
    <nav className={styles["main-nav"]}>
      <ul>
        <li>
          <img src="logo.png" alt="logo" />
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/contributors">Contributors</Link>
        </li>
        <li>Support</li>
      </ul>
    </nav>
  )
}

export default Navbar
