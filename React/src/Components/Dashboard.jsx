import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../index.css";

function NavigationBar() {
  return (
    <nav className="navigation-container">
      <div className="me-btn">
        <FontAwesomeIcon icon={faUser} />
        <label htmlFor="">Me</label>
      </div>
      <input type="text" placeholder="Search Book" />
    </nav>
  );
}

function Category() {
  return (
    <nav className="category-container">
      <ul>
        <li>Fiction</li>
        <li>Romance</li>
        <li>Horror</li>
        <li>Educational</li>
        <li>History</li>
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
  return (
    <>
      <NavigationBar />
      <Category />
      <Books />
    </>
  );
}
