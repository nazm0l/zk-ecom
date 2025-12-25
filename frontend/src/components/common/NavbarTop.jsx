import { MapPin, Smartphone } from "lucide-react";
import { Link } from "react-router";
import FacebookIcon from "../../assets/social/fb_icon.svg";
import InstagramIcon from "../../assets/social/insta_icon.svg";
import TwitterIcon from "../../assets/social/tt_icon.svg";
import YoutubeIcon from "../../assets/social/yt_icon.svg";
import Container from "./Container";

export default function NavbarTop() {
  return (
    <div className="hidden md:block bg-secondary text-white w-full h-11">
      <Container className="h-full">
        <div className="flex justify-between items-center h-full">
          <div>
            <div className="flex items-center gap-7">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <p className="text-sm">Kashimpur, Gazipur Sadar / Gazipur</p>
              </div>
              <div className="flex items-center gap-1">
                <Smartphone className="w-4 h-4" />
                <p className="text-sm">+880 01713-027875</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white h-full px-2">
            <Link to="https://www.facebook.com/#">
              <img
                src={FacebookIcon}
                alt="Facebook"
                className="w-4 h-4 cursor-pointer"
              />
            </Link>
            <Link to="https://www.youtube.com/#">
              <img
                src={YoutubeIcon}
                alt="Youtube"
                className="w-4 h-4 cursor-pointer"
              />
            </Link>
            <Link to="https://www.instagram.com/#">
              <img
                src={InstagramIcon}
                alt="Instagram"
                className="w-4 h-4 cursor-pointer"
              />
            </Link>
            <Link to="https://twitter.com/#">
              <img
                src={TwitterIcon}
                alt="Twitter"
                className="w-4 h-4 cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
