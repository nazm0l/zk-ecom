import { ChevronDown, Menu, ShoppingCart, UserRound, X } from "lucide-react";
import { useState } from "react";
import Logo from "../../assets/logo-main.svg";
import Container from "./Container";
import NavbarTop from "./NavbarTop";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <NavbarTop />
      <div className="h-16 md:h-20 lg:h-24">
        <Container className="h-full">
          <div className="h-full flex items-center justify-between">
            <div className="flex gap-6">
              <div className="shrink-0">
                <img src={Logo} alt="Logo" className="h-9 md:h-11" />
              </div>
              <ul className="hidden lg:flex items-center gap-4 xl:gap-6 font-medium">
                <li className="cursor-pointer hover:text-primary transition-colors">
                  Home
                </li>
                <li className="cursor-pointer hover:text-primary transition-colors">
                  About US
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                  Our Services <ChevronDown className="h-4 w-4" />
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                  Our Products <ChevronDown className="h-4 w-4" />
                </li>
                <li className="cursor-pointer hover:text-primary transition-colors">
                  Blogs
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-5 lg:gap-6">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <span className="absolute -top-1.25 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                    0
                  </span>
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <span className="hidden md:inline-block text-sm font-medium">
                  Cart
                </span>
              </div>
              <div className="flex items-center gap-2">
                <UserRound className="w-5 h-5" />
                <span className="hidden md:inline-block text-sm font-medium">
                  Your Account
                </span>
              </div>
              <div className="hidden md:inline-block">
                <button className="bg-primary text-white text-sm px-8 py-4">
                  Contact Us
                </button>
              </div>
              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden absolute left-0 right-0 top-16 bg-white shadow-lg z-50">
                <div className="px-4 py-4 space-y-4">
                  <ul className="space-y-3 font-medium">
                    <li className="py-2 hover:text-primary transition-colors cursor-pointer">
                      Home
                    </li>
                    <li className="py-2 hover:text-primary transition-colors cursor-pointer">
                      About Us
                    </li>
                    <li className="py-2 flex items-center justify-between hover:text-primary transition-colors cursor-pointer">
                      Our Services <ChevronDown className="h-4 w-4" />
                    </li>
                    <li className="py-2 flex items-center justify-between hover:text-primary transition-colors cursor-pointer">
                      Our Products <ChevronDown className="h-4 w-4" />
                    </li>
                    <li className="py-2 hover:text-primary transition-colors cursor-pointer">
                      Blogs
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>
    </>
  );
}
