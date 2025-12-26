import { ArrowRight, Mail, MapPin } from "lucide-react";
import AliPay from "../assets/Vector-1.svg";
import AmazonDrive from "../assets/Vector-2.svg";
import AmazonPay from "../assets/Vector-3.svg";
import AsanaLogo from "../assets/Vector.svg";
import Container from "./common/Container";

const ScrollLogos = [
  {
    name: "Asana",
    logo: AsanaLogo,
  },
  {
    name: "AliPay",
    logo: AliPay,
  },
  {
    name: "Amazon Drive",
    logo: AmazonDrive,
  },
  {
    name: "Amazon Pay",
    logo: AmazonPay,
  },
  {
    name: "Asana",
    logo: AsanaLogo,
  },
  {
    name: "AliPay",
    logo: AliPay,
  },
  {
    name: "Amazon Drive",
    logo: AmazonDrive,
  },
  {
    name: "Amazon Pay",
    logo: AmazonPay,
  },
];

export default function ContactDetailsSection() {
  return (
    <div className="relative bg-white py-6">
      <Container>
        <div className="relative flex flex-col lg:flex-row gap-12">
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex items-center gap-2.5">
              <MapPin className="size-7 text-secondary shrink-0" />
              <div>
                <h4 className="text-secondary font-medium">Location</h4>
                <p className="text-sm text-black/40">
                  Kashimpur, Gazipur Sadar / Gazipur
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="size-7 text-secondary shrink-0" />
              <div>
                <h4 className="text-secondary font-medium">Email</h4>
                <p className="text-sm text-black/40">
                  compliance@danysknitwear.com
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row lg:absolute lg:-top-48 lg:right-0 gap-0">
            <div className="w-full sm:w-auto lg:size-67.5 flex flex-col justify-center gap-2.5 px-6 sm:px-9 py-8 lg:py-0 bg-primary text-white">
              <h3 className="text-xl sm:text-2xl font-semibold">
                Quality Product
              </h3>
              <p className="py-4 text-sm sm:text-base">
                Lorem ipsum dolor sitatu amet consec teturarisa adipiscing elit
                samed.
              </p>
              <div className="flex items-center gap-1.5 cursor-pointer">
                <span>Read More</span>
                <ArrowRight className="size-5 text-white" />
              </div>
            </div>
            <div className="w-full sm:w-auto lg:w-70.25 lg:h-67.5 flex flex-col justify-center gap-2.5 px-6 sm:px-9 py-8 lg:py-0 bg-secondary text-white">
              <h3 className="text-xl sm:text-2xl font-semibold">
                Project Overview
              </h3>
              <p className="text-3xl sm:text-[36px] font-bold py-4">
                35 Millions
              </p>
              <div className="flex items-center gap-1.5 cursor-pointer">
                <span>Read More</span>
                <ArrowRight className="size-5 text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 h-26.25 relative">
          {/* Left gradient overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>

          {/* Right gradient overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="overflow-hidden">
            <div className="flex gap-20 animate-scroll">
              {ScrollLogos.map((logo) => (
                <img
                  key={logo.name}
                  src={logo.logo}
                  alt={logo.name}
                  className="h-7 shrink-0"
                />
              ))}
              {ScrollLogos.map((logo) => (
                <img
                  key={`${logo.name}-duplicate`}
                  src={logo.logo}
                  alt={logo.name}
                  className="h-7 shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
