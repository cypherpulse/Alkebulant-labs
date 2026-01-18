import { motion } from "framer-motion";

interface LogoProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

const Logo = ({ size = 80, className = "", animated = true }: LogoProps) => {
  const circles = [
    { r: 35, delay: 0 },
    { r: 28, delay: 0.1 },
    { r: 21, delay: 0.2 },
    { r: 14, delay: 0.3 },
  ];

  const MotionWrapper = animated ? motion.svg : "svg";

  return (
    <MotionWrapper
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...(animated && {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.6, ease: "easeOut" }
      })}
    >
      {circles.map((circle, i) => (
        <motion.circle
          key={i}
          cx="40"
          cy="40"
          r={circle.r}
          stroke="url(#gradient)"
          strokeWidth="2"
          fill="none"
          initial={animated ? { pathLength: 0, opacity: 0 } : undefined}
          animate={animated ? { pathLength: 1, opacity: 1 } : undefined}
          transition={animated ? { duration: 0.8, delay: circle.delay, ease: "easeInOut" } : undefined}
        />
      ))}
      
      {/* Stylized A */}
      <motion.path
        d="M40 22L52 58H46L44 52H36L34 58H28L40 22ZM42 47L40 38L38 47H42Z"
        fill="url(#gradient)"
        initial={animated ? { opacity: 0, y: 5 } : undefined}
        animate={animated ? { opacity: 1, y: 0 } : undefined}
        transition={animated ? { duration: 0.5, delay: 0.5 } : undefined}
      />
      
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(12, 75%, 60%)" />
          <stop offset="50%" stopColor="hsl(175, 55%, 45%)" />
          <stop offset="100%" stopColor="hsl(200, 75%, 25%)" />
        </linearGradient>
      </defs>
    </MotionWrapper>
  );
};

export default Logo;
