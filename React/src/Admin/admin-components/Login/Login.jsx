import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();

  const loginbtn = () => {
    nav("/dashboard");
  };
  return (
    <div>
      <h1>I am a login page</h1>
      <button onClick={loginbtn}>Login</button>
    </div>
  );
}
