import { useState } from "react"
import TryMap from "../TryMap"
import Notification from "../Dashboard/Notification"
import Header from "../UI Components/Header/Header"
import PrimaryButton from "../UI Components/Button/PrimaryButton"

function AdminDashboard() {
  const [task, setTask] = useState("")
  const [coordinates, setCoordinates] = useState({
    state: "",
    region: "",
    city: "",
    postcode: "",
  })

  const handleClick = () => {
    console.log(task)
    setTask("")
  }
  return (
    <div className="admin-wrapper">
      <TryMap coordinates={coordinates} setCoordinates={setCoordinates} />
      <Header subHeading="Assignment" />
      <div className="admin-panel">
        <Notification coordinates={coordinates} />
        <div className="task-assignment">
          <h2>Enter the Task</h2>
          <textarea
            name="task"
            id="task"
            cols="30"
            rows="10"
            value={task}
            onChange={(event) => setTask(event.target.value)}
          ></textarea>
          <PrimaryButton text="Assign" clickEvent={handleClick} />
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
