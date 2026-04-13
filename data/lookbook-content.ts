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
    videoId: "SDfR2lxyaiU",
    poster: "https://i.ytimg.com/vi/SDfR2lxyaiU/maxresdefault.jpg",
    fallbackPoster: "https://i.ytimg.com/vi/SDfR2lxyaiU/hqdefault.jpg",
  },
  autumn: {
    title: "25 AUTUMN COLLECTION",
    cards: [
      {
        image: myikas("1758541913198-2/3840/eu-8000-beige.webp"),
        alt: "Model wearing a dark brown leather jacket in an editorial portrait.",
        buttonLabel: "SHOW MORE",
        href: "#newsletter",
      },
      {
        image: myikas("1758541913094-1/3840/eu-8000-beige.webp"),
        alt: "Model leaning against a brick wall wearing an autumn knit and suede jacket.",
        buttonLabel: "SHOW MORE",
        href: "#newsletter",
      },
      {
        image: myikas("1758541913326-3/3840/eu-8000-beige.webp"),
        alt: "Model posing in a narrow alley in a brown leather jacket.",
        buttonLabel: "SHOW MORE",
        href: "#newsletter",
      },
    ],
  },
  summer: {
    cards: [
      {
        image: myikas("1758704080974-1/3840/tv-4043-graymelange-2.webp"),
        alt: "Model in a light knit top under an open sky.",
        title: "24 SUMMER COLLECTION",
        href: "#newsletter",
      },
      {
        image: myikas("913338c3-2c04-470a-8dfd-aa44a6c73985/3840/pnt-6038-beige-3.webp"),
        alt: "Relaxed editorial look in sand-toned styling.",
        title: "25 SUMMER COLLECTION",
        href: "#newsletter",
      },
      {
        image: myikas("178ea57c-2e8b-475d-b86c-b7e59706852b/3840/dz--9950.webp"),
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
        image:
          "https://images.pexels.com/photos/31091604/pexels-photo-31091604.jpeg?auto=compress&cs=tinysrgb&w=900&h=1400&dpr=1",
        alt: "Snow-covered mountain village beneath a bright alpine sky.",
        title: "VAGANZA",
        caption: "ALPS",
        href: "#newsletter",
        objectPosition: "center center",
        widthClassName: "w-[106px]",
      },
      {
        image:
          "https://images.pexels.com/photos/33327054/pexels-photo-33327054.jpeg?auto=compress&cs=tinysrgb&w=900&h=1400&dpr=1",
        alt: "White suburban house framed by autumn trees with a parked car in front.",
        title: "VAGANZA",
        caption: "FRANCE",
        href: "#newsletter",
        objectPosition: "center center",
        widthClassName: "w-[82px]",
      },
      {
        image:
          "https://images.pexels.com/photos/33583388/pexels-photo-33583388.jpeg?auto=compress&cs=tinysrgb&w=900&h=1400&dpr=1",
        alt: "Historic European street with cars passing a church tower.",
        title: "VAGANZA",
        caption: "AW 2024",
        href: "#newsletter",
        objectPosition: "58% center",
        widthClassName: "w-[82px]",
      },
      {
        image:
          "https://images.pexels.com/photos/5416242/pexels-photo-5416242.jpeg?auto=compress&cs=tinysrgb&w=900&h=1400&dpr=1",
        alt: "Close view of a sailboat mast and sail against a crisp blue sky.",
        title: "VAGANZA",
        caption: "SAILING",
        href: "#newsletter",
        objectPosition: "64% center",
        widthClassName: "w-[82px]",
      },
    ],
  },
};
