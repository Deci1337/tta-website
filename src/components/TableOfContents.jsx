import { useState, useEffect } from "react";

export function TableOfContents({ sections, lang }) {
  const [activeSection, setActiveSection] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      setIsSticky(window.scrollY > 300);

      const sectionElements = sections.map((_, index) => 
        document.getElementById(`section-${index}`)
      );

      const currentSection = sectionElements.findIndex((element, index) => {
        if (!element) return false;
        const nextElement = sectionElements[index + 1];
        const elementTop = element.offsetTop;
        const nextTop = nextElement ? nextElement.offsetTop : Infinity;
        
        return scrollPosition >= elementTop && scrollPosition < nextTop;
      });

      if (currentSection !== -1) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (index) => {
    const element = document.getElementById(`section-${index}`);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`
      hidden lg:block
      ${isSticky ? 'sticky top-24' : ''}
      transition-all duration-300
    `}>
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
        <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
          {lang === 'ru' ? 'Содержание' : 'Contents'}
        </h3>
        <nav className="space-y-2">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`
                w-full text-left text-sm py-2 px-3 rounded-lg transition-all duration-200
                ${activeSection === index 
                  ? 'bg-purple-500/20 text-purple-300 font-medium border-l-2 border-purple-400' 
                  : 'text-white/60 hover:text-white hover:bg-white/5'
                }
              `}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
