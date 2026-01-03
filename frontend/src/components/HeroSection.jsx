import { motion } from "motion/react";
import VideoIcon from "../assets/play_icon.svg";
import Background from "../assets/video-thumb.png";
import Button from "./common/Button";
import Container from "./common/Container";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function HeroSection() {
  return (
    <section
      className="relative min-h-fit md:h-180.5"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/10" />

      <Container className="h-full flex items-center justify-between">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative w-full md:w-3xl z-10 h-full flex flex-col justify-center items-start py-20 md:py-0"
        >
          <motion.p
            variants={itemVariants}
            className="text-base md:text-xl text-white/60 mb-1"
          >
            Elevate Your Brand With
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-[56px] font-bold text-white mb-2.5"
          >
            High-Quality Garments. <br /> Ethically Made.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-white/60 mb-7"
          >
            At Zaheen Knitwear Ltd., we pride ourselves on being your reliable
            partner for apparel production. Our commitment to ethical
            manufacturing ensures that every garment is crafted with care and
            integrity.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4">
            <Button>Contact Us</Button>
            <Button variant="secondary">Learn More</Button>
          </motion.div>
        </motion.div>

        <div className="z-10 hidden md:flex items-center justify-end cursor-pointer">
          <motion.img
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            src={VideoIcon}
            alt="Video Icon"
            className="size-32"
          />
        </div>
      </Container>
    </section>
  );
}
