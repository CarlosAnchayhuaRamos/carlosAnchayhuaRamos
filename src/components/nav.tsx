import sunglasses from "/images/sunglasses2.webp";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  sections: {
    heroRef: React.RefObject<HTMLDivElement>;
    blogRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
  };
}

const nav: React.FC<NavProps> = ({ scrollToSection, sections }) => {
  const [isOpen, setIsOpen] = useState(false);

  // const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-5 lg:flex-row text-cyan-50 bg-gray-800 border-b-2 border-gray-700">
      <div className="flex items-center space-x-4">
        <a
          className="transition hover:scale-120 duration-500"
          href="https://react.dev"
          target="_blank"
        >
          <img
            src={sunglasses}
            className="logo react w-14 border-2 border-gray-500 rounded-full bg-white"
            alt="React logo"
          />
        </a>
        <h1 className="text-2xl font-stretch-expanded tracking-wider hover:scale-110 transition duration-500 ease-in-out">
          Carlos Anchayhua
        </h1>
      </div>

      <button
        className="lg:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      <ul
        className={`absolute lg:static top-16 left-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent lg:flex lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 p-5 lg:p-0 transition-all duration-500 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <a
            className="hover:text-gray-500 transition duration-500 ease-in-out"
            onClick={() => scrollToSection(sections.heroRef)}
          >
            About
          </a>
        </li>
        <li>
          <a
            className="hover:text-gray-500 transition duration-500 ease-in-out"
            onClick={() => scrollToSection(sections.blogRef)}
          >
            Blog
          </a>
        </li>
        <li>
          <a
            className="hover:text-gray-500 transition duration-500 ease-in-out"
            onClick={() => scrollToSection(sections.projectsRef)}
          >
            Projects
          </a>
        </li>
        {/* <li className="relative group">
          <button
            className=" flex items-center space-x-2 hover:text-gray-500 transition duration-500 w-full lg:w-auto "
            onClick={() => setSubmenuOpen(!submenuOpen)}
          >
            Projects
            <ChevronDown
              className={`transform transition-transform ${
                submenuOpen ? "rotate-180" : ""
              } lg:hidden`}
              size={18}
            />
          </button>
          <ul
            className={`${
              submenuOpen ? "block" : "hidden"
            } absolute bg-gray-900 p-4 lg:group-hover:block`}
          >
            <li>
              <a
                className="hover:text-gray-500 transition duration-500"
                href="/"
              >
                Frontend
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-500 transition duration-500"
                href="/"
              >
                Backend
              </a>
            </li>
          </ul>
        </li> */}
        <li>
          <a
            className="hover:text-gray-500 transition duration-500 ease-in-out"
            onClick={() => scrollToSection(sections.contactRef)}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default nav;
