import config from "../../app/config"
import "./Dashboard.css"

function Dashboard() {
  return (
    <div className="wrapper">
      <div>
        <h1>{config.name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          dolorem asperiores porro deleniti, adipisci laudantium repudiandae
          quaerat placeat fugiat laboriosam mollitia dolores architecto culpa
          facilis a vel! Aliquam, mollitia rem.
        </p>
      </div>
      <div>
        <img src="" alt="image" />
      </div>
    </div>
  )
}

export default Dashboard
