export type NavLink = {
  href: string;
  label: string;
};

export type HeroCampaignSlide = {
  alignment: "left-model" | "right-copy";
  backgroundAlt: string;
  backgroundImage: string;
  captionTags: string[];
  copy: string[];
  id: string;
  label: string;
  modelAlt: string;
  modelImage: string;
  signature: string;
  title?: string;
  variant: "campaign";
};

export type HeroEditorialSlide = {
  alignment: "left-model" | "right-copy";
  backgroundAlt: string;
  backgroundImage: string;
  body: string[];
  captionTags: string[];
  centerCard: {
    image: string;
    imageAlt: string;
    subtitle: string;
    title: string;
  };
  id: string;
  leftCard: {
    buttonLabel: string;
    image: string;
    imageAlt: string;
    kicker: string;
    meta: string;
  };
  label: string;
  signature: string;
  variant: "editorial";
};

export type HeroSlide = HeroCampaignSlide | HeroEditorialSlide;

export type HeroPrimaryContent = {
  slides: HeroSlide[];
};

export type ProductItem = {
  image: string;
  imageAlt: string;
  layout: "wide" | "tall" | "compact" | "narrow";
  name: string;
  objectPosition?: string;
  price: string;
  sublabel: string;
};

export type ProductDetailFrame = {
  image: string;
  imageAlt: string;
  objectPosition?: string;
};

export type ProductShowcaseContent = {
  heading: string;
  note: string;
  detailFrames: ProductDetailFrame[];
  items: ProductItem[];
};

export type NewsletterContent = {
  description: string;
  heading: string;
  placeholder: string;
};

export type StoreSectionContent = {
  image: string;
  imageAlt: string;
  panels: {
    description: string;
    icon: "clock" | "pin" | "phone";
    title: string;
  }[];
};

export type FooterColumn = {
  links: {
    href: string;
    label: string;
  }[];
  title: string;
};

export type SocialLink = {
  href: string;
  icon: "facebook" | "instagram" | "pinterest" | "youtube";
  label: string;
};

const unsplashDownload = (photoId: string, width: number) =>
  `https://unsplash.com/photos/${photoId}/download?force=true&w=${width}&q=80`;

const isProd = typeof window !== 'undefined' ? window.location.hostname !== 'localhost' : process.env.NODE_ENV === 'production';
const basePath = isProd ? '/VaganzaWebPage' : '';

export const p = (path: string) => {
  if (path.startsWith('http')) return path;
  if (path.startsWith(basePath) && isProd) return path;
  return `${basePath}${path}`;
};

export const brandName = "VAGANZA";

export const navigationLinks: NavLink[] = [
  { href: "/products", label: "NEW IN" },
  { href: "/products", label: "READY TO WEAR" },
  { href: "/products", label: "SHOES" },
  { href: "#story", label: "ABOUT US" },
];

const ruinsBackdrop = unsplashDownload("3hKDPfDk194", 2200);

export const heroPrimary: HeroPrimaryContent = {
  slides: [
    {
      id: "campaign",
      variant: "campaign",
      alignment: "left-model",
      label: "Campaign 01",
      backgroundImage: p("/1V6A2226.webp"),
      backgroundAlt: "Vaganza campaign background",
      modelImage: "",
      modelAlt: "",
      copy: [
        "Beyond the outer court of forgotten stone, Spring Summer 2026 follows a quieter form of permanence.",
        "Sun-washed tailoring, softened leather, and measured silhouettes move with the calm conviction of modern heritage.",
        "Each piece is built to travel lightly, age beautifully, and leave a lasting trace without noise.",
      ],
      signature: "Own your story.",
      captionTags: ["#StoneAndLight", "#VaganzaSS26"],
    },
    {
      id: "story",
      variant: "editorial",
      alignment: "right-copy",
      label: "Campaign 02",
      backgroundImage: p("/VaganzaPhotos/noManSlider2Bg.webp"),
      backgroundAlt: "Vaganza editorial background",
      leftCard: {
        image: p("/1V6A2496_kopya.webp"),
        imageAlt: "Vaganza editorial story photo 01",
        kicker: "VAGANZA",
        meta: "Editorial Chapter 03",
        buttonLabel: "LOOKBOOK",
      },
      centerCard: {
        image: p("/VaganzaPhotos/noManSlider2Bg.webp"),
        imageAlt: "Vaganza editorial story photo 02",
        title: "SPRING | SUMMER 2026",
        subtitle: "SHOW THE COLLECTION",
      },
      body: [
        "Vaganza was founded on a single conviction: elegance endures. Where form is deliberate, fabric is chosen with intention, and every silhouette carries its own quiet authority.",
        "Our collections are shaped by precision and restraint. Nothing excessive, nothing accidental. Each piece is composed to stand on its own — defined by balance, proportion, and permanence.",
        "Vaganza designs for those who understand that style is not declared; it is embodied. Clean lines. Structured ease. A presence that does not seek attention, yet never escapes it.",
        "Our Vision: To move beyond the rhythm of passing seasons and create garments that remain relevant long after the moment has passed.",
        "Vaganza exists to shape wardrobes that are not temporary, but lasting — built on integrity, clarity, and enduring form.",
      ],
      signature: "Built on integrity.",
      captionTags: ["#VaganzaManifesto", "#EnduringStyle"],
    },
  ],
};

