import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedTextProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
}

const AnimatedText = ({ children, className = "", as: Tag = "p", delay = 0 }: AnimatedTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Tag ref={ref} className={`overflow-hidden ${className}`}>
      <motion.span
        className="inline-block"
        initial={{ y: "100%", opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      >
        {children}
      </motion.span>
    </Tag>
  );
};

export default AnimatedText;
