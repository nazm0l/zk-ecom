import { Mail } from "lucide-react";
import { motion } from "motion/react";
import CopyIcon from "../../assets/copy-icon.svg";
import LocIcon from "../../assets/loc-icon.svg";
import Logo from "../../assets/logo-main.svg";
import PaymentChannels from "../../assets/paymentbar.png";
import Container from "./Container";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
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

export default function Footer() {
  return (
    <motion.div
      className="bg-[#F7F7F7] py-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <Container>
        <motion.div
          variants={containerVariants}
          className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0"
        >
          <motion.div variants={itemVariants} className="shrink-0">
            <img src={Logo} alt="" className="mb-6 lg:mb-10" />

            <div className="flex flex-col gap-2.5">
              <p className="text-sm text-black/70 flex items-start gap-2.5">
                <img src={LocIcon} alt="" className="mt-0.5 shrink-0" />
                <span>29 SE 2nd Ave, Miami Florida 33131, United States</span>
              </p>

              <p className="text-sm text-black/70 flex items-center gap-2.5 flex-wrap">
                <Mail className="size-4.5 shrink-0" />
                <span>info@zaheen.com</span>
                <img src={CopyIcon} alt="" className="shrink-0" />
              </p>

              <p className="text-[18px] text-black font-bold">
                (+92) 3942 7879
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-12"
          >
            <div>
              <h4 className="text-[16px] font-semibold text-black uppercase mb-5">
                Pages
              </h4>
              <ul className="flex flex-col gap-2.5 text-sm text-black font-light">
                <li>About Us</li>
                <li>Our Services</li>
                <li>Our Products</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[16px] font-semibold text-black uppercase mb-5">
                Information
              </h4>
              <ul className="flex flex-col gap-2.5 text-sm text-black font-light">
                <li>My Account</li>
                <li>Corporate Enquires</li>
                <li>FAQs</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="my-7.5">
          <p className="text-lg font-bold text-black uppercase mb-2.5">
            Payment Channels
          </p>
          <img src={PaymentChannels} alt="" className="w-full max-w-full" />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-t border-black/20 pt-7.5"
        >
          <p className="text-sm md:text-[16px] font-semibold">
            Copyright ©{" "}
            <span className="text-[#FFAD33]">360D Soul Limited</span> 2025. All
            rights reserved.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
            <p className="text-sm md:text-[16px] text-[#444444] font-medium">
              Terms & Conditions
            </p>
            <p className="text-sm md:text-[16px] text-[#444444] font-medium">
              Privacy Policy
            </p>
            <p className="text-sm md:text-[16px] text-[#444444] font-medium">
              Refund Policy
            </p>
          </div>
        </motion.div>
      </Container>
    </motion.div>
  );
}
