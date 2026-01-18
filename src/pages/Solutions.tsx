import { useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";

interface SolutionCard {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  status: "live" | "beta" | "experiment";
}

const solutions: SolutionCard[] = [
  {
    id: 1,
    title: "Neural Interface Dashboard",
    description: "Real-time monitoring and control system for AI model performance with predictive analytics and automated optimization suggestions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["AI/ML", "Dashboard", "Analytics"],
    status: "live",
  },
  {
    id: 2,
    title: "Quantum Compute Simulator",
    description: "Browser-based quantum circuit simulator with visual gate manipulation, state analysis, and educational tutorials.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
    tags: ["Quantum", "Simulation", "WebGL"],
    status: "beta",
  },
  {
    id: 3,
    title: "Decentralized Identity",
    description: "Self-sovereign identity management using blockchain with zero-knowledge proof integration for privacy-preserving verification.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    tags: ["Web3", "Privacy", "Identity"],
    status: "live",
  },
  {
    id: 4,
    title: "Edge ML Platform",
    description: "Deploy and manage machine learning models at the edge with real-time inference capabilities and automatic model optimization.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    tags: ["Edge", "ML", "IoT"],
    status: "experiment",
  },
  {
    id: 5,
    title: "Voice AI Assistant SDK",
    description: "Build conversational AI experiences with our voice-first SDK featuring natural language understanding and multi-language support.",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop",
    tags: ["Voice", "NLU", "SDK"],
    status: "beta",
  },
  {
    id: 6,
    title: "Federated Learning Framework",
    description: "Privacy-preserving machine learning that trains models across decentralized data without exposing raw information.",
    image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=600&h=400&fit=crop",
    tags: ["Privacy", "ML", "Distributed"],
    status: "experiment",
  },
];

const statusColors = {
  live: "bg-secondary text-secondary-foreground",
  beta: "bg-accent text-accent-foreground",
  experiment: "bg-primary/20 text-primary",
};

const Solutions = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <PageLayout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Live Prototypes & Experiments"
            subtitle="Exploring the frontiers of technology through hands-on experimentation and rapid prototyping. Each project represents our commitment to pushing boundaries."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="h-full bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                  {/* Image */}
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full capitalize ${statusColors[solution.status]}`}>
                        {solution.status}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {solution.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                      {solution.title}
                    </h3>

                    <p className="text-muted-foreground mb-5 line-clamp-3">
                      {solution.description}
                    </p>

                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                    >
                      View Demo
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Solutions;
