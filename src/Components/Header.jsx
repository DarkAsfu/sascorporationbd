import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import { BiChevronDown } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false); // State to track mobile menu
  const navigate = useNavigate();

  const menuItems = ["Home", "Services", "Our Company", "Contact"];

  // Toggle menu open/close
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigation = (path) => {
    if (path.startsWith("#")) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close menu after navigation
  };

  const handleContactNavigation = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector("#contact");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.querySelector("#contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false); // Close menu after navigation
  };

  const handleServicesNavigation = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector("#services");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.querySelector("#services");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false); // Close menu after navigation
  };

  return (
    <Navbar maxWidth="2xl" className="py-2" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        {/* Control the toggle with state */}
        <NavbarMenuToggle
          isOpen={isMenuOpen} // Control the toggle button state
          onClick={toggleMenu} // Toggle the menu on click
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img
            src="https://i.ibb.co.com/NNPvnyX/logo.png"
            alt="logo"
            onClick={() => handleNavigation("/")}
            style={{ cursor: "pointer" }}
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" onClick={() => handleNavigation("/")}>
            Home
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                radius="sm"
                variant="light"
                onClick={() => handleServicesNavigation()}
              >
                Services
                <BiChevronDown className="text-xl" />
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              // description="ACME scales apps to meet user demand, automagically, based on load."
            >
              Web Application Development
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              // description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
            >
              Software Development
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              // description="ACME runs on ACME, join us and others serving requests at web scale."
            >
              Resort Management
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              // description="Applications stay on the grid with high availability and high uptime guarantees."
            >
              Fuel Stations
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              // description="Overcome any challenge with a supporting team ready to respond."
            >
              Advertising
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link
            href="/our-company"
            aria-current="page"
            color="foreground"
            onClick={() => handleNavigation("/our-company")}
          >
            Our Company
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" onClick={handleContactNavigation}>
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile menu */}
      <NavbarMenu isOpen={isMenuOpen}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="w-full pt-10"
              onClick={() => {
                if (item === "Contact") {
                  handleContactNavigation();
                } else if (item === "Services") {
                  handleServicesNavigation();
                } else {
                  handleNavigation(
                    item === "Home"
                      ? "/"
                      : item === "Our Company"
                      ? "/our-company"
                      : "#"
                  );
                }
                setIsMenuOpen(false); // Ensure menu closes after click
              }}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
