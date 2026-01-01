import Logo from "../../assets/logo-main.svg";
import PaymentChannels from "../../assets/paymentbar.png";
import Container from "./Container";

export default function Footer() {
  return (
    <div className="bg-[#F7F7F7] py-10">
      <Container>
        <div className="flex justify-between">
          <div>
            <img src={Logo} alt="" srcset="" className="mb-10" />
            <div className="flex flex-col gap-2.5">
              <p className="text-sm text-black/70">
                29 SE 2nd Ave, Miami Florida 33131, United States
              </p>
              <p className="text-sm text-black/70">info@zaheen.com</p>
              <p className="text-[18px] text-black font-bold">
                (+92) 3942 7879
              </p>
            </div>
          </div>
          <div className="flex justify-between gap-12">
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
          </div>
        </div>
        <div className="mb-7.5">
          <p className="text-lg font-bold text-black uppercase mb-2.5">
            Payment Channels
          </p>
          <img src={PaymentChannels} alt="" srcset="" className="w-full" />
        </div>
        <div className="flex justify-between items-center border-t border-black/20 pt-7.5">
          <p className="text-[16px] font-semibold">
            Copyright ©{" "}
            <span className="text-[#FFAD33]">360D Soul Limited</span> 2025. All
            rights reserved.
          </p>
          <div className="flex gap-5">
            <p className="text-[16px] text-[#444444] font-medium">
              Terms & Conditions
            </p>
            <p className="text-[16px] text-[#444444] font-medium">
              Privacy Policy
            </p>
            <p className="text-[16px] text-[#444444] font-medium">
              Refund Policy
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
