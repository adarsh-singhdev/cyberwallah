function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-sm text-zinc-400">
        <span>cyberwallah.in</span>
        <span>© {new Date().getFullYear()} Cyberwallah</span>
      </div>
    </footer>
  );
}

export default Footer;
