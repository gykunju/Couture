import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Heart, Share2, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { products } from '../data/products';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product?.size);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-serif mb-4">Product Not Found</h2>
        <button onClick={() => navigate(-1)} className="text-primary hover:underline">Go Back</button>
      </div>
    );
  }

  return (
    <div className="pb-24 -mx-4 px-4 sm:mx-0 sm:px-0">
      {/* Navbar overlay style for product page */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10 pt-6">
        <button 
          onClick={() => navigate(-1)} 
          className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-sm hover:bg-white text-gray-800 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-sm hover:bg-white text-gray-800 transition-colors">
            <Share2 size={20} />
          </button>
          <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-sm hover:bg-white text-gray-800 hover:text-red-500 transition-colors">
            <Heart size={20} />
          </button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="relative h-[65vh] -mt-4 sm:-mt-0 mb-6 -mx-4 sm:mx-0 sm:rounded-3xl overflow-hidden bg-gray-100">
        <div className="flex overflow-x-auto snap-x snap-mandatory h-full scrollbar-hide">
          {product.images.map((img, idx) => (
            <img 
              key={idx} 
              src={img} 
              alt={`${product.name} view ${idx + 1}`} 
              className="w-full h-full object-cover shrink-0 snap-center"
              onScroll={() => setActiveImageIndex(idx)} // Simple intersection observer would be better here for real touch
            />
          ))}
        </div>
        
        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full pointer-events-none">
          {product.images.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${
                /* Fake active state for now since scroll listener on horizontal flex requires IntersectionObserver */
                i === 0 ? 'w-4 bg-white' : 'w-1.5 bg-white/50'
              }`} 
            />
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="px-2">
        <div className="flex justify-between items-start mb-2">
          <h1 className="text-2xl font-serif font-bold text-gray-900 leading-tight max-w-[75%]">{product.name}</h1>
        </div>
        
        <p className="text-sm border flex items-center gap-1 border-primary/20 bg-primary/5 text-primary w-min whitespace-nowrap px-2.5 py-1 rounded-full mb-6 font-medium">
          Best Seller
        </p>

        {/* Size Selector */}
        <div className="mb-8">
          <div className="flex justify-between items-end mb-3">
            <h3 className="text-base font-semibold text-gray-900">{product.size ? "Size" : "Select Size"}</h3>
            {product.size? "" : <button className="text-sm text-text-muted hover:text-primary transition-colors underline decoration-dotted underline-offset-4">Size Guide</button>}
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {product.size && (
              <button
                className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-sm font-medium border transition-all border-primary bg-primary text-white shadow-md shadow-primary/20"
              >
                {product.size}
              </button>
            )}
            {!product.size && [6, 7, 8, 10, 12, 14].map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-sm font-medium border transition-all ${
                  selectedSize === size 
                    ? 'border-primary bg-primary text-white shadow-md shadow-primary/20' 
                    : 'border-gray-200 text-gray-600 hover:border-gray-300 bg-white'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-8">
          <h3 className="text-base font-semibold text-gray-900 mb-2">Description</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
        </div>

        {/* Details Accordions (Static for now) */}
        <div className="border-t border-gray-100 divide-y divide-gray-100 mb-8">
          <div className="py-4 flex justify-between items-center cursor-pointer group">
            <h3 className="text-base font-medium text-gray-900 group-hover:text-primary transition-colors">Materials & Care</h3>
            <ChevronRight size={20} className="text-gray-400 group-hover:text-primary transition-colors" />
          </div>
          <div className="py-4 flex justify-between items-center cursor-pointer group">
            <h3 className="text-base font-medium text-gray-900 group-hover:text-primary transition-colors">Shipping & Returns</h3>
            <ChevronRight size={20} className="text-gray-400 group-hover:text-primary transition-colors" />
          </div>
        </div>
      </div>

      {/* Floating Action CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-xl border-t border-gray-100 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] z-40 sm:max-w-[1200px] sm:mx-auto">
        <div className="flex gap-4 items-center">
          <div className="flex flex-col">
            <span className="text-xs text-text-muted font-medium">Total Price</span>
            <span className="text-xl font-bold text-gray-900">Ksh {product.price.toFixed(2)}</span>
          </div>
          <button className="flex-1 bg-primary hover:bg-primary-hover active:bg-primary-hover text-white flex justify-center items-center gap-2 py-4 rounded-2xl font-semibold transition-all shadow-lg shadow-primary/30">
            <ShoppingBag size={20} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
