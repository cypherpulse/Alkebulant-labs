import { motion } from "framer-motion";
import { FileText, BookOpen, Video, Download } from "lucide-react";
import SectionTitle from "./SectionTitle";

interface Resource {
  id: number;
  title: string;
  description: string;
  type: "paper" | "docs" | "video" | "download";
  link: string;
}

const resources: Resource[] = [
  {
    id: 1,
    title: "Edge ML Architecture Guide",
    description: "Comprehensive guide on designing ML systems for edge deployment.",
    type: "docs",
    link: "#",
  },
  {
    id: 2,
    title: "Quantum Computing Primer",
    description: "Introduction to quantum computing concepts for software developers.",
    type: "paper",
    link: "#",
  },
  {
    id: 3,
    title: "Building with ZK Proofs",
    description: "Video series on implementing zero-knowledge proofs in applications.",
    type: "video",
    link: "#",
  },
  {
    id: 4,
    title: "Labs Starter Kit",
    description: "Boilerplate code and templates to kickstart your experiments.",
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

const Resources = () => {
  return (
    <section id="resources" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Resources"
          subtitle="Documentation, papers, and tools to help you explore and build."
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group block p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 mb-4 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <Icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>

                <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-accent transition-colors">
                  {resource.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {resource.description}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Resources;
