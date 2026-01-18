import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { Button } from "./ui/button";

interface Repository {
  id: number;
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  languageColor: string;
}

const repositories: Repository[] = [
  {
    id: 1,
    name: "quantum-sim",
    description: "A lightweight quantum circuit simulator for the browser with WebGL acceleration.",
    stars: 2340,
    forks: 189,
    language: "TypeScript",
    languageColor: "#3178c6",
  },
  {
    id: 2,
    name: "edge-ml-runtime",
    description: "Efficient ML runtime for edge devices with WebAssembly and ONNX support.",
    stars: 1890,
    forks: 156,
    language: "Rust",
    languageColor: "#dea584",
  },
  {
    id: 3,
    name: "zk-identity",
    description: "Zero-knowledge proof library for privacy-preserving identity verification.",
    stars: 1456,
    forks: 98,
    language: "Go",
    languageColor: "#00add8",
  },
  {
    id: 4,
    name: "neural-viz",
    description: "Interactive neural network visualization toolkit for education and debugging.",
    stars: 987,
    forks: 67,
    language: "Python",
    languageColor: "#3572A5",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const OpenSource = () => {
  return (
    <section id="open-source" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Open Source"
          subtitle="Tools and experiments we share with the community. Built with love, maintained with care."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {repositories.map((repo) => (
            <motion.div
              key={repo.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="h-full p-6 bg-card rounded-xl border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <GitFork className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-card-foreground group-hover:text-secondary transition-colors">
                      {repo.name}
                    </h3>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>

                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {repo.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: repo.languageColor }}
                      />
                      {repo.language}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {repo.stars.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {repo.forks}
                    </span>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-secondary group-hover:text-secondary-foreground group-hover:border-secondary transition-all"
                  >
                    View Repo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSource;
