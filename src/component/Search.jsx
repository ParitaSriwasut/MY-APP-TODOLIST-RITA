import { FaSearch } from "react-icons/fa";
import "./Search.scss";
function Search() {
  return (
    <div className="header__search">
      <div className="search">
        <span className="search__icon">
          <FaSearch />
        </span>
        <input type="text" placeholder="search" className="search__input" />
      </div>
    </div>
  );
}
export default Search;
