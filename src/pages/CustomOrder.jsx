import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Upload, ArrowRight } from 'lucide-react';

export default function CustomOrder() {
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState('#ffc0cb');
  
  const colors = ['#fdfafc', '#f8e5f0', '#ffc0cb', '#ff69b4', '#d896ff', '#8a4fff', '#2b2d42', '#f6f6f6'];

  const handleSubmit = (e) => {
    e.preventDefault();
    const fakeOrderId = Math.floor(100000 + Math.random() * 900000);
    navigate(`/receipt/${fakeOrderId}`);
  };

  return (
    <div className="pb-8">
      {/* Header */}
      <header className="flex items-center mb-8">
        <button onClick={() => navigate(-1)} className="bg-transparent p-2 -ml-2 cursor-pointer border-none">
          <ChevronLeft size={24} className="text-text-main" />
        </button>
        <h1 className="text-xl font-semibold ml-2">Custom Crochet Order</h1>
      </header>

      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        
        {/* Color Selection */}
        <section>
          <h2 className="text-base font-semibold mb-4">Select Yarn Color</h2>
          <div className="flex gap-4 flex-wrap">
            {colors.map(color => (
              <div 
                key={color} 
                onClick={() => setSelectedColor(color)}
                className="w-12 h-12 rounded-full cursor-pointer transition-all duration-200"
                style={{
                  backgroundColor: color,
                  border: color === '#f6f6f6' ? '1px solid #f2e8f7' : 'none',
                  boxShadow: selectedColor === color ? '0 0 0 3px white, 0 0 0 5px #9d4edd' : 'none',
                }}
              />
            ))}
          </div>
        </section>

        {/* Reference Photos */}
        <section>
          <h2 className="text-base font-semibold mb-4">Reference Photos</h2>
          <div className="border-2 border-dashed border-primary-light rounded-3xl py-10 px-6 text-center bg-[#fcf6ff]">
            <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center mx-auto mb-4 text-primary">
              <Upload size={28} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Upload Photos</h3>
            <p className="text-text-muted text-sm mb-4">
              Tap to select inspiration or style reference photos from your gallery.
            </p>
            <button type="button" className="bg-transparent text-primary border border-primary px-5 py-2.5 rounded-full text-base font-medium hover:bg-primary-light hover:text-white transition-all duration-200 cursor-pointer">
              Choose Files
            </button>
          </div>
        </section>

        {/* Measurements */}
        <section>
          <h2 className="text-base font-semibold mb-4">Measurements & Details</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-text-muted">Bust (in)</label>
              <input type="number" placeholder="e.g. 34" required className="border border-border rounded-xl px-4 py-3 text-base bg-surface text-text-main focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light transition-all duration-200" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-text-muted">Waist (in)</label>
              <input type="number" placeholder="e.g. 26" required className="border border-border rounded-xl px-4 py-3 text-base bg-surface text-text-main focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light transition-all duration-200" />
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label className="text-sm font-medium text-text-muted">Desired Length (in)</label>
            <input type="number" placeholder="e.g. 15" required className="border border-border rounded-xl px-4 py-3 text-base bg-surface text-text-main focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light transition-all duration-200" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-text-muted">Design Notes & Preferences</label>
            <textarea 
              rows="4" 
              placeholder="Tell us about specific stitch patterns, strap styles, or any unique details you'd like..."
              required
              className="border border-border rounded-xl px-4 py-3 text-base bg-surface text-text-main focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light transition-all duration-200 resize-y"
            ></textarea>
          </div>
        </section>

        <button type="submit" className="w-full bg-primary text-white py-3.5 px-6 rounded-full text-base font-medium inline-flex items-center justify-center gap-2 hover:bg-primary-hover hover:-translate-y-0.5 transition-all duration-200 cursor-pointer border-none mt-4">
          Request Quote <ArrowRight size={18} />
        </button>

      </form>
    </div>
  );
}
