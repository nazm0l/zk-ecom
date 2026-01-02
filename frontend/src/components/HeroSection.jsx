import { motion } from "motion/react";
import VideoIcon from "../assets/play_icon.svg";
import Background from "../assets/video-thumb.png";
import Button from "./common/Button";
import Container from "./common/Container";

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
        <div className="relative w-full md:w-3xl z-10 h-full flex flex-col justify-center items-start py-20 md:py-0">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="text-base md:text-xl text-white/60 mb-1"
          >
            Elevate Your Band With
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-[56px] font-bold text-white mb-2.5"
          >
            High-Quality Garments. <br /> Ethically Made.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-base md:text-lg text-white/60 mb-7"
          >
            At Zaheen Knitwear Ltd., we pride ourselves on being your reliable
            partner for apparel production. Our commitment to ethical
            manufacturing ensures that every garment is crafted with care and
            integrity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex gap-4"
          >
            <Button>Contact Us</Button>
            <Button variant="secondary">Learn More</Button>
          </motion.div>
        </div>
        <div className="z-10 hidden md:flex items-center justify-end cursor-pointer">
          <motion.img
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            transition={{ duration: 0.5 }}
            src={VideoIcon}
            alt="Video Icon"
            className="size-32"
          />
        </div>
      </Container>
    </section>
  );
}
