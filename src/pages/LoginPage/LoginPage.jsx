import { useState } from "react";
import "./LoginPage.css";

export default function LoginPage(props) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.setUser(inputValue);
  };

  return (
    <div className="full-screen-container">
      <div className="login-container">
        <h3 className="logtitle">Enter a Username</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" onChange={handleChange} />
          </div>
          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
