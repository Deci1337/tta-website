import { useEffect } from "react";

export function PageMeta({ title, description }) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = `${title} - TikTok Agent`;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    const originalDescription = metaDescription.content;
    metaDescription.content = description;

    return () => {
      document.title = originalTitle;
      if (metaDescription) {
        metaDescription.content = originalDescription;
      }
    };
  }, [title, description]);

  return null;
}
