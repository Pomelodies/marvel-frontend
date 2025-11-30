import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import axios from "axios";

const SignUp = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  return (
    <div className="container">
      <form
        className="signup-form"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const response = await axios.post(
              "http://localhost:3000/user/signup",
              { username: username, email: email, password: password }
            );
            // console.log(response.data);
            // {message: 'User successfully created', _id: '692c773db9533cf6f39b721a', username: 'SailorVenus', token: 'KnJaZZb43JwYkLg4bqQU7OQ4uB_6qlqFryAk6blzv4oaPUTT-j3nBrLWslL6walL'}

            if (response.data.token) {
              setUser(response.data.token);
              navigate("/");
              setErrorMessage("");
            } else {
              setErrorMessage("Something went wrong !");
            }
          } catch (error) {
            error.response
              ? setErrorMessage(error.response.data.message)
              : console.log(error);
          }
        }}
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button>S'inscrire</button>
      </form>
    </div>
  );
};

export default SignUp;
