import { Helmet } from "react-helmet";
import { useEffect } from "react";


const MetaDecorator = ({ title, description, imageUrl, imageAlt }) => { 
  // Ensure updates on client-side navigation as well
  useEffect(() => {
    if (title) document.title = title;
    const ensureMeta = (selector, attrs) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        Object.entries(attrs).forEach(([k,v]) => el.setAttribute(k, v || ''));
        document.head.appendChild(el);
      } else {
        Object.entries(attrs).forEach(([k,v]) => el.setAttribute(k, v || ''));
      }
    };
    ensureMeta('meta[name="description"]', { name: 'description', content: description || '' });
    ensureMeta('meta[property="og:title"]', { property: 'og:title', content: title || '' });
    ensureMeta('meta[property="og:description"]', { property: 'og:description', content: description || '' });
    ensureMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl || '' });
    ensureMeta('meta[property="og:url"]', { property: 'og:url', content: window.location.href });
    ensureMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    ensureMeta('meta[name="twitter:image:alt"]', { name: 'twitter:image:alt', content: imageAlt || '' });
  }, [title, description, imageUrl, imageAlt]);
  
  return (
    <Helmet key={title || window.location.pathname}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
      <meta name="twitter:card" content="summary_large_image" />
      {imageAlt && <meta name="twitter:image:alt" content={imageAlt} />}
    </Helmet>
  )
};


export default MetaDecorator 