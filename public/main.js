/**
 * সুবর্ণপত্র (Subornopotro) - Interactive Blog Engine
 * Search, Category Filtering, Modal Reader, Mobile Drawer
 */

// Full Articles Database (Bengali Content)
const articlesData = {
  lead: {
    category: 'শীর্ষ রচনা • দর্শন ও সমাজভাবনা',
    title: 'শব্দ ও নীরবতার সীমানায়: আধুনিক মানুষের আত্মানুসন্ধান',
    author: 'ড. অনির্বাণ চৌধুরী',
    date: '১৫ সেপ্টেম্বর, ২০২৬ • পড়ার সময়: ৭ মিনিট',
    content: `
      <p>আমাদের প্রাত্যহিক জীবনের চতুর্দিকে আজ কোলাহলের মহাসমুদ্র। যন্ত্রের অবিরাম গুঞ্জন, সামাজিক মাধ্যমের বিরামহীন নোটিফিকেশন আর নাগরিক জীবনের ব্যস্ততার মাঝে মানুষ ক্রমান্বয়ে হারিয়ে ফেলছে নিজের একান্ত নীরবতার প্রকোষ্ঠটি। অথচ প্রাচীন উপনিষদ থেকে শুরু করে আধুনিক অস্তিত্ববাদী দর্শন পর্যন্ত—সকল চিন্তাশীল মানুষই এই সত্য স্বীকার করেছেন যে, নীরবতাই হলো সৃষ্টির আদিম উৎস।</p>
      
      <div class="modal-quote">
        “যেখানে শব্দের সমাপ্তি ঘটে, সেখান থেকেই শুরু হয় আত্মদর্শনের প্রথম পাঠ। নীরবতা কোনো শূন্যতা নয়, বরং সহস্র অনুভূতির পূর্ণতা।”
      </div>

      <p>আধুনিক মনস্তত্ত্ববিদরা লক্ষ্য করেছেন, অবিরাম কোলাহলের শিকার মানুষ ধীরে ধীরে তার ভাবনার গভীরতা ও একাগ্রতা হারাতে বসেছে। সাহিত্য পাঠ কিংবা নির্জন প্রকৃতির সান্নিধ্যে কাটানো কিছু মুহূর্ত আমাদের মানসিক ভারসাম্য ফিরিয়ে দিতে পারে। সুবর্ণপত্রের এই বিশেষ সংখ্যায় আমরা আলোকপাত করার চেষ্টা করেছি কীভাবে বর্তমান অস্থির সময়েও একজন মানুষ তার অন্তর্নিহিত শান্তভাব ও সৃষ্টিশীলতাকে অক্ষুণ্ণ রাখতে পারে।</p>
      
      <p>সাহিত্য আসলে শব্দের মাধ্যমে নীরবতার সন্ধান। একটি সার্থক কবিতা পাঠ করার পর পাঠকের মনে যে স্তব্ধতা নেমে আসে, তা কেবল ভাষার জাদু নয়—তা আত্মার গভীর তৃপ্তি। আসুন, আমরা প্রতিদিনের ব্যস্ততার মধ্যেও দিনে অন্তত কিছুক্ষণ সমস্ত বৈষয়িক কোলাহল থেকে বিচ্ছিন্ন হয়ে নিজের মুখোমুখি দাঁড়াই।</p>
    `
  },
  1: {
    category: 'সাহিত্য সমালোচনা',
    title: 'রবীন্দ্রনাথের শেষ পর্বের কবিতা: রূপান্তরের আলো ও ছায়া',
    author: 'সুস্মিতা সেনগুপ্ত',
    date: '১২ সেপ্টেম্বর, ২০২৬ • পড়ার সময়: ৫ মিনিট',
    content: `
      <p>রবীন্দ্রনাথ ঠাকুরের জীবনের শেষ পর্বের কাব্যসম্ভার—‘প্রান্তিক’, ‘সেঁজুতি’, ‘নবজাতক’, ‘রোগশয্যায়’, ‘আরোগ্য’ এবং ‘শেষ লেখা’—বাংলা সাহিত্যের ইতিহাসে এক স্বতন্ত্র ও অভূতপূর্ব অধ্যায়। তরুণ বয়সের রোমান্টিক উচ্ছ্বাস আর পরিণত বয়সের গীতিময়তা পেরিয়ে এই সময়ে কবি যেন এক কঠোর, নিঃসঙ্গ এবং নিরাভরণ সত্যের মুখোমুখি উপস্থিত হয়েছিলেন।</p>
      
      <div class="modal-quote">
        “রূপ-নারানের কূলে জেগে উঠিলাম, জানিলাম এ জগৎ স্বপ্ন নয়—রক্তের অক্ষরে দেখিলাম আপনার রূপ, চিনিলাম আপনারে আঘাতে আঘাতে বেদনায় বেদনায়।”
      </div>

      <p>জীবনের সায়াহ্নে এসে রোগশয্যার সীমাবদ্ধতা কবির দৃষ্টিকে সংকুচিত করেনি, বরং উন্মোচিত করেছিল সৃষ্টিজগতের গভীরতম রহস্যকে। তাঁর এই পর্বের কবিতাগুলোতে অলংকরণের বাহুল্য নেই, নেই কোনো কৃত্রিম ছন্দচাতুর্য। সেখানে ভাষা সরাসরি মর্মমূলকে স্পর্শ করে। মৃত্যুকে কবি আর কোনো রহস্যময় ভাবাবেগে দেখেননি, বরং দেখেছেন জীবনের এক অনিবার্য ও সত্য রূপান্তর হিসেবে।</p>
    `
  },
  2: {
    category: 'কথাসাহিত্য ও ছোটগল্প',
    title: 'মেঘভাঙা রোদ এবং একটি হলুদ খামের গল্প',
    author: 'তানভীর আহমেদ',
    date: '১০ সেপ্টেম্বর, ২০২৬ • পড়ার সময়: ৪ মিনিট',
    content: `
      <p>পুরাতন কাঠের আলমারির নিচের ড্রয়ারে চিঠিটা পড়ে ছিল প্রায় বিশটি বছর। খামের রং ফিকে হলুদ হয়ে গেছে, কোণগুলো সামান্য উইপোকায় খাওয়া। নীল কালির হস্তাক্ষরে কেবল একটি নাম লেখা—‘অপর্ণা’।</p>
      
      <p>সেদিন বাইরে বৃষ্টি হচ্ছিল মুষলধারে। জানালার কাঁচে বৃষ্টির জলবিন্দুগুলো একে অপরকে ছুঁয়ে নিচে গড়িয়ে পড়ছিল। সুব্রত যখন চিঠিটি আলগোছে খুলল, তখন ঘরের বাতাসে ছড়িয়ে পড়ল পুরনো দিনের শুকনো বকুলফুলের মৃদু গন্ধ। সেই চিঠির প্রতিটি বাক্যে জড়িয়ে ছিল এক অব্যক্ত অভিমান, যা সময়ের দীর্ঘ ব্যবধানেও একটুও মলিন হয়নি।</p>
      
      <div class="modal-quote">
        “কিছু কথা বলা হয়ে ওঠে না বলেই হয়তো স্মৃতিগুলো চিরকাল বেঁচে থাকে। অব্যক্ত কথাই মানুষের সবচেয়ে দীর্ঘস্থায়ী সম্পদ।”
      </div>

      <p>বৃষ্টি থেমে যখন আকাশে এক চিলতে মেঘভাঙা রোদ হাসল, সুব্রত চিঠিটা আবার খামে ভরে রাখল। সব কথার উত্তর দিতে হয় না, কিছু চিঠি আজীবন অনুচ্চারিত থাকাই শ্রেয়।</p>
    `
  },
  3: {
    category: 'বিজ্ঞান ও প্রযুক্তি',
    title: 'কৃত্রিম বুদ্ধিমত্তা ও মানবিক কল্পনাশক্তির ভবিষ্যৎ',
    author: 'নাফিসা রহমান',
    date: '০৮ সেপ্টেম্বর, ২০২৬ • পড়ার সময়: ৬ মিনিট',
    content: `
      <p>লার্জ ল্যাঙ্গুয়েজ মডেল এবং জেনারেটিভ এআই-এর যুগে একটি মৌলিক প্রশ্ন সমগ্র বিশ্বের চিন্তাবিদদের আলোড়িত করছে: কম্পিউটার কি কেবল গণনাই করতে পারে, নাকি সে সৃষ্টিশীল অনুভূতির গভীরতাও ধারণ করতে সক্ষম? শতকোটি প্যারামিটারের ভেতরে ভাষার যে বিন্যাস রচিত হয়, তা কি মানুষের অনুভূতির সমতুল্য?</p>
      
      <p>বিজ্ঞানীদের মতে, কৃত্রিম বুদ্ধিমত্তা ভাষার ব্যাকরণ ও উপমার মিল চমৎকারভাবে অনুকরণ করতে পারে। কিন্তু মানুষের সৃষ্টিশীলতা জন্ম নেয় বেদনা, আনন্দ, মৃত্যুভয় আর প্রেম থেকে। যে অস্তিত্ববোধের অভিজ্ঞতা যন্ত্রের নেই, সেই অভিজ্ঞতার গভীর রূপান্তর যন্ত্রের পক্ষে নিখুঁতভাবে প্রকাশ করা আজও অসম্ভব।</p>
      
      <div class="modal-quote">
        “যন্ত্র সৃষ্টিকে নিখুঁত করতে পারে, কিন্তু সৃষ্টিশীলতার ত্রুটি ও অপূর্ণতার মধ্যেই মানুষের মানবিক সৌন্দর্য প্রস্ফুটিত হয়।”
      </div>

      <p>সুতরাং কৃত্রিম বুদ্ধিমত্তাকে মানুষের প্রতিযোগী না ভেবে তাকে চিন্তার এক শক্তিশালী অনুঘটক হিসেবে দেখাই সমকালীন বুদ্ধিবৃত্তিক দৃষ্টিভঙ্গি।</p>
    `
  },
  4: {
    category: 'ভ্রমণ ও ঐতিহ্য',
    title: 'পাহাড়ের বাঁকে নীরব কুয়াশা: সাজেকের রূপকথা',
    author: 'প্রিয়ম রায়',
    date: '০৫ সেপ্টেম্বর, ২০২৬ • পড়ার সময়: ৪ মিনিট',
    content: `
      <p>ভোরের আলো তখনও মেঘের ওপাশে উঁকি দেয়নি। কংলাক পাহাড়ের চূড়ায় দাঁড়িয়ে মনে হয় যেন রূপকথার কোনো ভাসমান দ্বীপে এসে পৌঁছেছি। চারদিকে ধবধবে সাদা মেঘের সমুদ্র, আর সেই সমুদ্রের মধ্য থেকে জেগে আছে সবুজ পাহাড়ের চূড়াগুলো।</p>
      
      <p>স্থানীয় আদিবাসী পল্লীতে তখন কাঠের চুল্লিতে ধোঁয়া উঠছে। শিশুদের হাসির শব্দ আর পাখিদের কলকাকলিতে শান্ত বাতাস মুখরিত। সাজেকের সৌন্দর্য কেবল তার প্রাকৃতিক ভূদৃশ্যে নয়, বরং এখানকার মানুষের সহজ-সরল জীবনযাত্রার মাঝে। নাগরিক কৃত্রিমতার কোনো চিহ্ন এখানে পৌঁছাতে পারেনি।</p>
      
      <p>সন্ধ্যা নামতেই আকাশের বুক চিরে নেমে আসে লক্ষ তারার দীপাবলি। পাহাড়ের শীতল হাওয়ায় দাঁড়িয়ে এক কাপ লাল চায়ে চুমুক দিতে দিতে মনে হয়—জীবনের সরলতাই জীবনের সবচেয়ে বড় বিস্ময়।</p>
    `
  },
  5: {
    category: 'ঐতিহ্য ও ইতিহাস',
    title: 'মুঘল ঢাকার স্থাপত্যশৈলী: বিস্মৃতির অতলে এক স্বর্ণযুগ',
    author: 'ড. আসিফ মুজতবা',
    date: '০৩ সেপ্টেম্বর, ২০২৬ • পড়ার সময়: ৫ মিনিট',
    content: `
      <p>সুবেদার ইসলাম খাঁ চিশতির হাত ধরে ১৬১০ খ্রিস্টাব্দে যখন ঢাকা মুঘল সাম্রাজ্যের সুবাহ বাংলার রাজধানী হিসেবে আত্মপ্রকাশ করে, তখন থেকে এই জনপদে শুরু হয়েছিল এক নতুন স্থাপত্য বিপ্লব। লালবাগ কেল্লা, ছোট কাটরা, বড় কাটরা এবং তারা মসজিদ কেবল ইট-সুরকির কাঠামো নয়, বরং তৎকালীন শিল্পবোধ ও রাষ্ট্রীয় শৌর্যের প্রতীক।</p>
      
      <p>মুঘল স্থাপত্যের অন্যতম প্রধান বৈশিষ্ট্য হলো তাদের প্রতিসাম্য (symmetry), সুউচ্চ গম্বুজ এবং জ্যামিতিক অলংকরণ। বুড়িগঙ্গার তীরবর্তী বাতাসে আজও কান পাতলে শোনা যায় সেই সুবর্ণ অতীতের বাণিজ্য তরীর ছন্দ। আমাদের উচিত এই ঐতিহাসিক নিদর্শনগুলোকে যথাযোগ্য মর্যাদায় সংরক্ষণ করা।</p>
    `
  },
  6: {
    category: 'পরিবেশ ভাবনা',
    title: 'জলবায়ু সংকট ও সুন্দরবনের শ্বাসমূলের কান্না',
    author: 'মাহমুদুল হাসান',
    date: '০১ সেপ্টেম্বর, ২০২৬ • পড়ার সময়: ৫ মিনিট',
    content: `
      <p>সুন্দরবন পৃথিবীর বৃহত্তম ম্যানগ্রোভ বনাঞ্চল এবং বাংলাদেশের প্রাকৃতিক সুরক্ষাকবচ। কিন্তু সাম্প্রতিক বছরগুলোতে উজান থেকে মিঠা পানির প্রবাহ হ্রাস এবং সমুদ্রপৃষ্ঠের উচ্চতা বৃদ্ধির কারণে এখানকার লবণাক্ততার মাত্রা বিপজ্জনক হারে বৃদ্ধি পাচ্ছে। সুন্দরী গাছের আগামরা রোগ এবং শ্বাসমূল শুকিয়ে যাওয়ার ঘটনা এখন নিত্যনৈমিত্তিক।</p>
      
      <p>জলবায়ু পরিবর্তনের এই ধাক্কা কেবল বন্যপ্রাণীর উপরেই নয়, সুন্দরবনের ওপর নির্ভরশীল লাখো জেলে ও বাওয়ালিদের জীবিকার ওপরেও তীব্র সংকট তৈরি করেছে। সময় এখনই—আন্তর্জাতিক সহযোগিতা ও কার্যকর রাষ্ট্রীয় নীতির সমন্বয়ে আমাদের এই অমূল্য প্রাকৃতিক ঐতিহ্যকে রক্ষা করতে হবে।</p>
    `
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const searchInput = document.getElementById('search-input');
  const searchClearBtn = document.getElementById('search-clear-btn');
  const postCards = document.querySelectorAll('.post-card');
  const featuredArticle = document.getElementById('featured-article');
  const noResults = document.getElementById('no-results');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const tocLinks = document.querySelectorAll('.toc-item-link');
  const navLinks = document.querySelectorAll('.nav-link');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');

  // Modal Elements
  const modal = document.getElementById('article-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalAuthor = document.getElementById('modal-author');
  const modalDate = document.getElementById('modal-date');
  const modalContent = document.getElementById('modal-content');

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletter-form');

  /* ==========================================================================
     1. Live Search Feature
     ========================================================================== */
  if (searchInput && searchClearBtn) {
    const dropdownResults = document.getElementById('search-dropdown-results');
    let debounceTimer;

    const performRestSearch = async (query) => {
      if (!query) {
        if(dropdownResults) dropdownResults.style.display = 'none';
        return;
      }
      
      if(dropdownResults) {
        dropdownResults.style.display = 'block';
        dropdownResults.innerHTML = '<div class="search-loading"><div class="spinner"></div>খোঁজা হচ্ছে...</div>';
      }

      try {
        const primaryApiEndpoint = `${subornopotroData.restUrl}?search=${encodeURIComponent(query)}&per_page=6&_embed`;
        const fallbackApiEndpoint = `${subornopotroData.fallbackUrl}&search=${encodeURIComponent(query)}&per_page=6&_embed`;

        let response = await fetch(primaryApiEndpoint);
        if (!response.ok) {
          response = await fetch(fallbackApiEndpoint);
        }
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        if (data.length === 0) {
          if(dropdownResults) dropdownResults.innerHTML = '<div class="search-empty">কোনো ফলাফল পাওয়া যায়নি</div>';
          return;
        }

        let html = '';
        data.forEach(post => {
          let thumbnail = '';
          if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
            thumbnail = post._embedded['wp:featuredmedia'][0].source_url;
          }
          
          let terms = [];
          if (post._embedded && post._embedded['wp:term']) {
            post._embedded['wp:term'].forEach(tax => {
              tax.forEach(term => terms.push(term.name));
            });
          }
          const catName = terms.length > 0 ? terms[0] : 'Uncategorized';
          
          // Basic highlighting
          const title = post.title.rendered.replace(new RegExp(query, 'gi'), match => `<mark>${match}</mark>`);

          html += `
            <a href="${post.link}" class="search-result-item">
              ${thumbnail ? `<div class="search-result-thumb"><img src="${thumbnail}" alt=""></div>` : '<div class="search-result-thumb placeholder"></div>'}
              <div class="search-result-content">
                <span class="search-result-cat">${catName}</span>
                <h4 class="search-result-title">${title}</h4>
              </div>
            </a>
          `;
        });
        
        if(dropdownResults) dropdownResults.innerHTML = html;
        
      } catch (error) {
        console.error('Error fetching search results:', error);
        if(dropdownResults) dropdownResults.innerHTML = '<div class="search-empty">কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।</div>';
      }
    };

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim();
      
      if (query.length > 0) {
        searchClearBtn.style.display = 'block';
      } else {
        searchClearBtn.style.display = 'none';
        if(dropdownResults) dropdownResults.style.display = 'none';
      }

      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        performRestSearch(query);
      }, 300);
    });

    // Submit standard search on Enter
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
          window.location.href = '/?s=' + encodeURIComponent(query);
        }
      }
    });

    searchClearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchClearBtn.style.display = 'none';
      if(dropdownResults) dropdownResults.style.display = 'none';
      searchInput.focus();
    });
    
    // Close dropdown on click outside
    document.addEventListener('click', (e) => {
      if (dropdownResults && !searchInput.contains(e.target) && !dropdownResults.contains(e.target) && !searchClearBtn.contains(e.target)) {
        dropdownResults.style.display = 'none';
      }
    });
    
    searchInput.addEventListener('focus', () => {
      const query = searchInput.value.trim();
      if (query.length > 0 && dropdownResults && dropdownResults.innerHTML !== '') {
        dropdownResults.style.display = 'block';
      }
    });
  }

  /* ==========================================================================
     2. Category Filter (Tabs, Sidebar সূচীপত্র, Header Nav)
     ========================================================================== */
  const scrollToArticles = () => {
    const articlesSection = document.getElementById('articles');
    if (articlesSection) {
      const header = document.getElementById('header');
      const headerOffset = header ? header.offsetHeight : 80;
      const elementPosition = articlesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  window.filterByCategory = (category) => {
    // Clear search
    if (searchInput.value) {
      searchInput.value = '';
      searchClearBtn.style.display = 'none';
    }

    // Update active tab buttons
    filterBtns.forEach(btn => {
      if (btn.dataset.filter === category) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update active sidebar TOC links
    tocLinks.forEach(link => {
      if (link.dataset.category === category) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update active nav menu links
    navLinks.forEach(link => {
      if (link.dataset.category === category) {
        link.classList.add('active');
      } else if (category !== 'all' && link.dataset.category === category) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    const postsGrid = document.getElementById('posts-grid');
    if (!postsGrid) return;

    // AJAX Mode (WordPress)
    if (typeof subornopotroAjax !== 'undefined') {
      // Create skeleton loaders
      postsGrid.innerHTML = Array(4).fill(0).map(() => `
        <article class="post-card-skeleton skeleton-anim"></article>
      `).join('');
      
      // Hide pagination during filtering
      const pagination = document.querySelector('.posts-pagination') || document.querySelector('.pagination');
      if (pagination) pagination.style.display = 'none';
      if (featuredArticle) featuredArticle.style.display = (category === 'all') ? 'block' : 'none';
      
      const formData = new FormData();
      formData.append('action', 'subornopotro_filter_posts');
      formData.append('nonce', subornopotroAjax.nonce);
      formData.append('category', category);

      fetch(subornopotroAjax.ajaxurl, {
        method: 'POST',
        body: formData
      })
      .then(response => response.text())
      .then(html => {
        postsGrid.innerHTML = html;
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        postsGrid.innerHTML = '<p style="text-align:center;width:100%;">Failed to load posts. Please try again.</p>';
      });
      
    } else {
      // DOM Fallback Mode (Static HTML)
      let visibleCount = 0;
      const allPostCards = postsGrid.querySelectorAll('.post-card');

      allPostCards.forEach(card => {
        const cardCat = card.dataset.category;
        card.classList.remove('fade-in');
        
        if (category === 'all' || cardCat === category) {
          card.style.display = 'flex';
          setTimeout(() => card.classList.add('fade-in'), 10);
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (featuredArticle) {
        featuredArticle.classList.remove('fade-in');
        if (category === 'all' || featuredArticle.dataset.category === category) {
          featuredArticle.style.display = 'block';
          setTimeout(() => featuredArticle.classList.add('fade-in'), 10);
        } else {
          featuredArticle.style.display = 'none';
        }
      }

      noResults.style.display = 'none';
    }
  };

  // Attach click listeners to filter tabs
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterByCategory(btn.dataset.filter);
      scrollToArticles();
    });
  });

  // Attach click listeners to sidebar TOC items
  tocLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (document.body.classList.contains('home')) {
        e.preventDefault();
        const cat = link.dataset.category;
        filterByCategory(cat);
        scrollToArticles();
      }
    });
  });

  // Attach click listeners to navigation links with category data
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const cat = link.dataset.category;
      if (cat && document.body.classList.contains('home')) {
        e.preventDefault();
        filterByCategory(cat);
        scrollToArticles();
      }
      if (navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Footer Category links
  document.querySelectorAll('.footer-links [data-category]').forEach(link => {
    link.addEventListener('click', (e) => {
      const cat = link.dataset.category;
      if (cat && document.body.classList.contains('home')) {
        e.preventDefault();
        filterByCategory(cat);
        scrollToArticles();
      }
    });
  });

  /* ==========================================================================
     3. Reading Modal (সম্পূর্ণ প্রবন্ধ পাঠ - যদি উপস্থিত থাকে)
     ========================================================================== */
  if (modal && modalCloseBtn) {
    window.openArticleModal = (id) => {
      const article = articlesData[id];
      if (!article) return;

      modalCategory.textContent = article.category;
      modalTitle.textContent = article.title;
      modalAuthor.textContent = article.author;
      modalDate.textContent = article.date;
      modalContent.innerHTML = article.content;

      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
      }
    });
  }

  /* ==========================================================================
     4. Mobile Navigation Toggle
     ========================================================================== */
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  /* ==========================================================================
     5. Newsletter Form Submission Feedback
     ========================================================================== */
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector('.newsletter-input').value;
      alert(`ধন্যবাদ! আপনার ইমেইল (${email}) সুবর্ণপত্রের নিয়মিত পাঠক তালিকায় যুক্ত হয়েছে। প্রতি শুক্রবার নতুন সংখ্যা পৌঁছে যাবে আপনার ইনবক্সে।`);
      newsletterForm.reset();
    });
  }

  // Share and Copy Link Helpers
  window.copyArticleLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('সফল হয়েছে! এই প্রবন্ধটির লিঙ্ক ক্লিপবোর্ডে কপি করা হয়েছে।');
    }).catch(() => {
      alert('লিঙ্ক: ' + window.location.href);
    });
  };

  window.shareArticle = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);

    if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
    }
  };

  /* ==========================================================================
     Reading Progress Bar (Single Article)
     ========================================================================== */
  const singleArticle = document.querySelector('.single-article');
  if (singleArticle) {
    const progressContainer = document.createElement('div');
    progressContainer.className = 'top-reading-progress-container';
    
    const progressBar = document.createElement('div');
    progressBar.className = 'top-reading-progress-bar';
    
    const progressText = document.createElement('span');
    progressText.className = 'top-reading-progress-text';
    progressText.textContent = '০%';
    
    progressBar.appendChild(progressText);
    progressContainer.appendChild(progressBar);
    document.body.appendChild(progressContainer);

    const bengaliNumbers = {'1':'১', '2':'২', '3':'৩', '4':'৪', '5':'৫', '6':'৬', '7':'৭', '8':'৮', '9':'৯', '0':'০'};
    
    window.addEventListener('scroll', () => {
      const scrollPos = window.pageYOffset;
      const articleTop = singleArticle.offsetTop;
      const articleHeight = singleArticle.offsetHeight;
      const windowHeight = window.innerHeight;
      
      let percent = ((scrollPos - (articleTop - 150)) / (articleHeight - windowHeight + 150)) * 100;
      if (percent < 0) percent = 0;
      if (percent > 100) percent = 100;
      
      progressBar.style.width = percent + '%';
      
      const bnPercent = String(Math.round(percent)).split('').map(d => bengaliNumbers[d] || d).join('');
      progressText.textContent = bnPercent + '%';
      
      if (scrollPos > articleTop - 50 && percent < 100) {
        progressContainer.style.opacity = '1';
      } else {
        progressContainer.style.opacity = '0';
      }
    });
  }

  /* ==========================================================================
     Scroll to Top Button
     ========================================================================== */
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        scrollToTopBtn.classList.add('visible');
      } else {
        scrollToTopBtn.classList.remove('visible');
      }
    });

    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});

