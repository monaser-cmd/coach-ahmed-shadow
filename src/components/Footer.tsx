const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-4 text-center">
      <p className="font-body text-sm text-muted-foreground">
        Copyrights @ <a href="https://naser-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline">Mohamed Naser</a>
      </p>
      <div className="flex justify-center gap-5 mt-4">
        {[
          { href: "https://www.instagram.com/ahmedshady10_official/", label: "Instagram" },
          { href: "https://www.facebook.com/ahmed.shady.944", label: "Facebook" },
          { href: "https://www.tiktok.com/@ahmedshady10_official", label: "TikTok" },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-xs font-body"
          >
            {s.label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
