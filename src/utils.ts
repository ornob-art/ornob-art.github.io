export const toBengaliDigits = (numStr: string | number) => {
  const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return numStr.toString().replace(/\d/g, d => banglaDigits[parseInt(d)]);
};

export const toEnglishDigits = (numStr: string) => {
  const banglaToEnglishMap: { [key: string]: string } = {
    '০': '0', '১': '1', '২': '2', '৩': '3', '৪': '4',
    '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9'
  };
  return numStr.replace(/[০-৯]/g, match => banglaToEnglishMap[match]);
};

export const getPostTimestamp = (post: any) => {
  if (!post.data.date) return 0;
  
  const bnMonths: { [key: string]: string } = {
    'জানুয়ারি': 'January', 'ফেব্রুয়ারি': 'February', 'মার্চ': 'March',
    'এপ্রিল': 'April', 'মে': 'May', 'জুন': 'June', 'জুলাই': 'July',
    'আগস্ট': 'August', 'সেপ্টেম্বর': 'September', 'অক্টোবর': 'October',
    'নভেম্বর': 'November', 'ডিসেম্বর': 'December'
  };
  
  let dateStr = post.data.date;
  dateStr = toEnglishDigits(dateStr);
  
  for (const [bn, en] of Object.entries(bnMonths)) {
    if (dateStr.includes(bn)) {
      dateStr = dateStr.replace(bn, en);
      break;
    }
  }
  
  const timestamp = Date.parse(dateStr);
  return isNaN(timestamp) ? 0 : timestamp;
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

export const getPostViews = (post: any) => {
  let hash = 0;
  for (let i = 0; i < post.slug.length; i++) {
    hash = post.slug.charCodeAt(i) + ((hash << 5) - hash);
  }
  const views = Math.abs(hash % 4000) + 1500;
  return views;
};
