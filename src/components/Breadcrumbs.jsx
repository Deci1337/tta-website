import { Link, useLocation } from "react-router-dom";
import { useLang } from "../context/LangContext";

export function Breadcrumbs() {
  const location = useLocation();
  const { lang } = useLang();

  const pathnames = location.pathname.split('/').filter(x => x);

  const labels = {
    ru: {
      home: "Главная",
      "privacy-policy": "Политика конфиденциальности",
      "terms-of-service": "Правила пользования"
    },
    en: {
      home: "Home",
      "privacy-policy": "Privacy Policy",
      "terms-of-service": "Terms of Service"
    }
  };

  const t = labels[lang] || labels.en;

  if (pathnames.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <Link 
            to="/" 
            className="text-white/60 hover:text-white transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            {t.home}
          </Link>
        </li>
        
        {pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const label = t[pathname] || pathname;

          return (
            <li key={pathname} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-white/30" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              {isLast ? (
                <span className="text-white font-medium" aria-current="page">
                  {label}
                </span>
              ) : (
                <Link 
                  to={routeTo}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
