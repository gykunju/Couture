import { Menu, ShoppingBag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function TopNavBar() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md px-4 py-4 flex items-center justify-between shadow-sm">
      <button className="p-2 -ml-2 text-gray-800 hover:text-primary transition-colors">
        <Menu size={24} />
      </button>

      <div className="absolute left-1/2 -translate-x-1/2">
        <Link to={isAdmin ? "/admin" : "/"} className="text-xl font-serif italic font-bold tracking-wide text-primary">
          K.Couture
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <Link to="/cart" className="p-2 -mr-2 text-[#e92780] hover:text-primary transition-colors relative">
          <ShoppingBag size={24} />
        </Link>
      </div>
    </nav>
  );
}
