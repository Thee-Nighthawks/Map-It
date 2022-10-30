import style from "./Buttons.module.css"
function PrimaryButton({ text, clickEvent }) {
  return (
    <button className={style["primary-btn"]} onClick={clickEvent}>
      {text}
    </button>
  )
}

export default PrimaryButton
