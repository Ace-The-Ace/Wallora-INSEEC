import { motion } from 'motion/react';
import { artworks, categories, sizes, orientations } from '../lib/data';

export default function Collection() {
  return (
    <div className="w-full">
      <header className="px-6 lg:px-16 xl:px-24 py-24 lg:py-32 flex flex-col items-center text-center border-b border-brand-muted/30">
        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-ink/50 mb-6">Des collections pensées pour chaque univers.</span>
        <h1 className="text-5xl lg:text-7xl font-serif mb-8 text-brand-ink tracking-tight">Nos affiches</h1>
        <p className="text-lg text-brand-ink/70 max-w-2xl leading-relaxed font-light mb-4">
          Wallora propose une sélection de posters et affiches décoratives imprimées avec soin. 
          Chaque collection répond à une ambiance spécifique : minimaliste, vintage, automobile, cinéma, 
          voyage, musique ou pop culture.
        </p>
        <p className="text-lg text-brand-ink/70 max-w-2xl leading-relaxed font-light">
          Nos affiches sont conçues pour être faciles à associer, que ce soit seules, en duo ou sous 
          forme de galerie murale. Elles permettent de créer rapidement une décoration cohérente, 
          esthétique et personnalisée.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-16 px-6 lg:px-16 xl:px-24 py-24">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="sticky top-32">
            <h2 className="text-2xl font-serif mb-10 text-brand-ink">Filter</h2>
            
            {/* Categories */}
            <div className="mb-10 border-b border-brand-muted/30 pb-10">
              <h3 className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-ink/60 mb-6">Catégories</h3>
              <div className="flex flex-col space-y-4">
                {categories.map((cat, idx) => (
                  <label key={idx} className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="form-checkbox h-[14px] w-[14px] text-brand-ink border-brand-muted/60 focus:ring-0 focus:ring-offset-0 bg-transparent transition-colors group-hover:border-brand-ink rounded-none" />
                    <span className="text-sm text-brand-ink/80 group-hover:text-brand-ink transition-colors font-light">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-10 border-b border-brand-muted/30 pb-10">
              <h3 className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-ink/60 mb-6">Size</h3>
              <div className="flex flex-col space-y-4">
                {sizes.map((size, idx) => (
                  <label key={idx} className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="form-checkbox h-[14px] w-[14px] text-brand-ink border-brand-muted/60 focus:ring-0 focus:ring-offset-0 bg-transparent transition-colors group-hover:border-brand-ink rounded-none" />
                    <span className="text-sm text-brand-ink/80 group-hover:text-brand-ink transition-colors font-light">{size}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Orientation */}
            <div className="mb-10 border-b border-brand-muted/30 pb-10">
              <h3 className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-ink/60 mb-6">Orientation</h3>
              <div className="flex flex-col space-y-4">
                {orientations.map((ort, idx) => (
                  <label key={idx} className="flex items-center space-x-3 cursor-pointer group">
                    <input type="radio" name="orientation" className="form-radio h-[14px] w-[14px] text-brand-ink border-brand-muted/60 focus:ring-0 focus:ring-offset-0 bg-transparent transition-colors group-hover:border-brand-ink rounded-none" />
                    <span className="text-sm text-brand-ink/80 group-hover:text-brand-ink transition-colors font-light">{ort}</span>
                  </label>
                ))}
              </div>
            </div>

            <button className="w-full bg-brand-ink text-brand-base text-[11px] font-bold uppercase tracking-[0.2em] py-4 hover:bg-brand-accent transition-colors duration-300">
              Apply Filters
            </button>
          </div>
        </aside>

        {/* Gallery Grid */}
        <main className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
            {artworks.map((art, idx) => (
              <motion.article 
                key={art.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative overflow-hidden bg-brand-muted/10 aspect-[3/4] mb-6">
                  <img src={art.image} alt={art.title} className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]" />
                  {art.badge && (
                    <div className="absolute top-4 left-4 bg-brand-base/90 text-brand-ink px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-brand-muted/20">
                      {art.badge}
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-serif mb-3 text-brand-ink">{art.title}</h3>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-[13px] text-brand-ink/70 font-light">{art.artist}</span>
                  <span className="font-medium text-brand-ink">${art.price}</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-brand-ink/50 block w-full border-t border-brand-muted/20 pt-3 mt-1">
                  {art.medium}
                </span>
              </motion.article>
            ))}
          </div>
          
          <div className="mt-24 flex justify-center border-t border-brand-muted/30 pt-16">
            <button className="border border-brand-ink text-brand-ink bg-transparent text-[11px] font-bold uppercase tracking-[0.2em] py-4 px-12 hover:bg-brand-ink hover:text-brand-base transition-colors duration-300">
              Load More Works
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
