import Logo from "../../assets/logo-main.svg";
import PaymentChannels from "../../assets/paymentbar.png";
import Container from "./Container";

export default function Footer() {
  return (
    <div className="bg-[#F7F7F7] py-10">
      <Container>
        <div className="flex justify-between">
          <div>
            <img src={Logo} alt="" srcset="" />
            <div>
              <p>29 SE 2nd Ave, Miami Florida 33131, United States</p>
              <p>info@zaheen.com</p>
              <p>(+92) 3942 7879</p>
            </div>
          </div>
          <div className="flex justify-between gap-12">
            <div>
              <h4>Pages</h4>
              <ul>
                <li>About Us</li>
                <li>Our Services</li>
                <li>Our Products</li>
              </ul>
            </div>
            <div>
              <h4>Information</h4>
              <ul>
                <li>My Account</li>
                <li>Corporate Enquires</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <p>Payment Channels</p>
          <img src={PaymentChannels} alt="" srcset="" className="w-full" />
        </div>
        <hr />
        <div>
          <p>Copyright © 360D Soul Limited 2025. All rights reserved.</p>
          <div>social icons</div>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Refund Policy</p>
        </div>
      </Container>
    </div>
  );
}
