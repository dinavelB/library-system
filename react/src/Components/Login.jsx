import { useState } from "react";
import "../index.css";

export default function Login() {
  return (
    <section className="container">
      <section className="createacc-form">
        <div>
          <p>Admin</p>
        </div>
        <h1>Create Account</h1>
        <label htmlFor="">Username</label>
        <input type="text" placeholder="Enter your username" />
        <label htmlFor="">Email</label>
        <input type="email" placeholder="Enter your email" />
        <label htmlFor="">Password</label>
        <input type="password" placeholder="Enter your password" />
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Already have an account? Login
        </a>
        <button>Create</button>
      </section>
    </section>
  );
}
