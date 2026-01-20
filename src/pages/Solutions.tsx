import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Search, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SolutionCard {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  status: "live" | "beta" | "experiment";
  link: string;
}

const solutions: SolutionCard[] = [
  {
    id: 1,
    title: "Hermes Bridge",
    description: "Hermes Bridge is a secure, production ready cross chain bridge enabling seamless USDC transfers between Ethereum and Stacks blockchains. It provides two core functionalities: (1) Bridge USDC from Ethereum to USDCx on Stacks via Circle's trusted xReserve protocol, and (2) Transfer USDCx between Stacks addresses with full custody and control.",
    image: "https://raw.githubusercontent.com/cypherpulse/Hermes/master/assets/bridge.png",
    tags: ["Cross-chain", "Bridge", "USDC", "Ethereum", "Stacks"],
    status: "live",
    link: "https://hermes-sage.vercel.app/",
  },
  {
    id: 2,
    title: "Z-Agent",
    description: "Z-Agent empowers degens, traders, and buyers on Zora with cutting-edge AI insights to make smarter decisions. Analyze coins, schedule trades, create tokens, and build winning watchlists with our intelligent platform.",
    image: "https://www.alkebulant.com/zorahome.png",
    tags: ["AI", "Trading", "Zora", "Analytics", "Web3"],
    status: "live",
    link: "https://z-agent-frontend.vercel.app/",
  },
  {
    id: 3,
    title: "BatchPay",
    description: "BatchPay is a decentralized application (dApp) designed to facilitate efficient batch payments on the Base blockchain network. This project consists of a Solidity smart contract for handling batch payment logic and a frontend interface for user interaction. The smart contract allows users to execute multiple payment transactions in a single blockchain transaction, reducing gas costs and improving efficiency for bulk transfers.",
    image: "https://github.com/cypherpulse/BatchPay/raw/master/assets/payB.png",
    tags: ["DeFi", "Payments", "Base", "Batch", "Smart Contracts"],
    status: "live",
    link: "https://batch-pay.vercel.app/",
  },
  {
    id: 4,
    title: "POSBasePay",
    description: "A decentralized point-of-sale (POS) payment system built on the Base blockchain, featuring a secure payment vault contract, WalletConnect QR code generation for customer scanning, real-time payment detection, and a user-friendly merchant interface for instant withdrawals by authorized addresses only.",
    image: "https://github.com/cypherpulse/POSBasePay/raw/master/assets/posfrontend.png",
    tags: ["POS", "Payments", "Base", "WalletConnect", "Merchant"],
    status: "live",
    link: "https://basepos.vercel.app/",
  },
  {
    id: 5,
    title: "Couponhub.tech",
    description: "We're on a mission to break barriers and make education free for all. CouponsHub.Tech starts by giving you verified free courses today and we're building the future where knowledge flows without limits tomorrow.",
    image: "https://www.alkebulant.com/couponhub.PNG",
    tags: ["Education", "Free Courses", "Learning", "Accessibility"],
    status: "live",
    link: "https://www.couponhub.tech/",
  },
];

const filterCategories = [
  "All",
  "AI",
  "DeFi",
  "Education",
  "Cross-chain",
  "Trading",
  "Payments",
  "Web3"
];

const statusColors = {
  live: "bg-secondary text-secondary-foreground",
  beta: "bg-accent text-accent-foreground",
  experiment: "bg-primary/20 text-primary",
};

const Solutions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  const filteredSolutions = useMemo(() => {
    return solutions.filter((solution) => {
      const matchesSearch = solution.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           solution.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           solution.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      let matchesFilter = selectedFilter === "All";

      if (!matchesFilter) {
        // Define category mappings
        const categoryMappings: { [key: string]: string[] } = {
          "AI": ["AI", "Analytics"],
          "DeFi": ["DeFi", "Payments", "Batch", "Smart Contracts"],
          "Education": ["Education", "Learning", "Accessibility"],
          "Cross-chain": ["Cross-chain", "Bridge", "Ethereum", "Stacks", "USDC"],
          "Trading": ["Trading", "Zora"],
          "Payments": ["Payments", "POS", "WalletConnect", "Merchant"],
          "Web3": ["Web3", "Blockchain", "Base", "Zora", "Ethereum", "Stacks"]
        };

        const relevantTags = categoryMappings[selectedFilter] || [];
        matchesFilter = solution.tags.some(tag =>
          relevantTags.some(relevantTag =>
            tag.toLowerCase().includes(relevantTag.toLowerCase())
          )
        );
      }

      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, selectedFilter]);

  return (
    <PageLayout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Live Prototypes & Solutions"
            subtitle="Real-world applications built by Alkebulant Labs, showcasing our expertise in blockchain, AI, DeFi, Agritech, BioTech, and educational technology."
          />

          {/* Search and Filter Controls */}
          <div className="mb-16">
            <div className="flex justify-center items-center gap-4 max-w-2xl mx-auto">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filter Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="min-w-[140px] justify-between">
                    {selectedFilter}
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[140px]">
                  {filterCategories.map((category) => (
                    <DropdownMenuItem
                      key={category}
                      onClick={() => setSelectedFilter(category)}
                      className={selectedFilter === category ? "bg-accent" : ""}
                    >
                      {category}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
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
                      asChild
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                    >
                      <a
                        href={solution.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        View Live Demo
                        <ExternalLink className="w-4 h-4 ml-2" />
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

export default Solutions;
