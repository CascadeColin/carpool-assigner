import "./Form.css";

// prototype for users to submit themselves to an event as a rider or driver

export default function SignupForm() {
  return (
    <form className="form-container">
      <div className="name-entry">
        <label htmlFor="name">Your Name: </label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="location-entry">
        <h2>What location works best for you?</h2>
        <label htmlFor="greenlake">Green Lake P&R</label>
        <input type="checkbox" name="greenlake" id="greenlake" />
        <label htmlFor="seattle">Seattle</label>
        <input type="checkbox" name="seattle" id="seattle" />
        <label htmlFor="bellevue">Bellevue</label>
        <input type="checkbox" name="bellevue" id="bellevue" />
        <label htmlFor="bothell">Bothell P&R</label>
        <input type="checkbox" name="bothell" id="bothell" />
        <label htmlFor="eastgate">Eastgate P&R</label>
        <input type="checkbox" name="eastgate" id="eastgate" />
      </div>
      <div>
        <h2>Are you a driver or a rider?</h2>
        <label htmlFor="driver">Driver</label>
        <input type="checkbox" name="driver" id="driver" />
        <label htmlFor="rider">Rider</label>
        <input type="checkbox" name="rider" id="rider" />
      </div>
      <div>
        <button className="form-button">Confirm!</button>
      </div>
    </form>
  );
}
