import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";

export default function Login() {
  const nav = useNavigate();

  const [adminData, setAdminData] = useState({
    username: "",
    password: "",
  });

  const getData = (e) => {
    const { name, value } = e.target;
    setAdminData((prev) => ({
      ...prev, //prevents rewriting the declared state, states only receives one argument
      [name]: value,
    }));
  };

  const loginAdmin = async () => {
    const dBResponse = await fetch("/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adminData),
    });

    const printRes = await dBResponse.json();

    if (dBResponse.ok) {
      console.log("admin logged in successfully");
      localStorage.setItem("adminToken", printRes.token);
      nav("/dashboard");
    }
  };
  return (
    <section>
      <div className="holder">
        <div className="img-container"></div>
        <div className="p-container">
          <span className="logo">
            Ed<span>Library</span>
          </span>
          <span className="welcome-admin">
            <h1>Welcome, Admin</h1>
            <p>Enter credentials to login as admin</p>
          </span>
          <label htmlFor="">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            onChange={getData}
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={getData}
          />
          <button onClick={loginAdmin}>Sign-in</button>
        </div>
      </div>
    </section>
  );
}
