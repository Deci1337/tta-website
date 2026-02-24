import { Link, useLocation } from "react-router-dom";
import { useLang } from "../context/LangContext";

export function LegalNav() {
  const location = useLocation();
  const { lang } = useLang();

  const links = {
    ru: [
      { path: "/privacy-policy", label: "Политика конфиденциальности" },
      { path: "/terms-of-service", label: "Правила пользования" }
    ],
    en: [
      { path: "/privacy-policy", label: "Privacy Policy" },
      { path: "/terms-of-service", label: "Terms of Service" }
    ]
  };

  const currentLinks = links[lang] || links.en;

  return (
    <nav className="flex flex-wrap gap-4 mb-8">
      {currentLinks.map((link) => {
        const isActive = location.pathname === link.path;
        return (
          <Link
            key={link.path}
            to={link.path}
            className={`
              px-6 py-3 rounded-xl font-medium transition-all duration-200
              ${isActive 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30' 
                : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
              }
            `}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
