import { useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/SectionTitle";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  skills: string[];
  linkedin?: string;
  twitter?: string;
  github?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Amara Okafor",
    role: "Lab Director",
    bio: "Former research lead at DeepMind. Passionate about making advanced AI accessible and ethical. Published 40+ papers on ML and quantum computing.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    skills: ["AI/ML", "Quantum Computing", "Research Leadership"],
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Lead Systems Engineer",
    bio: "10+ years building high-performance systems. Previously at Cloudflare and Fastly. Rust evangelist and WebAssembly pioneer.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    skills: ["Rust", "Systems Design", "WebAssembly"],
    linkedin: "#",
    github: "#",
  },
  {
    id: 3,
    name: "Zara Mbeki",
    role: "Principal Research Scientist",
    bio: "Cryptography expert specializing in zero-knowledge proofs. Former academic at MIT. Building the future of privacy-first applications.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    skills: ["Cryptography", "Privacy", "ZK Proofs"],
    twitter: "#",
    github: "#",
  },
  {
    id: 4,
    name: "Kai Tanaka",
    role: "Creative Technologist",
    bio: "Bridging art and technology. Previously led design engineering at Figma. Loves making complex things beautiful and intuitive.",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop&crop=face",
    skills: ["Visualization", "WebGL", "Design Systems"],
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    id: 5,
    name: "Dr. Elena Vasquez",
    role: "ML Research Lead",
    bio: "Specializing in federated learning and privacy-preserving ML. Former Google Brain researcher. Published extensively on distributed systems.",
    avatar: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop&crop=face",
    skills: ["Federated Learning", "PyTorch", "Privacy ML"],
    linkedin: "#",
    github: "#",
  },
  {
    id: 6,
    name: "Jordan Williams",
    role: "Platform Engineer",
    bio: "Infrastructure and DevOps expert. Built platforms at scale for Spotify and Stripe. Kubernetes contributor and open source advocate.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    skills: ["Kubernetes", "DevOps", "Cloud Architecture"],
    linkedin: "#",
    github: "#",
  },
];

const Team = () => {
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
            title="The Builders"
            subtitle="A diverse team of researchers, engineers, and creators pushing the boundaries of technology together."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="p-6 text-center">
                    <div className="relative mb-5 mx-auto w-28 h-28">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="relative w-full h-full rounded-full object-cover border-4 border-card group-hover:border-primary/50 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>

                    <h3 className="text-xl font-semibold text-card-foreground mb-1">
                      {member.name}
                    </h3>
                    
                    <p className="text-sm text-primary mb-3">{member.role}</p>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {member.bio}
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 mb-5">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-center gap-3">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          className="p-2 rounded-full text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          className="p-2 rounded-full text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all"
                          aria-label={`${member.name}'s Twitter`}
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          className="p-2 rounded-full text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all"
                          aria-label={`${member.name}'s GitHub`}
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
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

export default Team;
