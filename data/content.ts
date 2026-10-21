export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  icon: 'TrendingUp' | 'Star' | 'Check' | 'RefreshCw';
  value: string;
  label: string;
}

export interface ReviewItem {
  stars: number;
  quote: string;
  author: string;
  role: string;
}

export interface ServiceTab {
  id: string;
  title: string;
  tabLabel: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
}

export interface CaseStudyKpi {
  value: string;
  label: string;
}

export interface ValueCard {
  title: string;
  description: string;
}

export interface AwardItem {
  title: string;
  image: string;
  alt: string;
}

export interface TeamMember {
  initials: string;
  name: string;
  role: string;
}

export interface FeaturedPublication {
  image: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  tag: string;
  author: string;
  date: string;
  image: string;
  alt: string;
  width: number;
  height: number;
}

export const siteContent = {
  meta: {
    title: 'Best SEO Services for Google, AI Search and Revenue Growth | Tanot Solutions',
    description:
      'Tanot Solutions helps your business rank higher on Google and get recommended by AI tools like ChatGPT, Perplexity, and Google AI Overviews. From technical SEO and content marketing to high-authority link building and local SEO, we handle everything needed to bring you more qualified leads and measurable revenue growth.',
    url: 'https://tanotsolutions.com/home2/',
  },

  header: {
    logo: {
      src: '/images/logo.webp',
      alt: 'Tanot Solutions',
      width: 166,
      height: 40,
    },
    navLinks: [
      { label: 'Case Studies', href: 'https://tanotsolutions.com/case-studies/' },
      { label: 'Reviews', href: '#reviews' },
      { label: 'Services', href: '#services' },
      { label: 'Company', href: '#about' },
      { label: 'Blog', href: '#blog' },
    ] as NavLink[],
    cta: {
      label: 'Book a Free Call',
      href: '#contact',
    },
  },

  hero: {
    headingHighlight: 'Best SEO Services',
    headingRest: ' for Google, AI Search, and Revenue Growth',
    lead:
      'Tanot Solutions helps your business rank higher on Google and get recommended by AI tools like ChatGPT, Perplexity, and Google AI Overviews. From technical SEO and content marketing to high-authority link building and local SEO, we handle everything needed to bring you more qualified leads and measurable revenue growth.',
    primaryCta: {
      label: 'Book a Free Strategy Call →',
      href: '#contact',
    },
    secondaryCta: {
      label: 'See Client Results',
      href: '#results',
    },
    clutchBadge: {
      src: '/images/clutch-badge.webp',
      alt: 'Reviewed on Clutch, 5.0 rating',
      href: 'https://clutch.co/profile/tanot-solutions',
      width: 150,
      height: 62,
    },
    form: {
      title: 'Get Your Free SEO Strategy',
      subtitle: 'Tell us about your goals and we’ll show you where your organic growth can improve.',
      successMessage: 'Thanks, this is a mockup form. In production it will send to your CRM.',
    },
  },

  stats: [
    {
      icon: 'TrendingUp',
      value: '150+',
      label: 'Clients Served',
    },
    {
      icon: 'Star',
      value: '98%',
      label: 'Client Satisfaction',
    },
    {
      icon: 'Check',
      value: '11+',
      label: 'Years of SEO Experience',
    },
    {
      icon: 'RefreshCw',
      value: '2+ years',
      label: 'Average client retention',
    },
  ] as StatItem[],

  trustedBrands: {
    heading: 'Trusted by 150+ brands across SaaS, Healthcare, Marketing, B2B and enterprise',
    logos: Array.from({ length: 16 }, (_, i) => ({
      src: `/images/clients/client-${String(i + 1).padStart(2, '0')}.webp`,
      alt: '',
    })),
    note: 'and many more.',
  },

  reviews: {
    heading: 'Reviews from businesses we’ve helped grow',
    subheading: 'Don’t take our word for it. Here’s what clients say about working with Tanot Solutions.',
    video: {
      vimeoId: '888963147',
      url: 'https://player.vimeo.com/video/888963147',
      captionName: 'Lisa Warren,',
      captionRole: 'Content Manager, HR Company',
      transcriptPlaceholder:
        '“Working with Tanot Solutions helped us build consistent authority in our space. We saw steady increases in qualified organic traffic, high-intent conversions, and top-tier rankings for our highest-value queries across Google and AI search engines.”',
    },
    featuredReview: {
      stars: 5,
      quote:
        'After we started link building with Tanot Solutions, they helped our CRM’s high-converting product page rank higher with an impressive 80% increase in traffic and an equally exceptional 80% increase in the total number of sign-ups every day.',
      author: 'Sandeep Das',
      role: 'Marketing Manager, CRM SaaS Company',
    },
    cardReviews: [
      {
        stars: 5,
        quote:
          'We’ve been impressed by their ability to consistently build high-quality backlinks, which are very challenging to achieve. We work with highly reputed brands where quality guidelines are stringent.',
        author: 'Michael Dunlop',
        role: 'Director of LinkBuilder.io',
      },
      {
        stars: 5,
        quote:
          'Since we started working with Tanot Solutions, we’ve seen steady increases in our organic traffic MoM over the past 6 months. Renu and the team are very responsive and punctual.',
        author: 'Marko Spasic',
        role: 'Marketing Manager, Hosting company',
      },
    ] as ReviewItem[],
    ctaPrimary: {
      label: 'View All Client Reviews →',
      href: 'https://tanotsolutions.com/link-building-service-reviews/',
    },
    ctaSecondary: {
      label: 'See us on Clutch',
      href: 'https://clutch.co/profile/tanot-solutions',
    },
  },

  services: {
    heading: 'SEO services built around revenue, not vanity metrics.',
    subheading: 'Pick one service or combine them. Every campaign targets authority, high-intent traffic and conversions.',
    tabs: [
      {
        id: 'link-building',
        tabLabel: 'Link Building',
        title: 'Link Building',
        description:
          'We earn high-quality, white-hat backlinks from trusted websites in your industry. These links show Google your business is credible, helping you rank higher and stay there.',
        features: [
          'High-authority guest posts',
          'Contextual niche edit links',
          'Industry-relevant websites only',
          'Site approval before placement',
          'White-label agency solutions',
          'Pay for live links',
        ],
        ctaLabel: 'Get Link Building Plan',
        ctaHref: 'https://tanotsolutions.com/services/link-building/',
      },
      {
        id: 'technical-seo',
        tabLabel: 'Technical SEO',
        title: 'Technical SEO',
        description:
          'We fix the hidden issues that stop Google and AI from finding, understanding, and ranking your website, so more visitors turn into customers.',
        features: [
          'Complete website SEO audits',
          'Faster page load speed',
          'Core Web Vitals optimization',
          'Crawling and indexing fixes',
          'Schema markup implementation',
          'Mobile and AI-ready setup',
        ],
        ctaLabel: 'Get Your Free Technical SEO Audit',
        ctaHref: '#contact',
      },
      {
        id: 'ai-seo',
        tabLabel: 'AI SEO',
        title: 'AI SEO',
        description:
          'Your customers now ask ChatGPT, Perplexity, and Google AI Overviews for recommendations. We optimize your brand so these tools mention, cite, and recommend you.',
        features: [
          'Google AI Overviews visibility',
          'ChatGPT and Perplexity mentions',
          'Answer engine optimization (AEO)',
          'AI-friendly content structure',
          'AI-ready structured data',
          'AI visibility performance tracking',
        ],
        ctaLabel: 'Get Your Free AI SEO Audit',
        ctaHref: '#contact',
      },
      {
        id: 'local-seo',
        tabLabel: 'Local SEO',
        title: 'Local SEO',
        description:
          'We help nearby customers find you on Google Search and Maps the moment they need your services, for more calls, directions and visits.',
        features: [
          'Google Business Profile optimization',
          'Higher Google Maps rankings',
          'Local keyword targeting',
          'Consistent directory listings',
          'Local community backlinks',
          'Review and reputation management',
        ],
        ctaLabel: 'Get Your Free Local SEO Audit',
        ctaHref: '#contact',
      },
      {
        id: 'saas-seo',
        tabLabel: 'SaaS SEO',
        title: 'SaaS SEO',
        description:
          'SaaS growth needs a different SEO playbook. We help software companies rank for the searches buyers make right before choosing a tool.',
        features: [
          'More demo requests',
          'Steady monthly sign-up growth',
          'Revenue-focused SEO strategy',
          'AI search visibility',
          'Topical authority building',
          'Links from top SaaS websites',
        ],
        ctaLabel: 'Get Your Free SaaS SEO Audit',
        ctaHref: '#contact',
      },
      {
        id: 'content-marketing',
        tabLabel: 'Content Marketing Services',
        title: 'Content Marketing Services',
        description:
          'We create content that answers your customers’ questions, ranks on Google, and guides readers toward becoming buyers.',
        features: [
          'Keyword and intent research',
          'AI-citation-ready content',
          'Content gap analysis',
          'E-E-A-T content strategy',
          'Conversion-focused SEO copywriting',
          'Content refresh and updates',
        ],
        ctaLabel: 'Get Your Free Content Marketing Audit',
        ctaHref: '#contact',
      },
    ] as ServiceTab[],
  },

  caseStudy: {
    heading: 'How an HR company grew from zero to 6,200 monthly visitors in 8 months',
    description:
      'Starting from a domain with almost no authority, we built a steady flow of niche-relevant editorial links with the required technical SEO and content changes, and traffic grew from zero to 6,200 visitors in 8 months.',
    kpis: [
      { value: '0 - 6,200', label: 'Monthly visitors' },
      { value: '0 - 1.3K', label: 'AI citations' },
      { value: '0 - 1.6K', label: 'Ranking keywords' },
    ] as CaseStudyKpi[],
    primaryCta: {
      label: 'Read full case study',
      href: 'https://tanotsolutions.com/case-studies/',
    },
    secondaryCta: {
      label: 'All Case Studies',
      href: 'https://tanotsolutions.com/case-studies/',
    },
    image: {
      src: '/images/case-study-chart.webp',
      alt: 'Traffic growth chart for the HR company case study',
      width: 512,
      height: 296,
    },
  },

  growthPartner: {
    heading: 'A growth partner, not another SEO agency.',
    subheading: 'Clients describe working with us as “less like a vendor, more like a partner.” Here’s why they stay for 2+ years on average.',
    cards: [
      {
        title: 'Results, not vanity metrics',
        description: 'Every campaign is tied to rankings, AI visibility, leads, sales and revenue.',
      },
      {
        title: 'Performance-based pricing',
        description: 'No upfront payment. Pay only for verified deliverables.',
      },
      {
        title: 'Enterprise-grade quality',
        description: 'Links and strategy that meet global brand standards, at scale.',
      },
      {
        title: '100% transparent process',
        description: 'You approve everything, including content, links and technical changes, before we go ahead.',
      },
      {
        title: 'AI-first SEO',
        description: 'Visible in AI Overviews, ChatGPT and Perplexity, not just Google.',
      },
      {
        title: 'An extension of your team',
        description: 'Dedicated specialists, clear communication, genuine relationship.',
      },
    ] as ValueCard[],
    cta: {
      label: 'Talk to our team',
      href: '#contact',
    },
  },

  awards: {
    heading: 'The industry’s top-rated SEO agency',
    items: [
      {
        title: 'Rajasthan Women Leaders Award',
        image: '/images/awards/award-rajasthan-women.webp',
        alt: 'Rajasthan Women Leaders Award',
      },
      {
        title: 'Most Trusted Global SEO Solutions Provider',
        image: '/images/awards/award-global-seo.webp',
        alt: 'Most Trusted Global SEO Solutions Provider',
      },
      {
        title: 'Best ROI Focused SEO Agency 2026',
        image: '/images/awards/award-roi-focused-1.webp',
        alt: 'Best ROI Focused SEO Agency 2026',
      },
      {
        title: 'Sardar Patel Unity Awards 2026',
        image: '/images/awards/award-sardar-patel.webp',
        alt: 'Sardar Patel Unity Awards 2026',
      },
      {
        title: 'Clutch Awards',
        image: '/images/awards/award-clutch-trophy.webp',
        alt: 'Clutch Awards',
      },
      {
        title: 'Best ROI Focused SEO Agency 2026',
        image: '/images/awards/award-roi-focused-2.webp',
        alt: 'Best ROI Focused SEO Agency 2026',
      },
    ] as AwardItem[],
  },

  founder: {
    heading: 'Hi, I’m Renu. I built Tanot Solutions to make SEO accountable.',
    bio:
      'For over 11 years, I’ve helped brands grow through search, from early-stage startups to global enterprises. Along the way, I saw how easily businesses lose trust in SEO: vague reports, guaranteed #1 rankings that never happen, cheap spammy links that lead to penalties, and agencies that disappear once the contract is signed. I founded Tanot Solutions in 2020 to change that, with honest strategy, ethical practices, and complete transparency at every step.',
    name: 'Renu Sharma',
    role: 'Founder & Head of SEO Strategy',
    image: {
      src: '/images/founder-renu.webp',
      alt: 'Renu Sharma, founder of Tanot Solutions',
      width: 280,
      height: 350,
    },
    ctaPrimary: {
      label: 'Book a call with Renu →',
      href: '#contact',
    },
    ctaSecondary: {
      label: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/company/tanot-solutions',
    },
    teamHeading: 'The team behind your results',
    team: [
      {
        initials: 'VS',
        name: 'Vikas Sharma',
        role: 'Co-Founder and Head of Operations',
      },
      {
        initials: 'P',
        name: 'Pradeep',
        role: 'Content Manager',
      },
      {
        initials: 'RJ',
        name: 'Ravina Jangid',
        role: 'Link Building Expert',
      },
      {
        initials: 'AM',
        name: 'Aniket Mukherjee',
        role: 'Link Building Expert',
      },
    ] as TeamMember[],
  },

  featuredOn: {
    heading: 'As Featured On',
    publications: [
      {
        image: '/images/featured/featured-godaddy.webp',
        alt: 'Featured publication',
      },
      {
        image: '/images/featured/featured-hubspot.webp',
        alt: 'HubSpot',
      },
      {
        image: '/images/featured/featured-forbes.webp',
        alt: 'Forbes',
      },
      {
        image: '/images/featured/featured-entrepreneur.webp',
        alt: 'Featured publication',
      },
      {
        image: '/images/featured/featured-tribune.webp',
        alt: 'The Tribune',
      },
    ] as FeaturedPublication[],
  },

  faq: {
    heading: 'Questions to ask before hiring an SEO agency',
    subheading: 'Can’t find your answer? We’re happy to walk you through it on a quick call.',
    items: [
      {
        question: 'How will working with Tanot Solutions help grow my business?',
        answer:
          'We focus on what actually moves your business forward: qualified traffic, leads, and revenue, not just rankings. You’ll always know what we’re doing, why we’re doing it, and how it contributes to your growth.',
      },
      {
        question: 'Are your link building services safe and Google-friendly?',
        answer:
          'Yes. We never use private blog networks, bulk link packages, or spammy directories. Every link is earned through genuine outreach on relevant, high-quality websites with real audiences.',
      },
      {
        question: 'How long does SEO take to show results?',
        answer:
          'Most businesses see early improvements within 3 to 6 months, with stronger, compounding growth over 6 to 12 months, depending on industry, competition and website health.',
      },
      {
        question: 'Do you offer complete SEO services or only link building?',
        answer:
          'We offer end-to-end SEO: technical audits, on-page optimization, keyword research, content strategy, local SEO, and link building.',
      },
      {
        question: 'Will I have visibility into the work being done?',
        answer:
          'Absolutely. You’ll receive clear reports on work completed, links built, rankings and traffic, plus a dedicated point of contact.',
      },
      {
        question: 'Do you work with agencies on a white-label basis?',
        answer:
          'Yes. We deliver white-label SEO and link building under your brand, with unbranded reports, flexible packages, and complete confidentiality.',
      },
    ] as FaqItem[],
    cta: {
      label: 'Claim your free SEO growth plan',
      href: '#contact',
    },
  },

  blog: {
    heading: 'Latest SEO & link building insights',
    posts: [
      {
        title: '11 Best GEO Agencies Helping B2B Brands Win AI Search',
        slug: 'https://tanotsolutions.com/blog/best-geo-agencies/',
        tag: 'SEO',
        author: 'Renu Sharma',
        date: 'October 16, 2026',
        image: '/images/blog/blog-geo-agencies.webp',
        alt: '11 Best GEO Agencies Helping B2B Brands Win AI Search',
        width: 300,
        height: 300,
      },
      {
        title: 'Link Building for Startups: How to Get Quality Backlinks on a Budget',
        slug: 'https://tanotsolutions.com/blog/link-building-for-startups/',
        tag: 'Link Building',
        author: 'Renu Sharma',
        date: 'October 6, 2026',
        image: '/images/blog/blog-link-building.webp',
        alt: 'Link Building for Startups: How to Get Quality Backlinks on a Budget',
        width: 300,
        height: 300,
      },
      {
        title: '13 White Hat SEO Techniques: How to Rank Higher on Google & AI Search',
        slug: 'https://tanotsolutions.com/blog/white-hat-seo-techniques/',
        tag: 'SEO',
        author: 'Renu Sharma',
        date: 'October 2, 2026',
        image: '/images/blog/blog-white-hat.webp',
        alt: '13 White Hat SEO Techniques: How to Rank Higher on Google & AI Search',
        width: 300,
        height: 192,
      },
    ] as BlogPost[],
  },

  ctaBand: {
    heading: 'Try our SEO and link building service for 30 days, then choose to stay',
    primaryCta: {
      label: 'Book a Call',
      href: '#contact',
    },
    secondaryCta: {
      label: 'Contact Us',
      href: 'https://tanotsolutions.com/contact/',
    },
  },

  footer: {
    about: {
      title: 'Tanot Solutions',
      description:
        'We are an SEO and link-building agency that helps global brands 5X their ROI through strategic SEO and high-quality backlink strategies.',
      email: 'info@tanotsolutions.com',
    },
    companyLinks: [
      { label: 'About Us', href: 'https://tanotsolutions.com/about/' },
      { label: 'Blog', href: 'https://tanotsolutions.com/blog/' },
      { label: 'Case Studies', href: 'https://tanotsolutions.com/case-studies/' },
      { label: 'Contact', href: 'https://tanotsolutions.com/contact/' },
    ],
    servicesLinks: [
      { label: 'Link Building', href: 'https://tanotsolutions.com/services/link-building/' },
    ],
    resourcesLinks: [
      { label: 'Choose an Agency', href: 'https://tanotsolutions.com/blog/choose-link-building-agency/' },
      { label: 'SaaS Link Building', href: 'https://tanotsolutions.com/blog/saas-link-building/' },
    ],
    copyright: '© 2026 Tanot Solutions. All rights reserved. Jodhpur, Rajasthan, India',
    legalLinks: [
      { label: 'Privacy Policy', href: 'https://tanotsolutions.com/privacy-policy/' },
      { label: 'Terms of Service', href: 'https://tanotsolutions.com/terms-of-service/' },
    ],
  },
};
