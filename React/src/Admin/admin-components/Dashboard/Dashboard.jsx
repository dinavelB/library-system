import { useEffect, useState } from "react";
import "../../../CSS/Dashboard.css";
import dashboard from "../../../Icons/dashboard-icon.png";
import book from "../../../Icons/book-icon.png";
import users from "../../../Icons/users-icon.png";
import details from "../../../Icons/details-icon.png";
import search from "../../../Icons/search-icon.png";

export default function Dashboard() {
  const [active, setActive] = useState(null);
  const token = localStorage.getItem("adminToken"); //take the string only or key

  const sampleVerify = async () => {
    const sendData = await fetch("/dashboard", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const data = await sendData.json();
    console.log(data);
  };

  useEffect(() => {
    sampleVerify();
  }, []);

  const options = [
    { navigate: "Dashboard", icon: dashboard },
    { navigate: "Books", icon: book },
    { navigate: "Users", icon: users },
    { navigate: "Book Details", icon: details },
  ];

  return (
    <section className="dashboard-container">
      <div className="dashboard-holder">
        <nav className="navigation-container">
          <span className="logo">
            Ed<span>Library</span>
          </span>
          <ul>
            {options.map((option) => (
              <li
                key={option.navigate}
                onClick={() => setActive(option.navigate)}
                className={`nav ${active === option.navigate ? "active" : ""}`}
              >
                <img src={option.icon} alt="" />
                {option.navigate}
              </li>
            ))}
          </ul>
        </nav>
        <div className="main-board-search">
          <div className="input-holder">
            <img src={search} alt="" />
            <input type="text" placeholder="Search" im />
          </div>
          <div className="main-board"></div>
        </div>
      </div>
    </section>
  );
}
