import "./Dashboard.css"
import TryMap from "../TryMap"
function Dashboard() {
  return (
    <div className="wrapper">
      <div>
        <h1 style={{ color: "var(--clr-primary-400)" }}>Notification</h1>
        <div className="user-dashboard">
          <div>
            <h2>Location</h2>
            <div>
              <p>Town</p>
              <p>Address</p>
            </div>
            <p>City</p>
          </div>
          <div>
            <h2>Location</h2>
            <div>
              <p>Town</p>
              <p>Address</p>
            </div>
            <p>City</p>
          </div>
          <div>
            <h2>Location</h2>
            <div>
              <p>Town</p>
              <p>Address</p>
            </div>
            <p>City</p>
          </div>
          <div>
            <h2>Location</h2>
            <div>
              <p>Town</p>
              <p>Address</p>
            </div>
            <p>City</p>
          </div>
          <div>
            <h2>Location</h2>
            <div>
              <p>Town</p>
              <p>Address</p>
            </div>
            <p>City</p>
          </div>
          <div>
            <h2>Location</h2>
            <div>
              <p>Town</p>
              <p>Address</p>
            </div>
            <p>City</p>
          </div>
        </div>
      </div>
      <TryMap />
    </div>
  )
}

export default Dashboard
