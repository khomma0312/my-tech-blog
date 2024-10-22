import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-4 border-t border-slate-500">
      <nav className="flex flex-col items-center text-muted">
        <Link href="/policy" className="hover:text-primary">
          Privacy Policy
        </Link>
        <small>&copy; {new Date().getFullYear()} by homma koharu</small>
      </nav>
    </footer>
  );
};

export default Footer;
