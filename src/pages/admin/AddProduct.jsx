import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ImagePlus } from 'lucide-react';

export default function AddProduct() {
  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();
    navigate('/admin/inventory');
  };

  return (
    <div className="pb-8">
      {/* Header */}
      <header className="flex items-center mb-6">
        <button onClick={() => navigate(-1)} className="bg-transparent p-2 -ml-2 cursor-pointer border-none">
          <ChevronLeft size={24} className="text-text-main" />
        </button>
        <h1 className="text-xl font-semibold mx-auto pr-6">Add Product</h1>
      </header>
      
      {/* Image Placeholder */}
      <div className="bg-gray-200 rounded-3xl h-60 mb-6 flex items-center justify-center">
        <ImagePlus size={64} className="text-gray-400" />
      </div>

      <div className="text-center mb-8">
        <h2 className="text-lg font-semibold mb-2">Upload Image</h2>
        <p className="text-text-muted text-sm mb-4">
          Tap to add a product photo. High resolution recommended.
        </p>
        <button className="bg-primary text-white py-2.5 px-6 rounded-full text-base font-medium inline-flex items-center gap-2 hover:bg-primary-hover transition-all duration-200 cursor-pointer border-none">
          <ImagePlus size={18} /> Select Photo
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSave} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-text-main">Item Name</label>
          <input type="text" placeholder="e.g., Pink Crochet Halter Top" required className="border border-border rounded-xl px-4 py-3 text-base bg-surface text-text-main focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light transition-all duration-200" />
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-text-main">Category</label>
          <select required defaultValue="" className="border border-border rounded-xl px-4 py-3 text-base bg-surface text-text-main focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light transition-all duration-200">
            <option value="" disabled>Select Category</option>
            <option value="tops">Tops</option>
            <option value="dresses">Dresses</option>
            <option value="bottoms">Bottoms</option>
            <option value="custom">Custom Crochet</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-text-main">Price ($)</label>
            <input type="number" step="0.01" placeholder="0.00" required className="border border-border rounded-xl px-4 py-3 text-base bg-surface text-text-main focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light transition-all duration-200" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-text-main">Stock Qty</label>
            <input type="number" placeholder="0" required className="border border-border rounded-xl px-4 py-3 text-base bg-surface text-text-main focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light transition-all duration-200" />
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <label className="text-sm font-semibold text-text-main">Description</label>
          <textarea 
            rows="5" 
            placeholder="Describe the item's fit, fabric, and details..."
            required
            className="border border-border rounded-xl px-4 py-3 text-base bg-surface text-text-main focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light transition-all duration-200 resize-y"
          ></textarea>
        </div>

        <button type="submit" className="w-full bg-primary text-white py-3.5 px-6 rounded-full text-base font-medium hover:bg-primary-hover hover:-translate-y-0.5 transition-all duration-200 cursor-pointer border-none">
          Save Product
        </button>

      </form>

    </div>
  );
}
