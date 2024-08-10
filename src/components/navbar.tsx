import Link from "next/link";
import { FlameIcon } from "./flameicon";
import { Link as ScrollLink } from "react-scroll";

export const CustomNavbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent z-50 px-4 lg:px-6 h-16 flex items-center justify-between shadow-sm backdrop-filter backdrop-blur-md">
      <Link
        href="/"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <div onClick={()=> {
          console.log("Hello world")
        }} >
          <FlameIcon className="h-8 w-8 text-[#ff6b6b]" />
        </div>
        {/* <span className="ml-2 text-lg font-bold text-[#343a40]">Resume Roaster</span> */}
      </Link>
      <nav className="flex gap-6">
        <NavLink to="howItWorks">How it Works</NavLink>
        <NavLink to="pricing">Pricing</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
    </header>
  );
};

const NavLink = ({ to, children }: any) => (
  <ScrollLink
    to={to}
    spy={true}
    smooth={true}
    offset={-64} // Adjust this value based on your navbar height
    duration={500}
    className="text-sm font-medium text-[#495057] hover:text-[#ff6b6b] transition-colors duration-300 ease-in-out cursor-pointer"
  >
    {children}
  </ScrollLink>
);
