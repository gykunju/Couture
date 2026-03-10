import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Search } from 'lucide-react';
import first from '/engin-akyurt-Hd4nlxLgIbA-unsplash.jpg';
import secondImage from '/haryo-setyadi-acn5ERAeSb4-unsplash.jpg'
import thirdImage from '/santhosh-kumar-RqYTuWkTdEs-unsplash (1).jpg'

export default function Home() {
  const featuredProducts = [
    { id: 1, name: 'Lilac Dream Crochet Top', price: 45.00, image: first },
    { id: 2, name: 'Silk Petal Wrap Skirt', price: 68.00, image: secondImage },
    { id: 3, name: 'Rosewater Midi Dress', price: 85.00, image: thirdImage },
  ];

  return (
    <div className="pb-8">
  
      {/* Search Bar */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="text-gray-400" size={18} />
        </div>
        <input
          type="text"
          placeholder="Search trendy tops & custom crochet..."
          className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-full text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm"
        />
      </div>
      
      {/* Hero Banner */}
      <section 
        className="relative h-[22rem] rounded-3xl overflow-hidden text-white mb-8 flex flex-col items-center justify-center gap-1 text-center bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url('/hero_banner.png')" }}
      >
        <span className="text-[10px] md:text-xs font-semibold tracking-[0.15em] uppercase rounded-full border border-white/50 bg-white/20 backdrop-blur-md px-4 py-1 mb-2">
          Signature Collection
        </span>
        <h2 className="text-4xl md:text-5xl font-serif italic font-bold mb-2 drop-shadow-md">
          Custom Crochet
        </h2>
        <p className="text-sm font-light opacity-95 max-w-[280px]">
          Handcrafted with love. Tailored to your unique style.
        </p>
        <Link 
          to="/custom-order" 
          className="flex items-center gap-2 mt-4 bg-primary hover:bg-[#d6196f] text-white font-semibold px-8 py-3 rounded-full hover:-translate-y-0.5 transition-all duration-200 shadow-lg"
        >
          Order Now <ArrowRight size={30} className='py-1'/>
        </Link>
      </section>

      {/* Featured Products */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Trending Now</h2>
          <Link to="/discover" className="text-sm font-medium text-primary">View All</Link>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
          {featuredProducts.map(product => (
            <div key={product.id} className="w-64 shrink-0 snap-start border border-white/50 rounded-3xl p-3 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="h-40 rounded-xl overflow-hidden mb-3">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-sm font-medium mb-1">{product.name}</h3>
              <div className="flex justify-between items-center mt-auto">
                <span className="font-semibold text-primary">${product.price.toFixed(2)}</span>
                <button className="bg-primary-light text-primary w-8 h-8 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200">
                  <ShoppingBag size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
