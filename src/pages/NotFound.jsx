import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext";
import { motion } from "framer-motion";

export function NotFound() {
  const { lang } = useLang();

  const content = {
    ru: {
      title: "404",
      subtitle: "Страница не найдена",
      description: "К сожалению, запрашиваемая страница не существует или была перемещена.",
      backHome: "Вернуться на главную",
      links: "Полезные ссылки:",
      privacy: "Политика конфиденциальности",
      terms: "Правила пользования"
    },
    en: {
      title: "404",
      subtitle: "Page Not Found",
      description: "Sorry, the page you're looking for doesn't exist or has been moved.",
      backHome: "Back to Home",
      links: "Useful Links:",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    }
  };

  const t = content[lang] || content.en;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6">
      <motion.div 
        className="max-w-2xl w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
            {t.title}
          </h1>
          <h2 className="text-3xl font-bold text-white mb-4">
            {t.subtitle}
          </h2>
          <p className="text-white/60 text-lg">
            {t.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-6"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-200 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            {t.backHome}
          </Link>

          <div className="pt-8">
            <p className="text-white/40 text-sm mb-4">{t.links}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/privacy-policy"
                className="text-purple-400 hover:text-purple-300 transition-colors underline"
              >
                {t.privacy}
              </Link>
              <span className="text-white/20">|</span>
              <Link
                to="/terms-of-service"
                className="text-purple-400 hover:text-purple-300 transition-colors underline"
              >
                {t.terms}
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16"
        >
          <svg className="w-64 h-64 mx-auto text-white/5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
