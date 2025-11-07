import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'AURELIA 01',
    img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'MONOLITH 02',
    img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'SABLE 03',
    img: 'https://images.unsplash.com/photo-1532499016263-f4d95c3f1754?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'ARC 04',
    img: 'https://images.unsplash.com/photo-1520975922284-9d56bd34b37e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'OBSIDIAN 05',
    img: 'https://images.unsplash.com/photo-1516571740669-893b0f4f8a2b?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'SANDLINE 06',
    img: 'https://images.unsplash.com/photo-1518544801976-3e1888dec8f1?q=80&w=1600&auto=format&fit=crop',
  },
];

const CollectionCard = ({ name, img }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    className="group relative overflow-hidden bg-[#E3E3E3] shadow-sm"
  >
    <img src={img} alt={name} className="w-full h-80 object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#212121]/60 via-transparent to-transparent" />
    <div className="absolute bottom-4 left-4">
      <span className="inline-block px-3 py-1 bg-white/80 backdrop-blur-sm text-xs tracking-[0.25em] uppercase text-[#212121] group-hover:text-[#D4AF37] transition-colors">
        {name}
      </span>
    </div>
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
      <button className="px-6 py-2 border border-[#D4AF37] text-[#D4AF37] bg-white/10 backdrop-blur-sm uppercase tracking-widest text-[10px]">
        View Details
      </button>
    </div>
  </motion.div>
);

const Collection = () => {
  return (
    <section id="collection" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between">
          <h2 className="text-[#212121] text-3xl md:text-4xl font-serif" style={{ fontFamily: 'Playfair Display, ui-serif, Georgia' }}>Collection</h2>
          <span className="text-xs tracking-[0.35em] uppercase text-[#212121]/60" style={{ fontFamily: 'Tsukuhou Shogo Mincho OFL, ui-serif' }}>Editorial Grid</span>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <CollectionCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
