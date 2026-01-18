import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 border-t border-border bg-card"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Logo size={32} animated={false} />
            <div>
              <p className="font-semibold text-foreground">Alkebulant Labs</p>
              <p className="text-sm text-muted-foreground">
                © 2026 Alkebulant Labs – Part of Alkebulant
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