export const productShowcase: ProductShowcaseContent = {
  heading: "VAGANZA LEATHER",
  note: "",
  detailFrames: [
    {
      image: p("/Leather SolUst.jpg"),
      imageAlt: "Vaganza Leather Detail Top",
      objectPosition: "center center",
    },
    {
      image: p("/Leater Sol alt.jpg"),
      imageAlt: "Vaganza Leather Detail Bottom",
      objectPosition: "center center",
    },
  ],
  items: [
    {
      layout: "wide",
      sublabel: "Leather Collection",
      name: "LEATER 1",
      price: "7.900 TL",
      image: p("/LEATER1.jpg"),
      imageAlt: "Vaganza Leather 1",
      objectPosition: "center center",
    },
    {
      layout: "tall",
      sublabel: "Premium Leather",
      name: "LEATHER 2",
      price: "24.500 TL",
      image: p("/leather2.webp"),
      imageAlt: "Vaganza Leather 2",
      objectPosition: "center center",
    },
    {
      layout: "compact",
      sublabel: "Leather Craft",
      name: "LEATHER 3",
      price: "7.500 TL",
      image: p("/leather3.jpg"),
      imageAlt: "Vaganza Leather 3",
      objectPosition: "center center",
    },
    {
      layout: "narrow",
      sublabel: "Fragrance",
      name: "Leather Parfume",
      price: "4.900 TL",
      image: p("/leather parfume.jpg"),
      imageAlt: "Vaganza Leather Parfume",
      objectPosition: "center center",
    },
  ],
};

export const newsletterContent: NewsletterContent = {
  heading: "NEWSLETTER",
  description:
    "Join our private list for collection previews, store events, atelier notes, and early access to limited releases.",
  placeholder: "Enter your email address",
};

export const storeSection: StoreSectionContent = {
  image: unsplashDownload("IbS5MDLhWj4", 1500),
  imageAlt: "Warm luxury interior with wood and upholstered lounge chairs",
  panels: [
    {
      icon: "phone",
      title: "YOUR NEAREST STORE",
      description: "Abdi Ipekci Caddesi 27, Nisantasi, Istanbul",
    },
    {
      icon: "clock",
      title: "OPENING HOURS",
      description: "Monday - Saturday 10:00 - 19:30",
    },
    {
      icon: "pin",
      title: "FIND ANOTHER STORE",
      description: "Discover additional boutiques and private appointments.",
    },
  ],
};

export const footerColumns: FooterColumn[] = [
  {
    title: "REGION / LANGUAGE",
    links: [{ href: "#", label: "Rest of the World | Change" }],
  },
  {
    title: "AT YOUR SERVICE",
    links: [
      { href: "#contact", label: "Contact Us" },
      { href: "#contact", label: "Store Locator" },
    ],
  },
  {
    title: "COMPANY",
    links: [{ href: "#story", label: "Our Story" }],
  },
  {
    title: "LEGAL & COOKIES",
    links: [
      { href: "#", label: "Terms & Conditions" },
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Extended Cookie Policy" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { href: "#", icon: "instagram", label: "Instagram" },
  { href: "#", icon: "pinterest", label: "Pinterest" },
  { href: "#", icon: "facebook", label: "Facebook" },
  { href: "#", icon: "youtube", label: "YouTube" },
];
