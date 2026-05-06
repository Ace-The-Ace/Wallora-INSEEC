import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { artworks } from '../lib/data';
import { CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col lg:flex-row border-b border-brand-muted/30">
        <div className="flex-1 flex flex-col justify-center px-6 lg:px-16 xl:px-24 py-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl xl:text-8xl font-serif text-brand-ink leading-[1.05] mb-6 tracking-tight"
          >
            Give Your Walls a Voice
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg lg:text-xl text-brand-ink/80 max-w-md mb-12 font-light leading-relaxed"
          >
            Des posters et affiches design pour créer un intérieur qui vous ressemble.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/collections" className="inline-block bg-brand-ink text-brand-base px-10 py-5 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-brand-accent transition-colors duration-300">
              Découvrir la collection
            </Link>
          </motion.div>
        </div>
        <div className="flex-1 relative min-h-[50vh] lg:min-h-full overflow-hidden bg-brand-muted/10 hidden md:block">
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" 
            alt="Gallery Interior" 
            className="absolute inset-0 w-full h-full object-cover origin-center"
          />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 px-6 bg-brand-muted/10 border-b border-brand-muted/30 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl xl:text-6xl font-serif mb-8 text-brand-ink leading-tight"
          >
            Des murs vides, une décoration impersonnelle
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg lg:text-xl text-brand-ink/70 leading-relaxed max-w-3xl mx-auto font-light"
          >
            Beaucoup d'intérieurs manquent de personnalité. Les murs restent souvent blancs,
            neutres ou décorés avec des images sans vraie cohérence. Pourtant, une affiche bien
            choisie peut immédiatement changer l'ambiance d'une pièce.
          </motion.p>
        </div>
      </section>

      {/* Intro to Gallery */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-serif mb-8 text-brand-ink">Une affiche, une ambiance</h2>
        <p className="text-lg text-brand-ink/70 leading-relaxed max-w-3xl mx-auto font-light mb-16">
          Wallora propose des posters premium qui permettent de créer facilement une
          décoration forte, moderne et personnelle. Chaque visuel est pensé pour donner
          du caractère à un salon, une chambre, un bureau ou un espace créatif.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 lg:px-16 xl:px-24 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
          {artworks.map((art, idx) => (
            <motion.div 
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative overflow-hidden bg-brand-muted/10 aspect-[3/4] mb-6">
                <img 
                  src={art.image} 
                  alt={art.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]" 
                />
                {art.badge && (
                  <div className="absolute top-4 left-4 bg-brand-base/90 text-brand-ink px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-brand-muted/20">
                    {art.badge}
                  </div>
                )}
              </div>
              <h3 className="text-2xl font-serif mb-2 text-brand-ink">{art.title}</h3>
              <p className="text-[13px] text-brand-ink/60 mb-2 uppercase tracking-wider">{art.medium} • {art.dimensions}</p>
              <p className="font-medium text-brand-ink">${art.price}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-24 text-center">
          <Link to="/collections" className="inline-block border border-brand-ink text-brand-ink px-12 py-5 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-brand-ink hover:text-brand-base transition-colors duration-300">
            View Complete Collection
          </Link>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-32 px-6 bg-brand-muted/10 border-y border-brand-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif text-center mb-16 text-brand-ink">Pourquoi choisir Wallora?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              "Collections modernes et variées",
              "Posters imprimés en haute qualité",
              "Designs pensés pour tous les styles d'intérieur",
              "Formats adaptés aux chambres, bureaux et salons",
              "Une décoration accessible, simple et expressive"
            ].map((text, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle2 className="text-brand-ink mt-1 flex-shrink-0" size={20} strokeWidth={1.5} />
                <p className="text-brand-ink/80 text-lg font-light leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-6xl font-serif mb-8 text-brand-ink">Prêt à transformer vos murs?</h2>
        <p className="text-lg text-brand-ink/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Explorez nos collections et trouvez l'affiche qui raconte votre univers.
        </p>
        <Link to="/collections" className="inline-block bg-brand-ink text-brand-base px-10 py-5 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-brand-accent transition-colors duration-300">
          Voir les affiches
        </Link>
      </section>
    </div>
  );
}
