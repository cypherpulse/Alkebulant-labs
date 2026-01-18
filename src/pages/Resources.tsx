import { useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, BookOpen, Video, Download, ExternalLink } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/SectionTitle";

interface Resource {
  id: number;
  title: string;
  description: string;
  type: "paper" | "docs" | "video" | "download";
  link: string;
  date?: string;
}

const resources: Resource[] = [
  {
    id: 1,
    title: "Edge ML Architecture Guide",
    description: "Comprehensive guide on designing ML systems for edge deployment. Covers architecture patterns, optimization techniques, and deployment strategies.",
    type: "docs",
    link: "#",
  },
  {
    id: 2,
    title: "Quantum Computing Primer",
    description: "Introduction to quantum computing concepts for software developers. No physics background required.",
    type: "paper",
    link: "#",
    date: "Dec 2025",
  },
  {
    id: 3,
    title: "Building with ZK Proofs",
    description: "Video series on implementing zero-knowledge proofs in applications. From theory to production.",
    type: "video",
    link: "#",
  },
  {
    id: 4,
    title: "Labs Starter Kit",
    description: "Boilerplate code and templates to kickstart your experiments. Includes our recommended toolchain.",
    type: "download",
    link: "#",
  },
  {
    id: 5,
    title: "Federated Learning Whitepaper",
    description: "Technical deep-dive into our federated learning framework architecture and privacy guarantees.",
    type: "paper",
    link: "#",
    date: "Nov 2025",
  },
  {
    id: 6,
    title: "Voice SDK Documentation",
    description: "Complete API reference and integration guides for our conversational AI SDK.",
    type: "docs",
    link: "#",
  },
  {
    id: 7,
    title: "Neural Network Visualization Tutorial",
    description: "Step-by-step video guide to using our neural-viz toolkit for model debugging and education.",
    type: "video",
    link: "#",
  },
  {
    id: 8,
    title: "Identity Verification SDK",
    description: "Privacy-first identity verification components ready to integrate into your application.",
    type: "download",
    link: "#",
  },
];

const iconMap = {
  paper: FileText,
  docs: BookOpen,
  video: Video,
  download: Download,
};

const typeLabels = {
  paper: "Research Paper",
  docs: "Documentation",
  video: "Video Tutorial",
  download: "Download",
};

const Resources = () => {
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
            title="Resources"
            subtitle="Documentation, research papers, tutorials, and tools to help you explore and build with our technology."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => {
              const Icon = iconMap[resource.type];
              
              return (
                <motion.a
                  key={resource.id}
                  href={resource.link}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="group block p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                      <Icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-muted-foreground">
                      {typeLabels[resource.type]}
                    </span>
                    {resource.date && (
                      <>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{resource.date}</span>
                      </>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-accent transition-colors">
                    {resource.title}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {resource.description}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Resources;
