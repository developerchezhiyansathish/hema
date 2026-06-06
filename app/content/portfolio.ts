export const heroStats = [
  { value: "4+", label: "Years Experience" },
  { value: "10X", label: "Engagement Growth" },
  { value: "22", label: "Campaign Shoots" },
];

export const profile = {
  role: "Social Media Manager",
  location: "Chennai, India",
  name: "Hemapriya Ramesh",
  intro:
    "A social media strategist with over four years of experience across fashion, jewelry, and food brands. Her work blends content creation, client management, and campaign optimization with a sharp eye for visual storytelling.",
  about:
    "Hemapriya has led social media strategies that drove a 10X increase in engagement and a 50% lift in website traffic, while shaping campaign narratives that move cleanly from product focus to brand recall.",
};

export const profileHighlights = [
  {
    label: "Experience",
    title: "Fashion-first social media strategy with a clear commercial lens",
    detail:
      "Built across brand visibility, engagement planning, client communication, and campaign optimization.",
  },
  {
    label: "Impact",
    title: "10X engagement lift with 50% website traffic growth",
    detail:
      "Driven by structured content calendars, agile creative testing, and performance-led storytelling.",
  },
  {
    label: "Scale",
    title: "22 digital and print shoots managed for RmKV campaigns",
    detail:
      "Spanning festive launches, product stories, influencer activity, and seasonal retail promotions.",
  },
];

export const competencies = [
  "Social Media Strategy",
  "Client Management",
  "Content Creation",
  "Project Management",
  "Campaign Optimization",
  "Growth & Adaptability",
];

export const metrics = [
  {
    value: "10X",
    desc: "Engagement growth achieved through platform-specific campaign planning and stronger creative consistency.",
  },
  {
    value: "50%",
    desc: "Website traffic lift supported by sharper campaign optimization and content funnels built for action.",
  },
  {
    value: "03",
    desc: "Ads of the World features across RmKV and Old Mercara campaign work.",
  },
];

export type PortfolioProject = {
  title: string;
  summary: string;
  focus: string;
};

export type PortfolioMedia = {
  src: string;
  alt?: string;
  caption?: string;
};

export type PortfolioCaseStudy = {
  slug: string;
  client: string;
  category: string;
  headline: string;
  overview: string;
  detail: string;
  outcome: string;
  image: string;
  highlights: string[];
  gallery: PortfolioMedia[];
  videos: PortfolioMedia[];
  projects: PortfolioProject[];
};

