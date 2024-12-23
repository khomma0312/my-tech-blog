import Image from "next/image";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import logo from "/public/logo.png";

const navItems = [
  {
    label: "Tags",
    href: "/tags",
  },
  {
    label: "Zenn",
    href: "/zenn",
  },
  {
    label: <IoLogoGithub className="size-7" />,
    href: "https://github.com/khomma0312/my-tech-blog",
  },
];

const Header = () => {
  return (
    <header className="sticky z-header top-0 flex justify-between items-center w-full h-14 p-6 border-b text-[15px] border-slate-500 backdrop-blur">
      <Link className="flex items-center gap-2 font-semibold" href="/">
        <Image
          src={logo}
          alt="Site logo"
          width={30}
          height={30}
          className="rounded-full"
        />
        <span>{process.env.SITE_NAME}</span>
      </Link>
      <nav className="flex items-center gap-5">
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
