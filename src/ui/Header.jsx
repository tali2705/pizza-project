import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-teal-600 px-4 py-3 uppercase sm:px-6">
      <div>
        <Link
          className="text-xl font-bold tracking-widest text-stone-100"
          to="/"
        >
          TaliZZa Pizza Co.
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <SearchOrder />
        <Username />
      </div>
    </header>
  );
}

export default Header;
