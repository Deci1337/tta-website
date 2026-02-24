import { useState, useEffect } from "react";
import { useLang } from "../context/LangContext";
import { Link } from "react-router-dom";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const { lang } = useLang();

  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setIsVisible(false);
  };

  const content = {
    ru: {
      title: "Мы используем cookies",
      description: "Мы используем файлы cookie для улучшения вашего опыта, анализа использования сайта и персонализации контента.",
      necessary: "Необходимые",
      necessaryDesc: "Требуются для работы сайта. Не могут быть отключены.",
      analytics: "Аналитические",
      analyticsDesc: "Помогают понять, как вы используете наш сайт.",
      marketing: "Маркетинговые",
      marketingDesc: "Персонализированная реклама на основе ваших интересов.",
      acceptAll: "Принять все",
      rejectAll: "Отклонить все",
      savePreferences: "Сохранить настройки",
      customize: "Настроить",
      learnMore: "Узнать больше"
    },
    en: {
      title: "We use cookies",
      description: "We use cookies to improve your experience, analyze site usage, and personalize content.",
      necessary: "Necessary",
      necessaryDesc: "Required for the website to function. Cannot be disabled.",
      analytics: "Analytics",
      analyticsDesc: "Help us understand how you use our site.",
      marketing: "Marketing",
      marketingDesc: "Personalized ads based on your interests.",
      acceptAll: "Accept All",
      rejectAll: "Reject All",
      savePreferences: "Save Preferences",
      customize: "Customize",
      learnMore: "Learn More"
    }
  };

  const t = content[lang] || content.en;

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
      <div 
        className="w-full max-w-2xl bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl pointer-events-auto"
        role="dialog"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-description"
      >
        <div className="p-6 md:p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.598 11.064a1.006 1.006 0 0 0-.854-.172A2.938 2.938 0 0 1 20 11c-1.654 0-3-1.346-3.003-2.938.005-.034.016-.134.017-.168a.998.998 0 0 0-1.254-1.006A3.002 3.002 0 0 1 15 7c-1.654 0-3-1.346-3-3 0-.217.031-.444.099-.716a1 1 0 0 0-1.067-1.236A9.956 9.956 0 0 0 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-.049-.003-.097-.007-.16a1.004 1.004 0 0 0-.395-.776zM8.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-2 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.5-6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm3.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
              </svg>
            </div>
            
            <div className="flex-1">
              <h2 id="cookie-banner-title" className="text-xl font-bold text-white mb-2">
                {t.title}
              </h2>
              <p id="cookie-banner-description" className="text-white/70 text-sm leading-relaxed">
                {t.description}{' '}
                <Link to="/privacy-policy" className="text-purple-400 hover:text-purple-300 underline">
                  {t.learnMore}
                </Link>
              </p>
            </div>
          </div>

          {showDetails && (
            <div className="space-y-4 mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-semibold text-white">{t.necessary}</span>
                    <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                      {lang === 'ru' ? 'Всегда активно' : 'Always Active'}
                    </span>
                  </div>
                  <p className="text-sm text-white/60">{t.necessaryDesc}</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={true} 
                  disabled 
                  className="mt-1 w-5 h-5 rounded bg-purple-500 cursor-not-allowed"
                />
              </div>

              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="font-semibold text-white mb-1">{t.analytics}</div>
                  <p className="text-sm text-white/60">{t.analyticsDesc}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer mt-1">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                </label>
              </div>

              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="font-semibold text-white mb-1">{t.marketing}</div>
                  <p className="text-sm text-white/60">{t.marketingDesc}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer mt-1">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                </label>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            {!showDetails ? (
              <>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-200"
                >
                  {t.acceptAll}
                </button>
                <button
                  onClick={() => setShowDetails(true)}
                  className="flex-1 px-6 py-3 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-200"
                >
                  {t.customize}
                </button>
                <button
                  onClick={handleRejectAll}
                  className="px-6 py-3 text-white/60 hover:text-white transition-colors"
                >
                  {t.rejectAll}
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-200"
                >
                  {t.savePreferences}
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 px-6 py-3 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-200"
                >
                  {t.acceptAll}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
