import { useNavigate } from 'react-router-dom';
import { Search, Edit2, Trash2, Plus, Menu } from 'lucide-react';

export default function Inventory() {
  const navigate = useNavigate();

  const inventoryItems = [
    { id: 1, name: 'Crochet Halter Top', price: 45.00, stock: 12, image: 'https://images.unsplash.com/photo-1572804013309-82a89b4f62ac?w=100&h=100&auto=format&fit=crop&q=60' },
    { id: 2, name: 'Floral Maxi Dress', price: 85.00, stock: 5, lowStock: true, image: 'https://plus.unsplash.com/premium_photo-1673356301535-224a0fdaefa9?w=100&h=100&auto=format&fit=crop&q=60' },
    { id: 3, name: 'Lace Trim Camisole', price: 30.00, stock: 20, image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=100&h=100&auto=format&fit=crop&q=60' },
    { id: 4, name: 'Chunky Knit Cardigan', price: 65.00, stock: 8, image: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?w=100&h=100&auto=format&fit=crop&q=60' },
  ];

  return (
    <div className="pb-8">
      {/* Header */}
      <header className="flex items-center mb-6">
        <button className="bg-transparent p-2 -ml-2 cursor-pointer border-none">
          <Menu size={24} className="text-text-main" />
        </button>
        <h1 className="text-xl font-semibold mx-auto">Inventory</h1>
        <button className="bg-transparent p-2 -mr-2 cursor-pointer border-none">
          <Search size={24} className="text-text-main" />
        </button>
      </header>
      
      {/* Items List */}
      <div className="bg-white rounded-3xl overflow-hidden">
        {inventoryItems.map((item, index) => (
          <div key={item.id} className={`flex items-center gap-4 p-4 ${index < inventoryItems.length - 1 ? 'border-b border-border' : ''}`}>
            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full object-cover bg-gray-100" />
            <div className="flex-1">
              <div className="font-semibold text-[0.95rem] mb-1">{item.name}</div>
              <div className="text-sm text-text-muted flex items-center gap-2">
                ${item.price.toFixed(2)} • Stock: {item.stock}
                {item.lowStock && <span className="text-danger font-medium">(Low)</span>}
              </div>
            </div>
            
            <div className="flex gap-2">
              <button className="w-9 h-9 rounded-full bg-primary-light text-primary flex items-center justify-center cursor-pointer border-none hover:bg-primary hover:text-white transition-colors duration-200">
                <Edit2 size={16} />
              </button>
              <button className="w-9 h-9 rounded-full bg-red-50 text-danger flex items-center justify-center cursor-pointer border-none hover:bg-danger hover:text-white transition-colors duration-200">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FAB */}
      <button onClick={() => navigate('/admin/inventory/add')} className="fixed bottom-20 right-6 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_4px_14px_rgba(157,78,221,0.4)] z-[100] hover:scale-105 transition-transform duration-200 cursor-pointer border-none">
        <Plus size={24} />
      </button>

    </div>
  );
}
