import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";
import SectionTitle from "./SectionTitle";

interface TeamMember {
  id: number;
  name: string;
  role: string;
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
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    skills: ["AI/ML", "Quantum Computing", "Research"],
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Lead Engineer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    skills: ["Systems", "Rust", "WebAssembly"],
    linkedin: "#",
    github: "#",
  },
  {
    id: 3,
    name: "Zara Mbeki",
    role: "Research Scientist",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    skills: ["Cryptography", "Privacy", "ZK Proofs"],
    twitter: "#",
    github: "#",
  },
  {
    id: 4,
    name: "Kai Tanaka",
    role: "Creative Technologist",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop&crop=face",
    skills: ["Visualization", "WebGL", "Design"],
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="The Builders"
          subtitle="A diverse team of researchers, engineers, and creators pushing boundaries together."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mb-6 mx-auto w-32 h-32">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="relative w-full h-full rounded-full object-cover border-4 border-card group-hover:border-primary/50 transition-all duration-300"
                  loading="lazy"
                />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              
              <p className="text-sm text-primary mb-3">{member.role}</p>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
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
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    className="p-2 rounded-full text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    className="p-2 rounded-full text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
