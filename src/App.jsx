import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CustomOrder from './pages/CustomOrder';
import Receipt from './pages/Receipt';
import Dashboard from './pages/admin/Dashboard';
import Inventory from './pages/admin/Inventory';
import AddProduct from './pages/admin/AddProduct';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-text-main antialiased">
        <main className="flex-1 px-4 py-6 pb-24 max-w-[1200px] mx-auto w-full">
          <Routes>
            {/* User Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/custom-order" element={<CustomOrder />} />
            <Route path="/receipt/:orderId" element={<Receipt />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/inventory" element={<Inventory />} />
            <Route path="/admin/inventory/add" element={<AddProduct />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
