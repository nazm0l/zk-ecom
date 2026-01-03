import { motion } from "motion/react";
import CheckingIcon from "../assets/card-icons/checking-icon.svg";
import CuttingIcon from "../assets/card-icons/cutting-icon.svg";
import DyeingIcon from "../assets/card-icons/dyeing-icon.svg";
import IroningIcon from "../assets/card-icons/ironing-icon.svg";
import PackageIcon from "../assets/card-icons/package-icon.svg";
import SnippingIcon from "../assets/card-icons/snipping-icon.svg";
import SewingIcon from "../assets/card-icons/sweing-icon.svg";
import Container from "./common/Container";

const features = [
  {
    id: 1,
    name: "Dyeing",
    icon: DyeingIcon,
    description: "Adding color to biodegradable materials",
  },
  {
    id: 2,
    name: "Cutting",
    icon: CuttingIcon,
    description: "Eco-friendly clothing items for all shapes and sizes",
  },
  {
    id: 3,
    name: "Sewing",
    icon: SewingIcon,
    description:
      "Vouching for the ultimate sturdiness and durability of the fabric",
  },
  {
    id: 4,
    name: "Snipping of thread",
    icon: SnippingIcon,
    description: "A neat edge, a soft and smooth finish",
  },
  {
    id: 5,
    name: "Ironing",
    icon: IroningIcon,
    description: "Ironing it before shipping",
  },
  {
    id: 6,
    name: "Checking",
    icon: CheckingIcon,
    description:
      "Going through each clothing piece to ensure supreme quality standards are met",
  },
  {
    id: 7,
    name: "Package",
    icon: PackageIcon,
    description: "Folding and packing with the utmost care",
  },
];

/* Parent animation */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* Card animation */
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function FeatureCards() {
  return (
    <div className="relative mt-8 md:-mt-10">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              className="relative flex items-center w-full md:w-70 h-62.75 bg-white shadow-[0_0_13.73px_rgba(104,104,104,0.17)] px-4.5 py-6"
            >
              <span className="absolute -top-4 right-1/2 md:right-32 w-9 h-9 rounded-full shadow-md bg-white text-sm text-center px-3 py-2.5 font-bold text-black/60">
                {feature.id}
              </span>

              <div>
                <img src={feature.icon} alt="" className="size-12.5" />
                <h3 className="text-[22px] text-black/60 font-semibold py-4">
                  {feature.name}
                </h3>
                <p className="text-black/40">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
}
