import { motion } from "motion/react";
import bgPattern from "../assets/bg-pattern.png";
import clothes from "../assets/clothes.png";
import Button from "./common/Button";
import Container from "./common/Container";

export default function CustomProjectSection() {
  return (
    <div className="bg-secondary/10 py-6 lg:py-6 min-h-100 lg:h-146.5">
      <Container className="flex items-center h-full">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-3 w-full">
          <motion.div
            style={{
              backgroundImage: `url(${bgPattern})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              repeat: "no-repeat",
            }}
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="px-6 sm:px-8 lg:px-12 w-full lg:w-179 py-8 lg:mt-10"
          >
            <span className="inline-block border border-secondary rounded-full text-secondary px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base">
              Process
            </span>
            <h4 className="text-xl sm:text-2xl lg:text-3xl font-medium mt-4 lg:mt-0.5 mb-3">
              Do You Want Custom Project With Textilery? Contact Us Now
            </h4>
            <p className="text-sm sm:text-base text-black/40 mb-4 lg:mb-3.5">
              At Zaheen Knitwear Ltd., we pride ourselves on being your reliable
              partner for apparel production. Our commitment to ethical
              manufacturing ensures that every garment is crafted with care and
              integrity.
            </p>
            <Button
              variant="secondary"
              className="border! border-secondary! text-secondary! w-full sm:w-auto hover:bg-secondary! hover:text-white!"
            >
              Learn More
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full lg:w-auto flex justify-center items-center"
          >
            <img
              src={clothes}
              alt="Custom Project"
              className="w-full max-w-md lg:max-w-none h-auto object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
