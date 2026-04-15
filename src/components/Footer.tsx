import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const Footer = () => {
  const [links, setLinks] = useState<Record<string, string>>({
    instagram: "https://www.instagram.com/ahmedshady10_official/",
    facebook: "https://www.facebook.com/ahmed.shady.944",
    tiktok: "https://www.tiktok.com/@ahmedshady10_official"
  });

  useEffect(() => {
    const fetchLinks = async () => {
      const { data, error } = await supabase
        .from("site_settings")
        .select("*");
      
      if (!error && data) {
        const settings = data.reduce((acc: Record<string, string>, curr) => {
          acc[curr.key] = curr.value;
          return acc;
        }, {});
        setLinks(prev => ({ ...prev, ...settings }));
      }
    };

    fetchLinks();
  }, []);

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="font-body text-sm text-muted-foreground">
          Copyrights @ <a href="https://naser-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline">Mohamed Naser</a>
        </p>
        <div className="flex justify-center gap-5 mt-4">
          {[
            { href: links.instagram, label: "Instagram" },
            { href: links.facebook, label: "Facebook" },
            { href: links.tiktok, label: "TikTok" },
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
};

export default Footer;
