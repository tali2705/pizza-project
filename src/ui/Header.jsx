import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">TaliZZa Pizza Co.</Link>
      <SearchOrder />

      <p>Tali</p>
    </header>
  );
}

export default Header;
