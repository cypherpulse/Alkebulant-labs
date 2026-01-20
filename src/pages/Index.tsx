import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Rocket, Users, Code, BookOpen } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: Rocket,
    title: "Live Prototypes",
    description: "Explore our cutting-edge experiments and proof-of-concept builds.",
    link: "/solutions",
    linkText: "View Solutions",
  },
  {
    icon: Code,
    title: "Open Source",
    description: "Tools and libraries we share with the developer community.",
    link: "/open-source",
    linkText: "Explore Repos",
  },
  {
    icon: BookOpen,
    title: "Research & Insights",
    description: "Deep dives into emerging technologies and methodologies.",
    link: "/blog",
    linkText: "Read Articles",
  },
  {
    icon: Users,
    title: "The Builders",
    description: "Meet the team of researchers and engineers behind the lab.",
    link: "/team",
    linkText: "Meet the Team",
  },
];

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <Hero />

      {/* About Labs Section */}
      <section className="py-24 bg-gradient-to-br from-background to-muted">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Visual comparison */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card p-8 rounded-2xl border border-border shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  <h4 className="font-bold text-foreground text-xl mb-2">Alkebulant.com</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Production solutions</li>
                    <li>Revenue-focused</li>
                    <li>Proven tech stacks</li>
                  </ul>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl border-2 border-accent shadow-2xl hover:shadow-primary/20 transition-all duration-500"
                >
                  <h4 className="font-bold text-foreground text-xl mb-2">Alkebulant Labs</h4>
                  <ul className="space-y-1 text-sm text-foreground/90">
                    <li>Frontier prototypes</li>
                    <li>Open experiments</li>
                    <li>Bleeding-edge tech</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Labs: Fueling Innovation
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Alkebulant Labs is the frontier R&D division of Alkebulant, prototyping tomorrow's breakthroughs in AI‑blockchain hybrids, decentralized health/agri/biotech infrastructure, and next‑gen robotics protocols. We build high‑risk experiments that power the parent company's production solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {/* Top: Landscape Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://res.cloudinary.com/dbczn8b8l/image/upload/v1768767554/yeksl6naddhfhtsnwvio.jpg"
                alt="Labs Technology Experiments"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover max-h-96"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
              {/* Text overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4 drop-shadow-lg">
                  Building For Humanity
                </h2>
              </div>
            </motion.div>

            {/* Bottom: Technology Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { name: "AI & Machine Learning", color: "bg-gradient-to-br from-primary/20 to-primary/10" },
                  { name: "Blockchain & Web3", color: "bg-gradient-to-br from-secondary/20 to-secondary/10" },
                  { name: "IoT & Robotics", color: "bg-gradient-to-br from-accent/20 to-accent/10" },
                  { name: "AR/VR & XR", color: "bg-gradient-to-br from-primary/10 to-secondary/10" },
                  { name: "Quantum Computing", color: "bg-gradient-to-br from-secondary/10 to-accent/10" },
                  { name: "Biotech & Health", color: "bg-gradient-to-br from-accent/10 to-primary/10" },
                  { name: "AgriTech", color: "bg-gradient-to-br from-primary/15 to-accent/15" },
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className={`p-6 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 ${tech.color}`}
                  >
                    <h4 className="font-semibold text-foreground text-center">{tech.name}</h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full glow-primary transition-all duration-300 hover:scale-105"
            >
              <Link to="/solutions">
                See Our Experiments
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-12 md:p-16 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 relative z-10">
              Ready to Collaborate?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8 relative z-10">
              We're always looking for partners, contributors, and curious minds to join us in building the future.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full glow-primary transition-all duration-300 hover:scale-105 relative z-10"
            >
              <Link to="/contact">
                Let's Talk
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
