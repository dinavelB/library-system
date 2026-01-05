import { useNavigate } from "react-router-dom";
import "./Login.css";
export default function Login() {
  const nav = useNavigate();

  const loginbtn = () => {
    nav("/dashboard");
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
          <input type="text" placeholder="Enter username" />
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Enter your password" />
          <button>Sign-in</button>
        </div>
      </div>
    </section>
  );
}
