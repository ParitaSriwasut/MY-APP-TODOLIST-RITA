import { FaHome } from "react-icons/fa";
import Search from "./Search";
import "./Header.scss";
// import SearchBar from "./Search";
// import "./index.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <FaHome />
      </div>
      <div className="header__text">
        <h1>TodoList</h1>
      </div>
      <Search />
    </header>
  );
}
export default Header;
