import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../../../components/navbar";
import { Footer } from "../../../components/footer";
import { brandName, navigationLinks, footerColumns, socialLinks, p } from "../../../data/site-content";

// Simulated product database fetch based on ID
const getProductData = (id: string) => {
  return {
    id,
    name: "TEXTURED LEATHER JACKET",
    price: "$1,200",
    color: "BLACK",
    description: "Expertly crafted from soft, full-grain calf leather, this textured jacket offers a contemporary approach to classic outerwear. Featuring a refined silhouette, concealed hardware, and a minimalist tailored fit, it ensures sharp presence and enduring quality.",
    details: [
      "100% Calf Leather",
      "Concealed two-way zipper",
      "Two side jet pockets",
      "Fully lined",
      "Made in Italy"
    ],
    gallery: [
      p("/Product1.jpg"),
      p("/Product1-1.webp"),
      p("/Product2.jpg"),
      p("/Product3.jpg"),
    ],
    recommended: [
      {
        id: "3",
        name: "TAILORED STRAIGHT TROUSERS",
        price: "$450",
        color: "ANTHRACITE",
        image: p("/Product3.jpg"),
        hoverImage: p("/Product1-3.webp"),
      },
      {
        id: "4",
        name: "CASHMERE BLEND TURTLENECK",
        price: "$380",
        color: "BLACK",
        image: p("/Product4.jpg"),
        hoverImage: p("/Product1-1.webp"),
      },
      {
        id: "5",
        name: "PREMIUM KNIT SWEATER",
        price: "$420",
        color: "ECRU",
        image: p("/1V6A2226.jpg"),
        hoverImage: p("/lookbook2.png"),
      }
    ]
  };
};

export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
  ];
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProductData(params.id);

  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-[#C5A059] selection:text-white">
      <Navbar brand={brandName} links={navigationLinks} />
      
      {/* Spacer for sticky navbar */}
      <div className="h-16 lg:h-20" />

      {/* Breadcrumbs */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 lg:py-6 flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-neutral-400">
        <Link href="/" className="hover:text-black transition-colors">Home</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-black transition-colors">Mens New In</Link>
        <span>/</span>
        <span className="text-black">{product.name}</span>
      </div>

      {/* Product Split Layout */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px] gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* Left Column: Image Gallery */}
          <div className="space-y-1 lg:space-y-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 lg:gap-2">
              {product.gallery.map((img, idx) => (
                <div key={idx} className={`relative bg-neutral-100 aspect-[3/4] w-full overflow-hidden ${idx === 0 ? "md:col-span-2 aspect-[4/5] object-top" : ""}`}>
                  <Image 
                    src={img} 
                    alt={`${product.name} gallery image ${idx + 1}`} 
                    fill 
                    className="object-cover object-center w-full h-full hover:scale-105 transition-transform duration-[2000ms] ease-out" 
                    priority={idx === 0} 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Sticky Product Info */}
          <div className="lg:sticky lg:top-24 pt-4 lg:pt-0">
            <h1 className="text-xl sm:text-2xl uppercase tracking-[0.15em] font-serif mb-2 text-neutral-950">
              {product.name}
            </h1>
            <p className="text-sm tracking-wider text-neutral-500 mb-8">
              {product.price}
            </p>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-3 text-[10px] uppercase tracking-[0.2em]">
                <span className="text-neutral-500">Color: <span className="text-black">{product.color}</span></span>
              </div>
            </div>

            <div className="mb-10">
              <div className="flex justify-between items-center mb-4 text-[10px] uppercase tracking-[0.2em]">
                <span className="text-neutral-900">Select Size</span>
                <button className="text-neutral-400 hover:text-black underline underline-offset-4 decoration-neutral-300">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {["S", "M", "L", "XL"].map((size) => (
                  <button key={size} className="border border-neutral-200 py-3 sm:py-4 text-[11px] hover:border-black transition-colors focus:ring-1 focus:ring-black">
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full bg-black text-white py-4 sm:py-5 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] hover:bg-neutral-800 transition-colors mb-10">
              Add To Bag
            </button>

            {/* Accordion / Details */}
            <div className="border-t border-neutral-200 divide-y divide-neutral-200 text-[11px] sm:text-[12px] leading-relaxed">
              <div className="py-6">
                <p className="text-neutral-600 mb-6 font-light">{product.description}</p>
                <ul className="list-disc pl-4 space-y-2 text-neutral-500 font-light hidden sm:block">
                  {product.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="py-6 flex justify-between cursor-pointer group">
                <span className="uppercase tracking-[0.2em] font-medium group-hover:text-[#C5A059] transition-colors">Shipping & Returns</span>
                <span className="text-xl font-light leading-none">+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Complete The Look Section */}
        <div className="mt-32 lg:mt-40 border-t border-neutral-100 pt-20">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-lg sm:text-xl uppercase tracking-[0.2em] font-serif">Complete The Look</h2>
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mt-2">Perfectly matched additions to your wardrobe.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
            {product.recommended.map((rec) => (
              <Link key={rec.id} href={`/products/${rec.id}`} className="group flex flex-col cursor-pointer">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 mb-4 sm:mb-6">
                  <Image 
                    src={rec.hoverImage} 
                    alt={`${rec.name} alternate`} 
                    fill 
                    className="object-cover object-center absolute inset-0 z-0"
                  />
                  <Image 
                    src={rec.image} 
                    alt={rec.name} 
                    fill 
                    className="object-cover object-center transition-opacity duration-700 ease-in-out group-hover:opacity-0 relative z-10"
                  />
                  <div className="absolute top-4 right-4 z-20 text-[9px] uppercase tracking-widest bg-white/90 backdrop-blur px-3 py-1">
                    New
                  </div>
                </div>
                <div className="flex justify-between items-start gap-4 px-1">
                  <div>
                    <h3 className="text-[9px] sm:text-[10px] uppercase tracking-[0.1em] text-neutral-900 font-medium leading-tight mb-1">
                      {rec.name}
                    </h3>
                    <p className="text-[9px] uppercase tracking-[0.15em] text-neutral-500">
                      {rec.color}
                    </p>
                  </div>
                  <p className="text-[10px] sm:text-[11px] tracking-wider text-neutral-600 font-light">
                    {rec.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer brand={brandName} columns={footerColumns} socialLinks={socialLinks} />
    </main>
  );
}
