import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, CheckCircle2, Download } from 'lucide-react';

export default function Receipt() {
  const navigate = useNavigate();
  const { orderId } = useParams();

  return (
    <div className="pb-8">
      {/* Header */}
      <header className="flex items-center mb-6">
        <button onClick={() => navigate('/')} className="bg-transparent p-2 -ml-2 cursor-pointer border-none">
          <ChevronLeft size={24} className="text-text-main" />
        </button>
        <h1 className="text-xl font-semibold mx-auto pr-6">Receipt</h1>
      </header>
      
      {/* Hero Image */}
      <div className="bg-gradient-to-br from-primary-light to-pink-300 rounded-3xl h-60 mb-6 relative flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=500&auto=format&fit=crop&q=60" 
          alt="Flowers illustration" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute -bottom-7 w-14 h-14 rounded-full bg-white flex justify-center items-center shadow-lg">
          <CheckCircle2 className="text-primary" size={32} />
        </div>
      </div>

      {/* Success Message */}
      <div className="text-center mb-8 mt-10">
        <h2 className="text-2xl font-bold mb-2">Order Successful!</h2>
        <p className="text-text-muted">
          Your chic pieces are on their way. Order 
          <span className="text-primary font-semibold"> #{orderId || '123456789'} </span>
          has been placed.
        </p>
      </div>

      {/* Order Details Card */}
      <div className="bg-white/75 backdrop-blur-xl border border-white/50 rounded-3xl p-6 shadow-sm mb-6">
        <div className="flex justify-between mb-6 border-b border-border pb-4">
          <span className="text-text-muted font-medium">Order Date</span>
          <span className="font-semibold">October 24, 2026</span>
        </div>

        <h3 className="text-base font-semibold mb-4">Items</h3>
        
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex gap-4 items-center">
            <img src="https://images.unsplash.com/photo-1572804013309-82a89b4f62ac?w=500&auto=format&fit=crop&q=60" className="w-12 h-12 rounded-lg object-cover" alt="Top" />
            <div className="flex-1">
              <div className="text-sm font-semibold">Custom Blossom Crochet Top</div>
              <div className="text-xs text-text-muted">Qty: 1 • Size: M</div>
            </div>
            <div className="font-semibold">$45.00</div>
          </div>
          <div className="flex gap-4 items-center">
            <img src="https://plus.unsplash.com/premium_photo-1673356301535-224a0fdaefa9?w=500&auto=format&fit=crop&q=60" className="w-12 h-12 rounded-lg object-cover" alt="Skirt" />
            <div className="flex-1">
              <div className="text-sm font-semibold">Silk Petal Wrap Skirt</div>
              <div className="text-xs text-text-muted">Qty: 1 • Size: S</div>
            </div>
            <div className="font-semibold">$68.00</div>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="border-t border-border pt-4 flex flex-col gap-2 mb-4">
          <div className="flex justify-between text-text-muted text-sm">
            <span>Subtotal</span><span>$113.00</span>
          </div>
          <div className="flex justify-between text-text-muted text-sm">
            <span>Shipping</span><span>$5.00</span>
          </div>
          <div className="flex justify-between text-text-muted text-sm">
            <span>Tax</span><span>$9.60</span>
          </div>
        </div>

        <div className="flex justify-between text-xl font-bold mb-6">
          <span>Total</span>
          <span className="text-primary">$127.60</span>
        </div>

        {/* Shipping Info */}
        <div className="border-t border-border pt-4">
          <h4 className="text-sm text-text-muted uppercase tracking-wider mb-2">Shipping To</h4>
          <p className="text-sm leading-relaxed">
            Jane Doe<br />
            123 Fashion Ave, Suite 4B<br />
            New York, NY 10001
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3">
        <button className="w-full bg-primary text-white py-3.5 px-6 rounded-full text-base font-medium inline-flex items-center justify-center gap-2 hover:bg-primary-hover hover:-translate-y-0.5 transition-all duration-200 cursor-pointer border-none">
          <Download size={18} /> Download Receipt
        </button>
        <button onClick={() => navigate('/')} className="w-full bg-primary-light text-primary-hover py-3.5 px-6 rounded-full text-base font-medium hover:opacity-90 transition-all duration-200 cursor-pointer border-none">
          Continue Shopping
        </button>
      </div>

    </div>
  );
}
