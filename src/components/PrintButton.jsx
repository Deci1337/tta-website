import { useLang } from "../context/LangContext";

export function PrintButton() {
  const { lang } = useLang();

  const handlePrint = () => {
    window.print();
  };

  const label = {
    ru: "Распечатать",
    en: "Print"
  };

  return (
    <button
      onClick={handlePrint}
      className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/70 hover:text-white transition-all duration-200 print:hidden"
      aria-label={label[lang] || label.en}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
      <span className="text-sm font-medium">{label[lang] || label.en}</span>
    </button>
  );
}
