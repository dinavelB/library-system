import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function NavigationBar() {
  return (
    <nav>
      <div className="me-btn">
        <FontAwesomeIcon icon={faUser} />
        <label htmlFor="">Me</label>
      </div>
      <input type="text" placeholder="Search Book" />
    </nav>
  );
}

export default function Dashboard() {
  return (
    <>
      <NavigationBar />
    </>
  );
}
