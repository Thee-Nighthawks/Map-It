import Notification from "./Notification"
import TryMap from "../TryMap"
import "./Dashboard.css"

function Dashboard() {
  return (
    <div className="wrapper">
      <div>
        <h1 style={{ color: "var(--clr-primary-400)" }}>Notification</h1>
        <Notification />
      </div>
      <TryMap />
    </div>
  )
}

export default Dashboard
