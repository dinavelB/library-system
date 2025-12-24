import "../index.css";

export default function Login() {
  return (
    <section className="container">
      <section className="login-form">
        <h1>Login</h1>
        <label htmlFor="">Username</label>
        <input type="text" placeholder="Enter your username" name="username" />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
        />
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Don't have an Account? Create Account
        </a>
        <button>Login</button>
      </section>
    </section>
  );
}
