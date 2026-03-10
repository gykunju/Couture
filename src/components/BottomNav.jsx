import { useLocation, Link } from 'react-router-dom';
import { LayoutDashboard, ReceiptText, Package, Settings, Home, Search, ShoppingBag, User } from 'lucide-react';

export default function BottomNav() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  const navItemBase = "flex flex-col items-center text-xs font-medium gap-1 no-underline transition-colors duration-200";
  const active = "text-primary";
  const inactive = "text-text-muted";

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-2xl flex justify-around py-3 border-t border-white/50 z-50">
      {isAdmin ? (
        <>
          <Link to="/admin" className={`${navItemBase} ${location.pathname === '/admin' ? active : inactive}`}>
            <LayoutDashboard size={24} />
            <span>Dashboard</span>
          </Link>
          <Link to="/admin/orders" className={`${navItemBase} ${inactive}`}>
            <ReceiptText size={24} />
            <span>Orders</span>
          </Link>
          <Link to="/admin/inventory" className={`${navItemBase} ${location.pathname.includes('/inventory') ? active : inactive}`}>
            <Package size={24} />
            <span>Products</span>
          </Link>
          <Link to="/admin/settings" className={`${navItemBase} ${inactive}`}>
            <Settings size={24} />
            <span>Settings</span>
          </Link>
        </>
      ) : (
        <>
          <Link to="/" className={`${navItemBase} ${location.pathname === '/' ? active : inactive}`}>
            <Home size={24} />
            <span>Home</span>
          </Link>
          <Link to="/discover" className={`${navItemBase} ${inactive}`}>
            <Search size={24} />
            <span>Discover</span>
          </Link>
          <Link to="/cart" className={`${navItemBase} ${inactive}`}>
            <ShoppingBag size={24} />
            <span>Cart</span>
          </Link>
          <Link to="/profile" className={`${navItemBase} ${inactive}`}>
            <User size={24} />
            <span>Profile</span>
          </Link>
        </>
      )}
    </nav>
  );
}
