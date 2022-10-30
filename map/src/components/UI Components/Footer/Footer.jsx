import style from "./Footer.module.css"
import config from "../../../app/config"

function Footer() {
  return (
    <footer className={style["footer"]}>
      <div>
        <p>&#169; {config.name}, 2022</p>
      </div>
      <div>
        <p>Made with ❤️</p>
      </div>
    </footer>
  )
}

export default Footer
