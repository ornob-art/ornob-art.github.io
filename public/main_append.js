/* ==========================================================================
   View Counter Logic (Local Simulation)
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  const toBn = (num) => String(num).split('').map(d => bengaliDigits[d] || d).join('');
  const parseBn = (str) => {
    const bnToEn = {'০':'0', '১':'1', '২':'2', '৩':'3', '৪':'4', '৫':'5', '৬':'6', '৭':'7', '৮':'8', '৯':'9'};
    return parseInt(str.split('').map(d => bnToEn[d] || d).join(''), 10) || 0;
  };

  const pathSegments = window.location.pathname.split('/').filter(Boolean);
  if (pathSegments[0] === 'posts' && pathSegments[1]) {
    const currentSlug = pathSegments[1];
    const viewKey = `views_${currentSlug}`;
    let count = parseInt(localStorage.getItem(viewKey) || '0', 10);
    
    if (!sessionStorage.getItem(`viewed_${currentSlug}`)) {
        count++;
        localStorage.setItem(viewKey, count);
        sessionStorage.setItem(`viewed_${currentSlug}`, 'true');
    }
  }

  const popularItems = document.querySelectorAll('.popular-item');
  popularItems.forEach(item => {
    const onclickAttr = item.getAttribute('onclick');
    if (onclickAttr) {
      const match = onclickAttr.match(/\/posts\/([^']+)/);
      if (match && match[1]) {
        const slug = match[1];
        const viewKey = `views_${slug}`;
        const localViews = parseInt(localStorage.getItem(viewKey) || '0', 10);
        
      }
    }
  });
});
