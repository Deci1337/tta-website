import { useEffect } from "react";

export function StructuredData({ type, data }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    script.id = `structured-data-${type}`;
    
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById(`structured-data-${type}`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [type, data]);

  return null;
}

export function createWebPageSchema(title, description, url) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": url,
    "inLanguage": ["ru", "en"],
    "isPartOf": {
      "@type": "WebSite",
      "name": "TikTok Agent",
      "url": "https://tiktokagent.com"
    }
  };
}

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TikTok Agent",
    "description": "AI-powered TikTok automation platform",
    "url": "https://tiktokagent.com",
    "logo": "https://tiktokagent.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "support@tiktokagent.com"
    },
    "sameAs": [
      "https://github.com/Deci1337",
      "https://github.com/mikhaildvortsov",
      "https://t.me/unrealveliky"
    ]
  };
}
