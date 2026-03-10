import first from '/engin-akyurt-Hd4nlxLgIbA-unsplash.jpg';
import secondImage from '/haryo-setyadi-acn5ERAeSb4-unsplash.jpg';
import thirdImage from '/santhosh-kumar-RqYTuWkTdEs-unsplash (1).jpg';

export const products = [
  { 
    id: 1, 
    name: 'Lilac Dream Crochet Top', 
    size: 7, 
    price: 45.00, 
    images: [first, secondImage, thirdImage],
    description: 'A delicate, hand-crafted lilac crochet top featuring intricate lacework. Perfect for warm summer evenings and casual outings. Made from 100% premium cotton yarn for breathable comfort.',
    materials: ['100% Cotton', 'Hand-dyed yarn'],
    care: 'Hand wash cold, lay flat to dry'
  },
  { 
    id: 2, 
    name: 'Silk Petal Wrap Skirt', 
    size: 10, 
    price: 68.00, 
    images: [secondImage, thirdImage, first],
    description: 'Elegant wrap skirt crafted from luxurious faux silk. Features a flowy silhouette that moves beautifully with you. The adjustable waist tie ensures a perfect, flattering fit.',
    materials: ['100% Viscose Rayon'],
    care: 'Dry clean recommended, or machine wash delicate cold'
  },
  { 
    id: 3, 
    name: 'Rosewater Midi Dress', 
    size: 8, 
    price: 85.00, 
    images: [thirdImage, first, secondImage],
    description: 'Stunning midi dress in a soft rosewater hue. Designed with a flattering square neckline and gentle gathering at the waist. Ideal for garden parties or elegant brunches.',
    materials: ['Linen blend', 'Cotton lining'],
    care: 'Machine wash cold with like colors, tumble dry low'
  },
  { 
    id: 4, 
    name: 'Ocean Mist Crochet Halter', 
    size: 6, 
    price: 38.00, 
    images: [first, thirdImage, secondImage],
    description: 'Vibrant ocean blue crochet halter top. Ties securely at the neck and back for adjustable support. A must-have statement piece for your next beach vacation.',
    materials: ['100% Cotton'],
    care: 'Hand wash cold, lay flat to dry'
  },
  { 
    id: 5, 
    name: 'Midnight Velvet Trousers', 
    size: 12, 
    price: 72.00, 
    images: [secondImage, first, thirdImage],
    description: 'Sophisticated wide-leg trousers in rich midnight blue velvet. High-waisted design with subtle pleating for an elongated look. Comfort meets timeless elegance.',
    materials: ['Velvet construct', 'Polyester blend'],
    care: 'Dry clean only'
  },
  { 
    id: 6, 
    name: 'Sunburst Linen Blouse', 
    size: 8, 
    price: 54.00, 
    images: [thirdImage, secondImage, first],
    description: 'Airy linen blouse in a cheerful sunburst yellow. Features relaxed batwing sleeves and a delicate button-front detail. Your new go-to for effortless daytime dressing.',
    materials: ['100% French Linen'],
    care: 'Machine wash warm, iron while damp'
  },
];
