import { useState } from 'react';
import { Menu, ShoppingBag, X, Home, Search, User, LayoutDashboard, ReceiptText, Package, Settings, PackageOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function TopNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  const closeMenu = () => setIsMenuOpen(false);

  const userLinks = [
    { to: '/', icon: <Home size={20} />, label: 'Home' },
    { to: '/discover', icon: <Search size={20} />, label: 'Discover' },
    { to: '/cart', icon: <ShoppingBag size={20} />, label: 'Cart' },
    { to: '/profile', icon: <User size={20} />, label: 'Profile' }
  ];

  const adminLinks = [
    { to: '/admin', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { to: '/admin/orders', icon: <ReceiptText size={20} />, label: 'Orders' },
    { to: '/admin/inventory', icon: <Package size={20} />, label: 'Products' },
    { to: '/admin/settings', icon: <Settings size={20} />, label: 'Settings' }
  ];

  const links = isAdmin ? adminLinks : userLinks;

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md px-4 py-4 flex items-center justify-between shadow-sm">
        <button 
          className="p-2 -ml-2 text-gray-800 hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(true)}
        >
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

      {/* Drawer Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm transition-opacity"
          onClick={closeMenu}
        />
      )}

      {/* Side Drawer */}
      <div 
        className={`fixed inset-y-0 left-0 w-64 bg-white z-[70] transform transition-transform duration-300 ease-in-out flex flex-col shadow-2xl ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h2 className="text-xl font-serif italic font-bold text-primary">Menu</h2>
          <button 
            onClick={closeMenu} 
            className="p-2 -mr-2 text-gray-400 hover:text-primary transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <ul className="flex flex-col space-y-1 px-3">
            {links.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={closeMenu}
                    className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-colors ${
                      isActive 
                        ? 'bg-primary/10 text-primary font-medium' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                    }`}
                  >
                    <span className={isActive ? 'text-primary' : 'text-gray-400'}>
                      {link.icon}
                    </span>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        
        {!isAdmin && (
          <div className="p-4 border-t border-gray-100">
            <Link 
              to="/custom-order" 
              onClick={closeMenu}
              className="w-full bg-[#e92780] hover:bg-[#d6196f] text-white flex justify-center items-center py-3 rounded-full font-medium transition-transform active:scale-95 shadow-md"
            >
              Order Custom Crochet
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
