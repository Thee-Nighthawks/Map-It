import "./Support.css"
function Support() {
  const onSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <div id="support">
      <form onSubmit={onSubmit} className="form-container">
        <div className="form-element">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="form-element">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="form-element">
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" id="subject" />
        </div>
        <div className="form-element">
          <label htmlFor="body">Body</label>
          <textarea name="body" id="body" cols="21" rows="10"></textarea>
        </div>
        <div className="form-element">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Support
