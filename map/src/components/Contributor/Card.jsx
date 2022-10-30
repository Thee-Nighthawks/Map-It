import { FaLinkedin, FaGithub } from "react-icons/fa"
import "./Contributor.css"
function Card() {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src="https://source.unsplash.com/random" alt="Profile Image" />
      </div>
      <div className="card-content">
        <p>Name</p>
        <div className="socials-list">
          <FaLinkedin color="blue" className="socials" />
          <FaGithub color="black" className="socials" />
        </div>
      </div>
    </div>
  )
}

export default Card
