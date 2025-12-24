import "../index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const storeData = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const login = async () => {
    const sendPOSTDat = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await sendPOSTDat.json();
    console.log(result);

    if (sendPOSTDat.ok) {
      console.log("logged in successfully");
      nav("/home");
    }
  };
  return (
    <section className="container">
      <section className="login-form">
        <h1>Login</h1>
        <label htmlFor="">Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          name="username"
          onChange={storeData}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          onChange={storeData}
        />
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Don't have an Account? Create Account
        </a>
        <button onClick={login}>Login</button>
      </section>
    </section>
  );
}
