import Card from "../components/Contributor/Card"

function ContributorPage() {
  return (
    <div id="contributor">
      <div className="card-wrapper">
        <Card
          name="Deveesh"
          img="Deveesh.jpg"
          role="React Developer"
          github="https://github.com/Deveesh-Shetty"
          linkedin="https://www.linkedin.com/in/deveesh-shetty-908539214/"
        />
        <Card
          name="Akkil"
          img="Akkil.jpg"
          role="Database Developer"
          github="https://github.com/HeimanPictures"
          linkedin="https://www.linkedin.com/in/akkilmg/"
        />
        <Card
          name="Tejas"
          img="Tejas.jpg"
          role="Backend Developer"
          github="https://github.com/tejas-gk"
          linkedin="https://www.linkedin.com/in/tejas-gk/"
        />
      </div>
    </div>
  )
}

export default ContributorPage
