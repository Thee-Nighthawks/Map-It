import React from "react"

function Notification({ coordinates }) {
  const { state, region, city, postcode } = coordinates
  return (
    <div className="user-dashboard">
      {city !== null ? (
        <div>
          <h2>{city}</h2>
          <div>
            <p>{region}</p>
            <p>{postcode}</p>
          </div>
          <p>{state}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default Notification
