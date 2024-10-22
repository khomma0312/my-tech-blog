import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";

const navItems = [
  {
    label: "Tags",
    href: "/tags",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: <IoLogoGithub className="size-6" />,
    href: "https://github.com/khomma0312",
  },
];

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full h-14 p-5">
      <a>Logo</a>
      <nav className="flex gap-4">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-primary">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
