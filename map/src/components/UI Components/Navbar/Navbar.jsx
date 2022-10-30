import styles from "./Navbar.module.css"
function Navbar() {
  return (
    <nav className={styles["main-nav"]}>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </nav>
  )
}

export default Navbar
