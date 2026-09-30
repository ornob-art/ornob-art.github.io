export const toBengaliDigits = (numStr: string | number) => {
  const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return numStr.toString().replace(/\d/g, d => banglaDigits[parseInt(d)]);
};

export const getAutoDate = (post: any) => {
  if (post.data.date) return post.data.date;
  
  // Try to parse date from slug, e.g. 2026-09-30-my-post
  const slugMatch = post.id.match(/^(\d{4}-\d{2}-\d{2})/);
  let dateObj = new Date();
  if (slugMatch) {
    dateObj = new Date(slugMatch[1]);
  }
  
  return new Intl.DateTimeFormat('bn-BD', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(dateObj);
};

export const getAutoReadTime = (post: any) => {
  if (post.data.readTime) return post.data.readTime;
  const wordCount = (post.body || '').trim().split(/\s+/).length;
  const readTimeNum = Math.max(1, Math.ceil(wordCount / 180));
  return `${toBengaliDigits(readTimeNum)} মিনিট`;
};

export const getAutoExcerpt = (post: any) => {
  if (post.data.excerpt) return post.data.excerpt;
  const bodyText = (post.body || '').replace(/[#*>_~\[\]()]/g, '').trim();
  const words = bodyText.split(/\s+/);
  return words.slice(0, 25).join(' ') + (words.length > 25 ? '...' : '');
};

export const getAutoBadge = (post: any) => {
  if (post.data.badge) return post.data.badge;
  return post.data.category;
};
