export const CLOUDINARY_FETCH_BASE = 'https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/';

export const toCdn = (src) => {
  if (!src) return src;
  try {
    const hostname = window?.location?.hostname;
    if (hostname === 'localhost' || hostname === '127.0.0.1') return src;
    const absolute = src.startsWith('http')
      ? src
      : new URL(src, window.location.origin).toString();
    return `${CLOUDINARY_FETCH_BASE}${encodeURIComponent(absolute)}`;
  } catch {
    return src;
  }
};

export const CDNImage = ({ src, ...imgProps }) => {
  return <img src={toCdn(src)} {...imgProps} />;
};


