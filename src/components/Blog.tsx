import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import SectionTitle from "./SectionTitle";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Edge Computing in AI Applications",
    excerpt: "Exploring how edge computing is revolutionizing the deployment of AI models, reducing latency and enabling real-time inference at scale.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    date: "Jan 15, 2026",
    category: "Research",
  },
  {
    id: 2,
    title: "Building Privacy-First Applications with ZK Proofs",
    excerpt: "A deep dive into implementing zero-knowledge proofs for building applications that protect user privacy without sacrificing functionality.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    date: "Jan 10, 2026",
    category: "Tutorial",
  },
  {
    id: 3,
    title: "Quantum Computing: From Theory to Practice",
    excerpt: "Our journey building a browser-based quantum simulator and the lessons learned about making quantum computing accessible.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
    date: "Jan 5, 2026",
    category: "Case Study",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Insights & Research"
          subtitle="Deep dives into emerging technologies, tutorials, and lessons from our experiments."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-5">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="text-muted-foreground mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-3 gap-2 transition-all">
                Read More
                <ArrowRight className="w-4 h-4" />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
