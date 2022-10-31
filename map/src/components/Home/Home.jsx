import { Link } from "react-router-dom"
import PrimaryButton from "../UI Components/Button/PrimaryButton"
import "./Home.css"
function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-content">
        <h1>MAP IT TO TASK IT</h1>
        <p>
          Solution for map API synced with database to assign tasks to for eg.:
          riders, users in the defined radius of a selected location.
        </p>
        <div className="button-list">
          <PrimaryButton text="Register" />
          <PrimaryButton text="About" />
        </div>
      </div>
      <div className="image-container">
        <Link to="/dashboard">
          <img src="MapIt.png" alt="Map it Image" />
        </Link>
      </div>
    </div>
  )
}

export default Home
