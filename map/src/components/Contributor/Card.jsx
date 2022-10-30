import { FaLinkedin, FaGithub } from "react-icons/fa"
import "./Contributor.css"
function Card({ name, img, github, linkedin }) {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={img} alt={name} />
      </div>
      <div className="card-content">
        <p>{name}</p>
        <div className="socials-list">
          <a href={linkedin} target="_blank">
            <FaLinkedin color="blue" className="socials" />
          </a>
          <a href={github} target="_blank">
            <FaGithub color="black" className="socials" href={github} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
