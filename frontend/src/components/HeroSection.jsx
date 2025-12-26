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
          <p className="text-base md:text-xl text-white/60 mb-1">
            Elevate Your Band With
          </p>
          <h1 className="text-4xl md:text-[56px] font-bold text-white mb-2.5">
            High-Quality Garments. <br /> Ethically Made.
          </h1>
          <p className="text-base md:text-lg text-white/60 mb-7">
            At Zaheen Knitwear Ltd., we pride ourselves on being your reliable
            partner for apparel production. Our commitment to ethical
            manufacturing ensures that every garment is crafted with care and
            integrity.
          </p>
          <div className="flex gap-4">
            <Button>Contact Us</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>
        <div className="z-10 hidden md:flex items-center justify-end">
          <img src={VideoIcon} alt="Video Icon" className="size-32" />
        </div>
      </Container>
    </section>
  );
}
