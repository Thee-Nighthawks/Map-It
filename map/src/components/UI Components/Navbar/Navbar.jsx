import { Link } from "react-router-dom"
import { FaHeadset } from "react-icons/fa"
import styles from "./Navbar.module.css"
import Logo from "../../../assets/logo.png"
function Navbar() {
  return (
    <nav className={styles["main-nav"]}>
      <ul>
        <li>
          <img src={Logo} alt="logo" />
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/contributors">Contributors</Link>
        </li>
        <li>
          <Link to="/support">
            <FaHeadset />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
