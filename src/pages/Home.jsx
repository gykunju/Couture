import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag } from 'lucide-react';

export default function Home() {
  const featuredProducts = [
    { id: 1, name: 'Lilac Dream Crochet Top', price: 45.00, image: 'https://images.unsplash.com/photo-1572804013309-82a89b4f62ac?w=500&auto=format&fit=crop&q=60' },
    { id: 2, name: 'Silk Petal Wrap Skirt', price: 68.00, image: 'https://plus.unsplash.com/premium_photo-1673356301535-224a0fdaefa9?w=500&auto=format&fit=crop&q=60' },
    { id: 3, name: 'Rosewater Midi Dress', price: 85.00, image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&auto=format&fit=crop&q=60' },
  ];

  return (
    <div className="pb-8">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Couture Boutique</h1>
        <p className="text-text-muted">Premium female apparel & custom crochet</p>
      </header>
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-primary-light to-primary rounded-3xl px-6 py-8 text-white mb-8 flex flex-col items-start gap-4">
        <h2 className="text-2xl font-semibold text-white">Design Your Dream Top</h2>
        <p className="opacity-90">Get a custom crochet piece tailored just for you in your exact style and measurements.</p>
        <Link to="/custom-order" className="inline-flex items-center gap-2 bg-white text-primary font-medium px-6 py-3 rounded-full hover:-translate-y-0.5 transition-all duration-200">
          Order Custom <ArrowRight size={18} />
        </Link>
      </section>

      {/* Featured Products */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Trending Now</h2>
          <Link to="/discover" className="text-sm font-medium text-primary">View All</Link>
        </div>
        
        <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4">
          {featuredProducts.map(product => (
            <div key={product.id} className="bg-white/75 backdrop-blur-xl border border-white/50 rounded-3xl p-3 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-200">
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
