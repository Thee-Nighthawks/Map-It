import styles from "./Header.module.css"
function Header({ heading, subHeading }) {
  return (
    <header className={styles["header"]}>
      <h1>{heading}</h1>
      <h2>{subHeading}</h2>
    </header>
  )
}

export default Header
