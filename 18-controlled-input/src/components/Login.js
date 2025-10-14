import { useState } from "react";

function Login() {
  const [data, setData] = useState({ username: "", password: "" });

  function handleFormSubmit(event) {
    event.preventDefault(); //for not open new window

    console.log(data);
    alert(JSON.stringify(data)); //show pop-up message with login and pasword (json.stringify used for converting object JS to Json)
  }
  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value });
  }
  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={data.username}
            onChange={(e) => handleInputChange(e, "username")}
          />
          {/*function to display input in login form*/}
        </label>

        <label>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(e) => handleInputChange(e, "password")}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
