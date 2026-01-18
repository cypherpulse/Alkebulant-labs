import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/SectionTitle";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Edge Computing in AI Applications",
    excerpt: "Exploring how edge computing is revolutionizing the deployment of AI models, reducing latency and enabling real-time inference at scale. We dive into architecture patterns and real-world implementations.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    category: "Research",
    featured: true,
  },
  {
    id: 2,
    title: "Building Privacy-First Applications with ZK Proofs",
    excerpt: "A deep dive into implementing zero-knowledge proofs for building applications that protect user privacy without sacrificing functionality.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    date: "Jan 10, 2026",
    readTime: "12 min read",
    category: "Tutorial",
  },
  {
    id: 3,
    title: "Quantum Computing: From Theory to Practice",
    excerpt: "Our journey building a browser-based quantum simulator and the lessons learned about making quantum computing accessible.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
    date: "Jan 5, 2026",
    readTime: "10 min read",
    category: "Case Study",
  },
  {
    id: 4,
    title: "Federated Learning: Training Models Without Data Sharing",
    excerpt: "How we're implementing privacy-preserving machine learning that keeps sensitive data where it belongs.",
    image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=600&h=400&fit=crop",
    date: "Dec 28, 2025",
    readTime: "7 min read",
    category: "Research",
  },
  {
    id: 5,
    title: "WebAssembly for High-Performance ML in the Browser",
    excerpt: "Pushing the limits of browser-based machine learning with WebAssembly and our edge ML runtime.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    date: "Dec 20, 2025",
    readTime: "9 min read",
    category: "Tutorial",
  },
  {
    id: 6,
    title: "Designing for Voice-First Interfaces",
    excerpt: "UX principles and technical considerations for building natural conversational AI experiences.",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop",
    date: "Dec 15, 2025",
    readTime: "6 min read",
    category: "Design",
  },
];

const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <PageLayout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Insights & Research"
            subtitle="Deep dives into emerging technologies, tutorials, and lessons from our experiments. Join us on our journey of discovery."
          />

          {/* Featured Post */}
          {featuredPost && (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 group cursor-pointer"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
                      Featured
                    </span>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.article>
          )}

          {/* Regular Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
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

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-2">
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
    </PageLayout>
  );
};

export default Blog;
