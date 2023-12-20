import React, {useState, useEffect} from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import './Navbar.css'
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const menuItems = [
    "About Me",
    "Projects",
    "Skills",
    "Contact",
    // "Download CV",
  ];

  const smoothScroll = (target, index) => {
    const element = document.querySelector(target);
    if (element) {
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop - 80,
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Calcula el área de cada sección y actualiza el ítem activo
      const sections = menuItems.map((item) => document.querySelector(`#header-${item.toLowerCase().replace(/\s/g, '-')}`));
      const positions = sections.map((section) => section.offsetTop - 100);

      for (let i = 0; i < positions.length; i++) {
        const nextPosition = positions[i+1] || Infinity;
        if (scrollPosition >= positions[i] && scrollPosition < nextPosition) {
          setActiveMenuItem(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuItems]);

  return (
    // <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll classNames={{
    <Navbar onMenuOpenChange={setIsMenuOpen} classNames={{
      item: [
        "flex",
        "relative",
        "h-full",
        "items-center",
        "data-[active=true]:after:content-['']",
        "data-[active=true]:after:absolute",
        "data-[active=true]:after:bottom-0",
        "data-[active=true]:after:left-0",
        "data-[active=true]:after:right-0",
        "data-[active=true]:after:h-[2px]",
        "data-[active=true]:after:rounded-[2px]",
        "data-[active=true]:after:bg-primary",
      ],
    }}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">WELCOME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent  className="hidden sm:flex gap-4" justify="center" >
      {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              color={index === activeMenuItem ? "primary" : "foreground"}
              className="w-full"
              onClick={() => smoothScroll(`#header-${item.toLowerCase().replace(/\s/g, '-')}`, index)}
              size="lg"
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="../../../public/documents/Currículum Vitae - Kevin Alexis Bello Maldonado.pdf" download="Currículum Vitae - Kevin Alexis Bello Maldonado.pdf" variant="flat">
            Download CV
          </Button>
        </NavbarItem>
      </NavbarContent>
      
      
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                "foreground"
              }
              className="w-full"
              onClick={() => {
                smoothScroll(`#header-${item.toLowerCase().replace(/\s/g, '-')}`, index);
                setIsMenuOpen(false);
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
