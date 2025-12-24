import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../index.css";

export default function CreateAccount() {
  const nav = useNavigate();

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setErrors] = useState({
    username: false,
    email: false,
    password: false,
  });

  const storeData = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const createAccount = async () => {
    const { username, email, password } = data;

    const errors = {
      username: !username,
      email: !email,
      password: !password,
    };

    setErrors(errors);

    if (errors.username || errors.email || errors.password) {
      console.log("must fill all fields");
    }
    const responsePostDat = await fetch("/create-account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const response = await responsePostDat.json();
    console.log(response);

    if (!responsePostDat.ok) {
      console.log("Account creation failed");
      return;
    }

    nav("/login");
  };

  return (
    <section className="container">
      <section className="createacc-form">
        <div className="admin-icon">
          <FontAwesomeIcon icon={faUser} id="user-icon" />
          <p>Admin</p>
        </div>
        <h1>Create Account</h1>
        <label htmlFor="">Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          name="username"
          onChange={storeData}
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
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
          Already have an account? Login
        </a>
        <button onClick={createAccount}>Create</button>
      </section>
    </section>
  );
}
