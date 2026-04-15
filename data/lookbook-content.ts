import { p } from "./site-content";

export type LookbookHeroContent = {
  brand: string;
  fallbackPoster: string;
  label: string;
  poster: string;
  season: string;
  subtitle: string;
  videoId: string;
};

export type LookbookEditorialCard = {
  alt: string;
  buttonLabel?: string;
  href: string;
  image: string;
  title?: string;
};

export type LookbookPosterCard = {
  alt: string;
  caption: string;
  href: string;
  image: string;
  objectPosition?: string;
  title: string;
  widthClassName?: string;
};

export type LookbookContent = {
  autumn: {
    cards: [LookbookEditorialCard, LookbookEditorialCard, LookbookEditorialCard];
    title: string;
  };
  hero: LookbookHeroContent;
  newsletter: {
    description: string;
    heading: string;
    placeholder: string;
  };
  seasons: {
    posters: LookbookPosterCard[];
  };
  summer: {
    cards: [LookbookEditorialCard, LookbookEditorialCard, LookbookEditorialCard];
  };
};

const myikas = (path: string) =>
  `https://cdn.myikas.com/images/6cdc7899-896f-45be-bc1c-875e50ef7de6/${path}`;

export const lookbookContent: LookbookContent = {
  hero: {
    season: "25 AUTUMN",
    brand: "VAGANZA",
    label: "LOOKBOOK",
    subtitle: "The sound of the wind caressing the branches of the trees.",
    videoId: "Z0dR9PUM_qc",
    poster: "https://i.ytimg.com/vi/Z0dR9PUM_qc/maxresdefault.jpg",
    fallbackPoster: "https://i.ytimg.com/vi/Z0dR9PUM_qc/hqdefault.jpg",
  },
  autumn: {
    title: "25 AUTUMN COLLECTION",
    cards: [
      {
        image: p("/lookbook1.webp"),
        alt: "Model wearing a dark brown leather jacket in an editorial portrait.",
        buttonLabel: "SHOW MORE",
        href: "#newsletter",
      },
      {
        image: p("/lookbook2.webp"),
        alt: "Model leaning against a brick wall wearing an autumn knit and suede jacket.",
        buttonLabel: "SHOW MORE",
        href: "#newsletter",
      },
      {
        image: p("/lookbook3.webp"),
        alt: "Model posing in a narrow alley in a brown leather jacket.",
        buttonLabel: "SHOW MORE",
        href: "#newsletter",
      },
    ],
  },
  summer: {
    cards: [
      {
        image: p("/lookbook4.webp"),
        alt: "Model in a light knit top under an open sky.",
        title: "24 SUMMER COLLECTION",
        href: "#newsletter",
      },
      {
        image: p("/Lookbook5.webp"),
        alt: "Relaxed editorial look in sand-toned styling.",
        title: "25 SUMMER COLLECTION",
        href: "#newsletter",
      },
      {
        image: p("/1V6A2000_kopya.webp"),
        alt: "Model in a monochrome summer look standing against a textured wall.",
        title: "26 SUMMER COLLECTION",
        href: "#newsletter",
      },
    ],
  },
  newsletter: {
    heading: "NEWSLETTER",
    description:
      "Join our newsletter to get exclusive contents, offers, services and first access to products.",
    placeholder: "Enter your email address",
  },
  seasons: {
    posters: [
      {
        image: p("/bottom1.webp"),
        alt: "Vaganza Season 01",
        title: "VAGANZA",
        caption: "ALPS",
        href: "#newsletter",
        objectPosition: "center center",
        widthClassName: "w-[216px]",
      },
      {
        image: p("/bottom2.jpg"),
        alt: "Vaganza Season 02",
        title: "VAGANZA",
        caption: "FRANCE",
        href: "#newsletter",
        objectPosition: "center center",
        widthClassName: "w-[216px]",
      },
      {
        image: p("/bottom3.jpg"),
        alt: "Vaganza Season 03",
        title: "VAGANZA",
        caption: "AW 2024",
        href: "#newsletter",
        objectPosition: "center center",
        widthClassName: "w-[216px]",
      },
      {
        image: p("/bottom4.jpg"),
        alt: "Vaganza Season 04",
        title: "VAGANZA",
        caption: "SAILING",
        href: "#newsletter",
        objectPosition: "center center",
        widthClassName: "w-[216px]",
      },
    ],
  },
};
