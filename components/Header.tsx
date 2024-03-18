//components
import { ThemeToggler } from "./ThemeToggler";
import Logo from "./Logo";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-between">
          <Logo />

          <div className="flex items-center gap-x-10">
            {/* NAVBAR HERE */}

            <Navbar />

            <ThemeToggler />
            {/* Mobile Navbar */}
            <div className="md:hidden">
              <MobileNavbar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
