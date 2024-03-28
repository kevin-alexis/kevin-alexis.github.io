import React, {useState, useEffect} from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import './Navbar.css'
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const curriculumLink = "../../../public/documents/Currículum - Kevin Alexis Bello Maldonado.pdf"

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

    // Lo agregue para que puede hacer el scroll sin problemas
    setTimeout(()=>{
      setIsMenuOpen(false);
    }, 800)
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
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} classNames={{
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
          <Button as={Link} color="primary" href={curriculumLink} download="Currículum Vitae - Kevin Alexis Bello Maldonado.pdf" variant="flat">
            Download CV
          </Button>
        </NavbarItem>
      </NavbarContent>
      
      
      <NavbarMenu className="bg-black/70" >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} >
            <Link
              className="w-full text-white text-xl mt-2 font-light text-center"
              onClick={() => {
                smoothScroll(`#header-${item.toLowerCase().replace(/\s/g, '-')}`, index);
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
