import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Discover from './pages/Discover';
import CustomOrder from './pages/CustomOrder';
import Receipt from './pages/Receipt';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Dashboard from './pages/admin/Dashboard';
import Inventory from './pages/admin/Inventory';
import AddProduct from './pages/admin/AddProduct';
import TopNavBar from './components/TopNavBar';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-text-main antialiased bg-gray-50/50">
        <TopNavBar />
        <main className="flex-1 px-4 py-4 max-w-[1200px] mx-auto w-full">
          <Routes>
            {/* User Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/custom-order" element={<CustomOrder />} />
            <Route path="/receipt/:orderId" element={<Receipt />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/inventory" element={<Inventory />} />
            <Route path="/admin/inventory/add" element={<AddProduct />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
