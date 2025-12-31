import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../index.css";
import { useState, useEffect } from "react";

function NavigationBar({ animationLoad }) {
  const [userOptions, setUserOptions] = useState(false);

  return (
    <>
      <nav
        className={`navigation-container fade ${animationLoad ? "show" : ""}`}
      >
        <div className="me-btn" onClick={() => setUserOptions(true)}>
          <FontAwesomeIcon icon={faUser} />
          <label htmlFor="">Me</label>
        </div>
        <input type="text" placeholder="Search Book" />
      </nav>

      <section className={`user-option-container ${userOptions ? "open" : ""}`}>
        <button onClick={() => setUserOptions(false)}>X</button>
        <div className="options">
          <label htmlFor="">Profile</label>
          <label htmlFor="">Favorite Books</label>
          <label htmlFor="">Borrowed Books</label>
        </div>
      </section>
    </>
  );
}

function Category({ bgColor, setBgColor, animationLoad }) {
  const categories = ["Fiction", "Romance", "Horror", "Educational", "History"];

  return (
    <nav className={`category-container fade ${animationLoad ? "show" : ""}`}>
      <ul className="categories">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => setBgColor(category)}
            className={bgColor === category ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Books({ animationLoad }) {
  const [selectedBook, setSelectedBook] = useState(null);
  const books = ["book1", "book2", "book3", "book4", "book5", "book6"]; //value

  const seeBook = (book) => {
    setSelectedBook(book);
    console.log("clicked book", book);
  };

  const closePopup = () => {
    setSelectedBook(null);
  };
  return (
    <>
      <section className={`book-container fade ${animationLoad ? "show" : ""}`}>
        {books.map(
          (
            value,
            index //mapping, index position
          ) => (
            <article key={index}>
              <h1>{value}</h1>
              <div onClick={() => seeBook(value)}>Sample</div>
            </article>
          )
        )}
      </section>
      {selectedBook && (
        <div className="popup" onClick={closePopup}>
          <div className="popup-content">
            <div className="img-container"></div>
            <div className="book-details">
              <h1>{selectedBook}</h1>
              <label htmlFor="">Author's Name</label>
              <p>Date</p>
              <button>Borrow</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function Dashboard() {
  //.categories li:not(.active):hover  not is the seudo class here and () is the condition
  const [nav, setNav] = useState(false);
  const [cat, setCat] = useState(false);
  const [books, setBooks] = useState(false);

  const [categoryColor, setCategoryColor] = useState(null);

  useEffect(() => {
    //let delay = 0;
    const loadTimer = [setNav, setCat, setBooks];

    //first param container for the array each index, second param for positioning
    loadTimer.forEach((setStates, index) => {
      //delay
      setTimeout(() => {
        setStates(true);
      }, (index + 1) * 200);
    });

    /*
    for(let setStates of loadTimer){
      delay += 200
      setTimeout(()=>(
        setStates(true)
      ), delay)
    }
    */
  }, []);
  //states are true here and passed to the children (animationLoad)
  return (
    <>
      <NavigationBar animationLoad={nav} />
      <Category
        bgColor={categoryColor}
        setBgColor={setCategoryColor}
        animationLoad={cat}
      />
      <Books animationLoad={books} />
    </>
  );
}
