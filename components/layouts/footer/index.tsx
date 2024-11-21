const Footer = () => {
  return (
    <footer className="p-4 border-t border-slate-500">
      <nav className="flex flex-col items-center text-muted">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {process.env.SITE_NAME}
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
