import { ShoppingBag, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products as allProducts } from '../data/products';

export default function Discover() {

  return (
    <div className="pb-8">
      {/* Header & Search */}
      <div className="mb-6 sticky top-[68px] z-40 bg-gray-50/95 backdrop-blur-md pt-2 pb-4 -mx-4 px-4">
        <h1 className="text-2xl font-serif italic text-primary mb-4">Discover</h1>
        
        <div className="flex gap-2">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="text-gray-400" size={18} />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-11 pr-4 py-2.5 bg-white border border-gray-200 rounded-full text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm"
            />
          </div>
          <button className="p-2.5 bg-white border border-gray-200 rounded-full text-gray-600 hover:text-primary hover:border-primary/30 transition-colors shadow-sm focus:outline-none">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {allProducts.map(product => (
          <Link to={`/product/${product.id}`} key={product.id} className="rounded-3xl p-3 flex flex-col hover:shadow-md transition-shadow duration-200 block group/card">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-3 bg-gray-100 relative group">
              <div className="flex overflow-x-auto snap-x snap-mandatory h-full scrollbar-hide">
                {product.images.map((img, idx) => (
                  <img key={idx} src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover shrink-0 snap-center" />
                ))}
              </div>
              {/* Visual indicator that there are multiple images */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-sm px-2 py-1 rounded-full pointer-events-none">
                 {product.images.map((_, i) => (
                   <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/70" />
                 ))}
              </div>
            </div>
            
            <div className="flex-1 flex flex-col">
              <h3 className="text-sm font-medium text-gray-800 mb-0.5 line-clamp-2 leading-tight group-hover/card:text-primary transition-colors">{product.name}</h3>
              <span className="text-xs text-text-muted mb-2">Size {product.size}</span>
              
              <div className="flex justify-between items-center mt-auto pt-1">
                <span className="font-semibold text-primary">Ksh {product.price.toFixed(2)}</span>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    // Add to cart logic
                  }}
                  className="bg-primary/5 text-primary w-8 h-8 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200 focus:outline-none"
                >
                  <ShoppingBag size={14} />
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
