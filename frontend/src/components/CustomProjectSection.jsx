import bgPattern from "../assets/bg-pattern.png";
import clothes from "../assets/clothes.png";
import Button from "./common/Button";
import Container from "./common/Container";

export default function CustomProjectSection() {
  return (
    <div className="bg-secondary/10 py-6 h-146.5">
      <Container className="flex items-center h-full">
        <div className="flex flex-col md:flex-row gap-3">
          <div
            style={{
              backgroundImage: `url(${bgPattern})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              repeat: "no-repeat",
            }}
            className="px-12 w-full md:w-179 mt-10"
          >
            <span className="inline-block mt-9 border border-secondary rounded-full text-secondary px-6 py-2.5">
              Process
            </span>
            <h4 className="text-3xl font-medium mt-0.5 mb-3">
              Do You Want Custom Project With Textilery? Contact Us Now
            </h4>
            <p className=" text-black/40 mb-3.5">
              At Zaheen Knitwear Ltd., we pride ourselves on being your reliable
              partner for apparel production. Our commitment to ethical
              manufacturing ensures that every garment is crafted with care and
              integrity.
            </p>
            <Button
              variant="secondary"
              className="border! border-secondary! text-secondary!"
            >
              Learn More
            </Button>
          </div>
          <div>
            <img src={clothes} alt="Custom Project" />
          </div>
        </div>
      </Container>
    </div>
  );
}
