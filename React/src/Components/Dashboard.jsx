import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../index.css";
import { useState, useEffect } from "react";

function NavigationBar({ animation, setAnimation }) {
  return (
    <nav className={`navigation-container${animation ? "active" : ""}`}>
      <div className="me-btn">
        <FontAwesomeIcon icon={faUser} />
        <label htmlFor="">Me</label>
      </div>
      <input type="text" placeholder="Search Book" />
    </nav>
  );
}

function Category({ bgColor, setBgColor }) {
  const categories = ["Fiction", "Romance", "Horror", "Educational", "History"];

  return (
    <nav className="category-container">
      <ul className="categories">
        {categories.map((category) => (
          <li
            key={category}
            className={bgColor === category ? "active" : ""}
            onClick={() => setBgColor(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Books() {
  return (
    <section className="book-container">
      <div>
        <h1>Book</h1>
      </div>
      <div>
        <h1>Book</h1>
      </div>
      <div>
        <h1>Book</h1>
      </div>
      <div>
        <h1>Book</h1>
      </div>
      <div>
        <h1>Book</h1>
      </div>
    </section>
  );
}

export default function Dashboard() {
  const [nav, setNav] = useState(false);
  const [cat, setCat] = useState(false);
  const [books, setBooks] = useState(false);

  const [animation, setAnimation] = useState(null);

  useEffect(() => {
    const loadTimer = [];

    loadTimer.push(setTimeout(() => setNav(true), 500));
    loadTimer.push(setTimeout(() => setCat(true), 200));
    loadTimer.push(
      setTimeout(() => setBooks(true)),
      500
    );
  }, []);
  return (
    <>
      {nav && (
        <NavigationBar animation={animation} setAnimation={setAnimation} />
      )}
      {cat && (
        <Category bgColor={categoryColor} setBgColor={setCategoryColor} />
      )}
      {books && <Books />}
    </>
  );
}
