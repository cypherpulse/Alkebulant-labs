import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink, Github, Search, ChevronDown } from "lucide-react";
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

interface Repository {
  id: number;
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  languageColor: string;
  topics: string[];
  githubUrl: string;
}

const repositories: Repository[] = [
  {
    id: 1,
    name: "NEUR",
    description: "NEUR is an ERC20 token designed to reward AI agents and autonomous systems on the Base network. This token implements a controlled supply model where tokens are minted on-demand by the owner only when value is created through agent actions, tasks, or contributions.",
    stars: 0,
    forks: 0,
    language: "Solidity",
    languageColor: "#AA6746",
    topics: ["erc20", "ai", "base", "token", "autonomous"],
    githubUrl: "https://github.com/cypherpulse/Neuron.git",
  },
  {
    id: 2,
    name: "CypherBTC",
    description: "CypherBTC is an educational fungible token smart contract built on the Stacks blockchain using Clarity 4. This project demonstrates the implementation of a custom token called CypherBTC (symbol: cBTC) that adheres to the SIP-010 standard for fungible tokens.",
    stars: 0,
    forks: 0,
    language: "Clarity",
    languageColor: "#5546FF",
    topics: ["stacks", "clarity", "sip-010", "fungible-token", "educational"],
    githubUrl: "https://github.com/cypherpulse/CypherBTC.git",
  },
  {
    id: 3,
    name: "dualPay",
    description: "A decentralized marketplace on the Stacks blockchain enabling secure peer-to-peer trading with multi-currency support (STX & SBTC) through Clarity smart contracts.",
    stars: 0,
    forks: 0,
    language: "Clarity",
    languageColor: "#5546FF",
    topics: ["stacks", "marketplace", "p2p", "trading", "multicurrency"],
    githubUrl: "https://github.com/cypherpulse/dualPay.git",
  },
  {
    id: 4,
    name: "POSBasePay",
    description: "A decentralized point-of-sale (POS) payment system built on the Base blockchain, featuring a secure payment vault contract, WalletConnect QR code generation for customer scanning, real-time payment detection, and a user-friendly merchant interface for instant withdrawals by authorized addresses only.",
    stars: 0,
    forks: 0,
    language: "Solidity",
    languageColor: "#AA6746",
    topics: ["pos", "payments", "base", "walletconnect", "merchant"],
    githubUrl: "https://github.com/cypherpulse/POSBasePay.git",
  },
  {
    id: 5,
    name: "DeFi-Stablecoin-Genesis",
    description: "DeFi Stablecoin Genesis is a decentralized stablecoin implementation built on the Base blockchain. This project leverages Solidity for smart contract development, OpenZeppelin for secure and audited contract libraries, and Foundry as the development toolkit for testing, deployment, and interaction with Ethereum-compatible blockchains.",
    stars: 0,
    forks: 0,
    language: "Solidity",
    languageColor: "#AA6746",
    topics: ["defi", "stablecoin", "base", "openzeppelin", "foundry"],
    githubUrl: "https://github.com/cypherpulse/DeFi-Stablecoin-Genesis.git",
  },
  {
    id: 6,
    name: "BatchPay",
    description: "A secure, efficient multi-payment system for payroll on the Base network, enabling batch ETH transfers with employee management and a 0.5% fee structure.",
    stars: 0,
    forks: 0,
    language: "Solidity",
    languageColor: "#AA6746",
    topics: ["batch", "payments", "payroll", "base", "eth"],
    githubUrl: "https://github.com/cypherpulse/BatchPay.git",
  },
];

const filterCategories = [
  "All",
  "Solidity",
  "Clarity",
  "Blockchain",
  "DeFi",
  "AI",
  "Payments"
];

const OpenSource = () => {
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

  const filteredRepositories = useMemo(() => {
    return repositories.filter((repo) => {
      const matchesSearch = repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           repo.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           repo.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()));

      let matchesFilter = selectedFilter === "All";

      if (!matchesFilter) {
        // Define category mappings
        const categoryMappings: { [key: string]: string[] } = {
          "Solidity": ["Solidity"],
          "Clarity": ["Clarity"],
          "Blockchain": ["stacks", "base", "blockchain", "erc20", "sip-010"],
          "DeFi": ["defi", "stablecoin", "payments", "batch"],
          "AI": ["ai", "autonomous"],
          "Payments": ["payments", "pos", "payroll", "merchant"]
        };

        const relevantTags = categoryMappings[selectedFilter] || [];
        matchesFilter = repo.language.toLowerCase().includes(selectedFilter.toLowerCase()) ||
                       repo.topics.some(topic =>
                         relevantTags.some(relevantTag =>
                           topic.toLowerCase().includes(relevantTag.toLowerCase())
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
            title="Open Source"
            subtitle="Tools and experiments we share with the community. Built with love, maintained with care. Contributions welcome!"
          />

          {/* Search and Filter Controls */}
          <div className="mb-16">
            <div className="flex justify-center items-center gap-4 max-w-2xl mx-auto">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search repositories..."
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
                      <a href={repo.githubUrl} target="_blank" rel="noopener noreferrer">
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