export const caseStudies: PortfolioCaseStudy[] = [
  {
    slug: "drig-digital",
    client: "Drig Digital",
    category: "Agency Social Media Leadership",
    headline:
      "Multi-brand social media leadership built around live coverage, brand narratives, and revenue growth.",
    overview:
      "Led a dynamic portfolio of 10+ brands across social platforms at DRig Digital, shaping distinct brand voices, high-impact digital experiences, and direct agency growth through strategic business pitching and client acquisition.",
    detail:
      "As Social Media Team Lead from 2024 to present, the DRig Digital work spans multi-brand strategy, content planning, team workflows, live-event coordination, business development, and platform-specific growth across Instagram, LinkedIn, Facebook, and other social channels.",
    outcome: "10+ brands led, Ilaiyaraaja live concert covered, 4+ new business deals closed",
    image: "/images/drig/drig-brands.png",
    highlights: [
      "10+ brands managed simultaneously",
      "Ilaiyaraaja live concert coverage in Bangalore",
      "4+ new business deals pitched and closed",
      "Team workflows, mentoring, and quality benchmarks",
      "Platform-specific reach and engagement strategy",
    ],
    gallery: [
      {
        src: "/images/drig/drig-brands.png",
        alt: "DRig Digital brand portfolio collage",
        caption: "Multi-brand portfolio work led across social platforms at DRig Digital.",
      },
    ],
    videos: [],
    projects: [
      {
        title: "Multi-Brand Management",
        summary:
          "Oversaw social media strategy, content planning, and execution for 10+ brands while maintaining distinct voices and consistent online presence across each account.",
        focus: "Portfolio strategy and execution",
      },
      {
        title: "Live Event Coverage",
        summary:
          "Managed end-to-end social media operations for legendary composer Ilaiyaraaja's live concert in Bangalore, coordinating real-time content, audience engagement, and platform activity for a high-visibility event.",
        focus: "Real-time event social operations",
      },
      {
        title: "Business Development",
        summary:
          "Pitched, negotiated, and closed 4+ new business deals for the agency, contributing directly to revenue growth and client expansion.",
        focus: "Client acquisition and revenue growth",
      },
      {
        title: "Team Leadership",
        summary:
          "Led and mentored the social media team by setting workflows, deadlines, and quality benchmarks across active client accounts.",
        focus: "Team systems and mentoring",
      },
      {
        title: "Strategy and Growth",
        summary:
          "Developed and executed platform-specific strategies across Instagram, LinkedIn, Facebook, and related channels to grow brand reach, engagement, and follower acquisition.",
        focus: "Platform growth strategy",
      },
    ],
  },
  {
    slug: "RmKV",
    client: "RmKV",
    category: "Fashion Retail Social Media",
    headline: "Fashion campaigns built for festive reach, brand recall, and retail momentum.",
    overview:
      "Designed and implemented innovative social media strategies for RmKV, resulting in a 10X increase in engagement while managing 22 high-impact digital and print shoots. Three campaign visuals from this body of work were featured by Ads of the World.",
    detail:
      "The RmKV work blends campaign planning, shoot coordination, content calendars, influencer amplification, and culturally rooted creative direction. Each campaign was shaped to make product stories feel premium, seasonal, and easy to remember across social placements.",
    outcome: "10X engagement lift, 22 shoots managed, 3 global features",
    image: "/images/RMKV/rmkv-img-two.png",
    highlights: [
      "10X engagement growth",
      "22 digital and print shoots",
      "Ads of the World recognition",
      "Festive and collection-led storytelling",
    ],
    gallery: [
      {
        src: "/images/RMKV/rmkv-img-two.png",
        alt: "RmKV campaign creative",
        caption: "Campaign-led fashion imagery for RmKV.",
      },
      {
        src: "/images/RMKV/rmkv-img-one.jpg",
        alt: "RmKV brand campaign",
        caption: "Social-first visual direction and retail storytelling.",
      },
      {
        src: "/images/onam-campaign.png",
        alt: "Onam campaign creative",
        caption: "Seasonal campaign treatment for festive recall.",
      },
    ],
    videos: [
      { src: "/images/RMKV/rmkv-video-one.mp4", caption: "RmKV campaign reel" },
      { src: "/images/RMKV/rmkv-video-two.mp4", caption: "Collection storytelling reel" },
      { src: "/images/RMKV/rmkv-video-three.mp4", caption: "Product-led festive reel" },
      { src: "/images/RMKV/rmkv-video-four.mp4", caption: "Social media campaign video" },
      { src: "/images/RMKV/rmkv-video-five.mp4", caption: "Fashion retail motion asset" },
      { src: "/images/RMKV/rmkv-video-six.mp4", caption: "Campaign content cutdown" },
    ],
    projects: [
      {
        title: "Naturals Collection Campaign",
        summary:
          "An editorial-style saree campaign centered on the handwoven richness and earthy palette of the Naturals collection.",
        focus: "Collection launch and premium visual positioning",
      },
      {
        title: "Kids Wear Campaign",
        summary:
          "Launch communication for the kids wear collection tied to the opening of the new RmKV kids store in Tirunelveli.",
        focus: "Store buzz and launch storytelling",
      },
      {
        title: "Handloom Day Campaign",
        summary:
          "A tribute-led campaign connecting May Day with the spirit of International Handloom Day through craft-forward imagery.",
        focus: "Cultural storytelling and heritage relevance",
      },
      {
        title: "Onam Campaign",
        summary:
          "A festive kasavu saree story built around timeless elegance, jasmine details, and the joy of Onam celebration.",
        focus: "Seasonal fashion campaign",
      },
      {
        title: "Women's Wear Campaign",
        summary:
          "A collection shoot spanning desk-to-dinner, campus, and celebration dressing to introduce new women's wear styles.",
        focus: "Range storytelling and lifestyle versatility",
      },
      {
        title: "Influencers Activity",
        summary:
          "Influencer-led content collaboration built to spotlight RmKV's Diwali collections with trusted local voices.",
        focus: "Influencer engagement and festive amplification",
      },
      {
        title: "Ads of the World Feature: Mother's Day",
        summary:
          "RmKV's Mother's Day campaign was featured internationally for its emotionally grounded creative direction and brand relevance.",
        focus: "Recognition-led brand storytelling",
      },
      {
        title: "Ads of the World Feature: Tamil New Year",
        summary:
          "A festive Tamil New Year creative that merged woven design cues with cultural symbolism and earned global recognition.",
        focus: "Cultural design concept",
      },
    ],
  },
  {
    slug: "old-mercara",
    client: "Old Mercara",
    category: "Cafe and Dessert Brand Content",
    headline: "Warm product-first content for coffee, gelato, bagels, and seasonal cafe moments.",
    overview:
      "Created warm, product-first storytelling for Old Mercara, a cafe brand centered on gelatos, coffee, bagels, and seasonal specials. The work ranged from campaign shoots to AI-assisted visual concepts and an Ads of the World feature.",
    detail:
      "Old Mercara's content system focused on tactile food imagery, appetite appeal, seasonal context, and simple campaign concepts that could work across posts, reels, offers, and cafe-led storytelling.",
    outcome: "Menu storytelling, AI experimentation, and award-featured campaign work",
    image: "/images/Mecara/old-mecara-one.jpg",
    highlights: [
      "Product-first cafe content",
      "Seasonal campaign concepts",
      "AI-assisted visual experimentation",
      "Award-featured creative work",
    ],
    gallery: [
      {
        src: "/images/Mecara/old-mecara-one.jpg",
        alt: "Old Mercara product shoot",
        caption: "Cafe product imagery for social placements.",
      },
      {
        src: "/images/Mecara/old-mecara-two.jpg",
        alt: "Old Mercara dessert creative",
        caption: "Dessert and menu-led storytelling.",
      },
      {
        src: "/images/Mecara/old-mecara-three.jpg",
        alt: "Old Mercara campaign image",
        caption: "Warm visual direction for everyday indulgence.",
      },
      {
        src: "/images/Mecara/old-mecara-four.jpg",
        alt: "Old Mercara seasonal creative",
        caption: "Seasonal cafe campaign asset.",
      },
      {
        src: "/images/Mecara/old-mecara-five.JPG",
        alt: "Old Mercara food and beverage visual",
        caption: "Menu story crafted for visual recall.",
      },
    ],
    videos: [
      {
        src: "/images/Mecara/old-mecara-video.mp4",
        caption: "Old Mercara campaign motion asset",
      },
    ],
    projects: [
      {
        title: "Coffee Break Campaign",
        summary:
          "A clean coffee interlude built around a standout beverage moment and tactile product imagery.",
        focus: "Signature drink promotion",
      },
      {
        title: "Valentine's Day Campaign",
        summary:
          "A softer seasonal shoot that framed everyday romance through simple indulgences and intimate cafe moments.",
        focus: "Seasonal engagement",
      },
      {
        title: "Product Shoot",
        summary:
          "Bright, appetite-led stills for gelato, bagels, and dessert products designed for scroll-stopping social placements.",
        focus: "Product content system",
      },
      {
        title: "AI Integrated Images",
        summary:
          "Experimental AI-supported campaign visuals used for festive and cricket-context storytelling while retaining brand tone.",
        focus: "Creative experimentation",
      },
      {
        title: "Ads of the World Feature",
        summary:
          "An Old Mercara creative earned Ads of the World recognition, extending the portfolio's international visibility beyond fashion retail.",
        focus: "Concept-led campaign recognition",
      },
    ],
  },
  {
    slug: "kaleesuwari",
    client: "Kaleesuwari",
    category: "FMCG Product Communication",
    headline: "Retail-ready FMCG visuals designed for everyday product recall.",
    overview:
      "Worked on social-first communication for Kaleesuwari, a long-standing household brand known for cooking oils, dals, and essential pantry products.",
    detail:
      "The Kaleesuwari work used bold product visibility, festive occasions, and straightforward retail messaging to keep essential pantry categories visible, clear, and memorable in-feed.",
    outcome: "Festive retail creatives and product-led social graphics",
    image: "/images/Kaleeswari/kaleeswari-two.png",
    highlights: [
      "Product-forward social graphics",
      "Festive occasion creatives",
      "Bold retail communication",
      "High-recall pantry visuals",
    ],
    gallery: [
      {
        src: "/images/Kaleeswari/kaleeswari-two.png",
        alt: "Kaleesuwari product creative",
        caption: "Bold product graphic for pantry brand recall.",
      },
      {
        src: "/images/Kaleeswari/kaleeswari-one.jpg",
        alt: "Kaleesuwari festive creative",
        caption: "Occasion-led social communication.",
      },
    ],
    videos: [],
    projects: [
      {
        title: "Brand Occasion Creatives",
        summary:
          "Visual assets built around festive milestones, greetings, and product placement moments for a legacy FMCG brand.",
        focus: "Retail-season social content",
      },
      {
        title: "Product Graphics",
        summary:
          "Bold red, product-forward statics designed to keep everyday pantry items visually memorable in-feed.",
        focus: "Static content and product recall",
      },
    ],
  },
  {
    slug: "vairam",
    client: "Vairam",
    category: "Jewelry Brand Storytelling",
    headline: "Elegant jewelry storytelling for festive, promotional, and gifting moments.",
    overview:
      "Developed social visuals for Vairam, a Singapore-based diamond jewelry boutique known for minimalist and everyday-wear designs.",
    detail:
      "Vairam's campaign work balanced product elegance with seasonal relevance, creating visuals for Diwali, Black Friday, Christmas, and everyday gifting contexts while preserving a premium boutique tone.",
    outcome: "Luxury product storytelling built for festive and promotional moments",
    image: "/images/Vairam/vairam-one.jpg",
    highlights: [
      "Luxury jewelry campaign visuals",
      "Festive and gifting narratives",
      "Sale-focused conversion creatives",
      "Premium product-led storytelling",
    ],
    gallery: [
      {
        src: "/images/Vairam/vairam-one.jpg",
        alt: "Vairam jewelry visual",
        caption: "Minimal jewelry creative with premium retail tone.",
      },
    ],
    videos: [
      { src: "/images/Vairam/vairam-video-one.mp4", caption: "Vairam product reel" },
      { src: "/images/Vairam/vairam-video-two.mp4", caption: "Jewelry campaign video" },
      { src: "/images/Vairam/vairam-video-three.mp4", caption: "Festive jewelry reel" },
      { src: "/images/Vairam/vairam-video-four.mp4", caption: "Retail promotion motion asset" },
    ],
    projects: [
      {
        title: "Diwali Campaign",
        summary:
          "Festive portrait-led content that balanced tradition, transformation, and product intimacy.",
        focus: "Festive jewelry storytelling",
      },
      {
        title: "Black Friday Sale",
        summary:
          "Promotional sale creatives built around discount messaging, product elegance, and conversion-friendly layouts.",
        focus: "Retail campaign conversion",
      },
      {
        title: "Christmas Campaign",
        summary:
          "Holiday gifting visuals with a softer editorial tone, centered on jewelry gifting and celebratory emotion.",
        focus: "Seasonal gifting campaign",
      },
    ],
  },
];

export const recognition = {
  eyebrow: "RECOGNITION",
  title: "Ads of the World",
  description:
    "Campaign work from RmKV and Old Mercara earned international visibility through multiple Ads of the World features, reflecting a portfolio that pairs concept clarity with commercially sharp execution.",
  stats: [
    { number: "03", label: "Featured Creatives" },
    { number: "22", label: "Shoots Managed" },
    { number: "10X", label: "Engagement Growth" },
  ],
};

export const contact = {
  title: "Let's work together.",
  email: "hemapriyaramesh2518@gmail.com",
  phone: "+91 99522 70100",
};
