import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="w-full">
      {/* Introduction */}
      <section className="px-6 lg:px-16 xl:px-24 py-32 text-center max-w-5xl mx-auto border-b border-brand-muted/30">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl lg:text-7xl xl:text-8xl font-serif mb-10 text-brand-ink tracking-tight"
        >
          À propos de Wallora
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg lg:text-xl text-brand-ink/70 leading-relaxed font-light max-w-3xl mx-auto"
        >
          Wallora est née d'une idée simple : un mur ne doit pas seulement remplir un espace, il doit raconter 
          quelque chose. Nos affiches permettent à chacun d'exprimer son style, ses passions et son identité à 
          travers une décoration accessible et esthétique.
        </motion.p>
      </section>

      <section className="border-b border-brand-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 xl:px-24 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-ink/50 mb-6 block">Our Approach</span>
            <h2 className="text-4xl lg:text-5xl font-serif mb-8 text-brand-ink tracking-tight">Curation & Intent</h2>
            <p className="text-lg text-brand-ink/70 mb-6 leading-relaxed font-light">
              We established Wallora to bridge the gap between traditional gallery representation and the digital 
              frontier. Our curation process is rigorous, selecting pieces that demonstrate profound technical 
              skill and compelling narrative depth.
            </p>
            <p className="text-lg text-brand-ink/70 leading-relaxed font-light">
              By removing the visual noise typical of online commerce, we offer collectors an environment of 
              calm focus—a true digital gallery experience that honors the artist's intent and elevates the act 
              of collecting.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <img src="https://images.unsplash.com/photo-1542226601-bc82e276ae0a?auto=format&fit=crop&q=80&w=1000" alt="Gallery Interior" className="w-full aspect-[4/5] lg:aspect-[3/4] object-cover" />
          </div>
        </div>
      </section>

      {/* For Artists Section */}
      <section className="bg-brand-ink text-brand-base">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 xl:px-24 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1000" alt="Artist tools" className="w-full aspect-[4/5] lg:aspect-[3/4] object-cover" />
          </div>
          <div className="lg:pl-8">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-base/50 mb-6 block">Opportunities</span>
            <h2 className="text-4xl lg:text-5xl font-serif mb-8 tracking-tight">For Artists</h2>
            <p className="text-lg text-brand-base/80 mb-12 leading-relaxed font-light">
              We are continually seeking visionary artists whose work aligns with our curatorial ethos. 
              If you are interested in representation or showcasing a specific collection, we invite you 
              to submit your portfolio for review.
            </p>
            <button className="bg-brand-base text-brand-ink px-10 py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-brand-accent hover:text-brand-base transition-colors duration-300">
              Submission Guidelines
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 xl:px-24 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="text-4xl lg:text-5xl font-serif mb-16 text-brand-ink tracking-tight">Contact</h2>
            <div className="mb-12">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-ink/50 mb-4 border-b border-brand-muted/30 pb-2">General Inquiries</h3>
              <p className="text-lg text-brand-ink/80 font-light mt-4">contact@wallora.com</p>
            </div>
            <div className="mb-12">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-ink/50 mb-4 border-b border-brand-muted/30 pb-2">Gallery Location</h3>
              <p className="text-lg text-brand-ink/80 font-light mt-4 leading-relaxed">
                124 Minimalist Avenue<br/>
                Design District, NY 10012<br/>
                <span className="italic mt-2 block text-brand-ink/50">By Appointment Only</span>
              </p>
            </div>
          </div>
          <div>
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-brand-ink/60 mb-4 mt-2">Name</label>
                <input type="text" className="w-full bg-transparent border-b border-brand-muted/50 focus:border-brand-ink focus:outline-none py-3 transition-colors text-brand-ink text-lg font-light placeholder:text-brand-muted" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-brand-ink/60 mb-4">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-brand-muted/50 focus:border-brand-ink focus:outline-none py-3 transition-colors text-brand-ink text-lg font-light placeholder:text-brand-muted" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-brand-ink/60 mb-4">Message</label>
                <textarea rows={5} className="w-full bg-transparent border-b border-brand-muted/50 focus:border-brand-ink focus:outline-none py-3 transition-colors text-brand-ink text-lg font-light placeholder:text-brand-muted resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <div className="pt-6">
                <button className="bg-brand-ink text-brand-base w-full lg:w-auto px-12 py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-brand-accent transition-colors duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
