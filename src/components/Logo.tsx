import { motion } from "framer-motion";

interface LogoProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

const Logo = ({ size = 80, className = "", animated = true }: LogoProps) => {
  const MotionWrapper = animated ? motion.div : "div";

  return (
    <MotionWrapper
      className={className}
      {...(animated && {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.6, ease: "easeOut" }
      })}
    >
      <img
        src="/logo.jpg"
        alt="Alkebulant Labs Logo"
        style={{ width: size, height: size }}
        className="object-contain"
      />
    </MotionWrapper>
  );
};

export default Logo;
