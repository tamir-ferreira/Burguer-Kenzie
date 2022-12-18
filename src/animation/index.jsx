import { motion } from "framer-motion";
import { keyframes } from "styled-components";

export const AnimationOpen = keyframes`
  from{
    transform: translateY(-100vh);
  }

  to{
    transform: translateY(0);
  }
`;

export const AnimationClose = keyframes`
  from{
    transform: translateY(0);
  }

  to{
    transform: translateY(-100vh);
  }
`;

export const AnimBlur = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2.5 }}
  >
    {children}
  </motion.div>
);

export const AnimZoom = ({ children }) => (
  <motion.div
    animate={{
      scale: [0, 1],
      opacity: [0, 1],
      rotate: [0, 360],
    }}
    transition={{ duration: 1, ease: "easeIn" }}
  >
    {children}
  </motion.div>
);

export const AnimSlideLeft = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ translateX: "100vw" }}
    animate={{ translateX: 0 }}
    transition={{ duration: 1.5, delay: delay, ease: "easeIn" }}
  >
    {children}
  </motion.div>
);

export const AnimSlideRight = ({ children, delay }) => (
  <motion.div
    initial={{ translateX: "-100vw" }}
    animate={{ translateX: 0 }}
    transition={{ duration: 1.5, delay: delay, ease: "easeIn" }}
  >
    {children}
  </motion.div>
);

export const AnimSlideDown = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ translateY: "-100vh", opacity: 0 }}
    animate={{ translateY: 0, opacity: 1 }}
    transition={{ duration: 1, delay: delay, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

export const AnimSlideUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ translateY: 0, opacity: 0.3 }}
    animate={{ translateY: `-150vh`, opacity: 0 }}
    transition={{ duration: 1, delay: delay, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

export const AnimPump = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      default: {
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      },
      scale: {
        type: "spring",
        damping: 5,
        stiffness: 100,
        restDelta: 0.001,
      },
    }}
  >
    {children}
  </motion.div>
);
