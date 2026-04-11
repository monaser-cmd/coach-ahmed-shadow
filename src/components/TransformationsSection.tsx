import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

import t1 from "@/assets/transform-1.jpeg";
import t2 from "@/assets/transform-2.jpeg";
import t3 from "@/assets/transform-3.jpeg";
import t4 from "@/assets/transform-4.jpeg";
import t5 from "@/assets/transform-5.jpeg";
import t6 from "@/assets/transform-6.jpeg";
import t7 from "@/assets/transform-7.jpeg";
import t8 from "@/assets/transform-8.jpeg";
import t9 from "@/assets/transform-9.jpeg";

const transformations = [t1, t2, t3, t4, t5, t6, t7, t8, t9];

const TransformationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section id="transformations" className="section-padding relative">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.2em] text-primary uppercase mb-3">Results</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Client <span className="text-gradient">Transformations</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Carousel */}
          <div ref={emblaRef} className="overflow-hidden rounded-2xl">
            <div className="flex">
              {transformations.map((src, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_80%] md:flex-[0_0_60%] px-2">
                  <div className="neon-border rounded-xl overflow-hidden">
                    <img
                      src={src}
                      alt={`Client transformation ${i + 1}`}
                      loading="lazy"
                      className="w-full h-auto object-cover aspect-square"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {transformations.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === selectedIndex ? "bg-primary scale-125" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.instagram.com/ahmedshady10_official/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 font-display text-sm tracking-wider neon-border rounded-lg text-foreground hover:bg-primary/10 transition-all"
          >
            See more on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformationsSection;
