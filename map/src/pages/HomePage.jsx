import Header from "../components/UI Components/Header/Header"
import config from "../app/config"
import Intro from "../components/Home/Intro"

function HomePage() {
  return (
    <div id="home">
      <Header heading={config.name} />
      <Intro />
    </div>
  )
}

export default HomePage
