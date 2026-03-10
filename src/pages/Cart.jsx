import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { products } from '../data/products';

export default function Cart() {
  const navigate = useNavigate();
  
  // Dummy cart state using first 2 products
  const [cartItems, setCartItems] = useState([
    { ...products[0], quantity: 1, cartItemId: 1 },
    { ...products[1], quantity: 2, cartItemId: 2 }
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(items => 
      items.map(item => {
        if (item.cartItemId === id) {
          const newQty = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(i => i.cartItemId !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = cartItems.length > 0 ? 15.00 : 0; // Flat dummy shipping
  const total = subtotal + shipping;

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pt-2">
        <button 
          onClick={() => navigate(-1)} 
          className="p-2 -ml-2 text-gray-800 hover:text-primary transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-serif italic text-primary">Your Cart</h1>
        <div className="w-10"></div> {/* Spacer for centering */}
      </div>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-20 px-4">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-400">
            <ShoppingBag size={32} />
          </div>
          <h2 className="text-xl font-serif font-bold text-gray-800 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-8 max-w-[250px]">Looks like you haven't added anything to your cart yet.</p>
          <Link 
            to="/discover" 
            className="bg-primary hover:bg-[#d6196f] text-white font-semibold px-8 py-3 rounded-full transition-all shadow-md"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <>
          {/* Cart Items List */}
          <div className="flex flex-col gap-4 mb-8">
            {cartItems.map((item) => (
              <div key={item.cartItemId} className="bg-white rounded-3xl p-3 flex gap-4 shadow-sm border border-gray-100 relative group">
                {/* Product Image */}
                <Link to={`/product/${item.id}`} className="w-24 h-32 shrink-0 rounded-2xl overflow-hidden bg-gray-100">
                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                </Link>

                {/* Info & Controls */}
                <div className="flex-1 flex flex-col py-1">
                  <div className="flex justify-between items-start pr-6">
                    <div>
                      <Link to={`/product/${item.id}`}>
                        <h3 className="text-sm font-semibold text-gray-900 leading-tight mb-1 hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-xs text-text-muted mb-2">Size: {item.size}</p>
                    </div>
                  </div>

                  <div className="mt-auto flex items-end justify-between">
                    <span className="font-semibold text-primary">Ksh {item.price.toFixed(2)}</span>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 bg-gray-50 px-2 py-1 rounded-full border border-gray-100">
                      <button 
                        onClick={() => updateQuantity(item.cartItemId, -1)}
                        className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-gray-600 shadow-sm disabled:opacity-50"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.cartItemId, 1)}
                        className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-gray-600 shadow-sm"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Remove Item Button */}
                  <button 
                    onClick={() => removeItem(item.cartItemId)}
                    className="absolute top-3 right-3 p-1.5 text-gray-300 hover:text-red-500 hover:bg-red-50 transition-colors rounded-full"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 mb-8">
            <h3 className="text-lg font-serif font-bold mb-4">Order Summary</h3>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({cartItems.length} items)</span>
                <span className="font-medium text-gray-900">Ksh {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="font-medium text-gray-900">Ksh {shipping.toFixed(2)}</span>
              </div>
              <div className="h-px bg-gray-100 my-1"></div>
              <div className="flex justify-between items-end">
                <span className="text-base font-semibold text-gray-900">Total</span>
                <span className="text-xl font-bold text-primary">Ksh {total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Checkout CTA */}
          <button className="w-full bg-primary hover:bg-[#d6196f] text-white flex justify-between items-center py-4 px-6 rounded-2xl font-semibold transition-all shadow-lg shadow-primary/30">
            <span>Checkout</span>
            <div className="flex items-center gap-2">
              <span>Ksh {total.toFixed(2)}</span>
              <ArrowRight size={18} />
            </div>
          </button>
        </>
      )}
    </div>
  );
}
