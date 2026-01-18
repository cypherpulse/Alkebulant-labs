import { useEffect } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink, Github } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";

interface Repository {
  id: number;
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  languageColor: string;
  topics: string[];
}

const repositories: Repository[] = [
  {
    id: 1,
    name: "quantum-sim",
    description: "A lightweight quantum circuit simulator for the browser with WebGL acceleration. Perfect for education and experimentation.",
    stars: 2340,
    forks: 189,
    language: "TypeScript",
    languageColor: "#3178c6",
    topics: ["quantum", "simulation", "webgl", "education"],
  },
  {
    id: 2,
    name: "edge-ml-runtime",
    description: "Efficient ML runtime for edge devices with WebAssembly and ONNX support. Run models anywhere with minimal footprint.",
    stars: 1890,
    forks: 156,
    language: "Rust",
    languageColor: "#dea584",
    topics: ["machine-learning", "webassembly", "edge", "onnx"],
  },
  {
    id: 3,
    name: "zk-identity",
    description: "Zero-knowledge proof library for privacy-preserving identity verification. Built for the modern web.",
    stars: 1456,
    forks: 98,
    language: "Go",
    languageColor: "#00add8",
    topics: ["cryptography", "privacy", "identity", "zk-proofs"],
  },
  {
    id: 4,
    name: "neural-viz",
    description: "Interactive neural network visualization toolkit for education and debugging. See your models come to life.",
    stars: 987,
    forks: 67,
    language: "Python",
    languageColor: "#3572A5",
    topics: ["visualization", "deep-learning", "education", "pytorch"],
  },
  {
    id: 5,
    name: "voice-sdk",
    description: "Build conversational AI experiences with natural language understanding. Multi-platform, multi-language.",
    stars: 756,
    forks: 54,
    language: "TypeScript",
    languageColor: "#3178c6",
    topics: ["voice", "nlu", "sdk", "conversational-ai"],
  },
  {
    id: 6,
    name: "federated-learn",
    description: "Privacy-preserving federated learning framework. Train models without centralizing data.",
    stars: 623,
    forks: 41,
    language: "Python",
    languageColor: "#3572A5",
    topics: ["federated-learning", "privacy", "distributed", "ml"],
  },
];

const OpenSource = () => {
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
            title="Open Source"
            subtitle="Tools and experiments we share with the community. Built with love, maintained with care. Contributions welcome!"
          />

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-12"
          >
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
              asChild
            >
              <a href="https://github.com/alkebulant-labs" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                View All on GitHub
              </a>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repositories.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                    <Button variant="ghost" size="icon" className="rounded-full opacity-0 group-hover:opacity-100 transition-opacity" asChild>
                      <a href={`https://github.com/alkebulant-labs/${repo.name}`} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>

                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {repo.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {repo.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

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
                      asChild
                    >
                      <a href={`https://github.com/alkebulant-labs/${repo.name}`} target="_blank" rel="noopener noreferrer">
                        View Repo
                      </a>
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

export default OpenSource;
