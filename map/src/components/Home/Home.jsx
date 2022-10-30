import PrimaryButton from "../UI Components/Button/PrimaryButton"
import "./Home.css"
function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-content">
        <h1>MAP IT TO TASK IT</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero aut
          nobis vel soluta, totam, ipsa iusto impedit quaerat obcaecati
          exercitationem illum neque distinctio omnis, nam quasi. Dolore
          architecto nostrum sapiente ab odit a, suscipit praesentium, fugiat
          repellendus quia blanditiis deleniti eos eveniet nemo voluptatem quas
          nulla. Eius, esse corporis natus inventore ipsum dolorum repellat
          illum exercitationem magni illo, corrupti obcaecati tenetur in placeat
          nisi molestiae itaque! Quisquam assumenda corrupti repellat velit
          molestiae magni cumque. Cupiditate ea fuga aperiam voluptatibus,
          corrupti hic eos nesciunt atque? Nesciunt deleniti, numquam, commodi
          repellat explicabo illum eaque modi reiciendis minus amet, nam
          voluptatem quae eligendi?
        </p>
        <div className="button-list">
          <PrimaryButton text="Register" />
          <PrimaryButton text="About" />
        </div>
      </div>
      <div className="image-container">
        <img src="https://source.unsplash.com/random" alt="Map it image" />
      </div>
    </div>
  )
}

export default Home
