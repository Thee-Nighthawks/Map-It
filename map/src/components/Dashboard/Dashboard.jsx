import "./Dashboard.css"
import TryMap from "../TryMap"
import UserNotification from "./UserNotification"

function Dashboard() {
  return (
    <div className="wrapper">
      <div>
        <h1 style={{ color: "var(--clr-primary-400)" }}>Notification</h1>
        <UserNotification />
      </div>
      <TryMap />
    </div>
  )
}

export default Dashboard
