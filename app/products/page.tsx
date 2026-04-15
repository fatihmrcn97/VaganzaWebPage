import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { brandName, navigationLinks, footerColumns, socialLinks, p } from "../../data/site-content";

const products = [
  {
    id: 1,
    name: "TEXTURED LEATHER JACKET",
    price: "$1,200",
    color: "BLACK",
    mainImage: p("/Product1.jpg"),
    hoverImage: p("/Product1-1.webp"),
  },
  {
    id: 2,
    name: "OVERSIZED WOOL OVERCOAT",
    price: "$1,550",
    color: "CAMEL",
    mainImage: p("/Product2.jpg"),
    hoverImage: p("/Product1-2.webp"),
  },
  {
    id: 3,
    name: "TAILORED STRAIGHT TROUSERS",
    price: "$450",
    color: "ANTHRACITE",
    mainImage: p("/Product3.jpg"),
    hoverImage: p("/Product1-3.webp"),
  },
  {
    id: 4,
    name: "CASHMERE BLEND TURTLENECK",
    price: "$380",
    color: "BLACK",
    mainImage: p("/Product4.jpg"),
    hoverImage: p("/Product1-1.webp"),
  },
  {
    id: 5,
    name: "PREMIUM KNIT SWEATER",
    price: "$420",
    color: "ECRU",
    mainImage: p("/1V6A2226.jpg"),
    hoverImage: p("/lookbook2.png"),
  },
  {
    id: 6,
    name: "LEISURE TAILORED PANTS",
    price: "$510",
    color: "NAVY",
    mainImage: p("/shoes2.jpg"),
    hoverImage: p("/shoes3.jpg"),
  },
  {
    id: 7,
    name: "RELAXED LINEN OVERSHIRT",
    price: "$390",
    color: "SAND",
    mainImage: p("/lookbook5.png"),
    hoverImage: p("/lookbook1.png"),
  },
  {
    id: 8,
    name: "SLIM FIT POLO",
    price: "$280",
    color: "KHAKI",
    mainImage: p("/1V6A2496_kopya.jpg"),
    hoverImage: p("/leather2.jpg"),
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar brand={brandName} links={navigationLinks} />
      
      {/* Category Header Hero */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] bg-black isolate flex flex-col justify-center items-center">
        <Image 
          src={p("/1V6A2000_kopya.jpg")} 
          alt="Mens New In Campaign" 
          fill 
          className="object-cover opacity-60 object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        <div className="relative z-10 text-center px-4 mt-10">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.4em] text-white/70 mb-3">Vaganza Collection</p>
          <h1 className="text-2xl sm:text-4xl uppercase tracking-[0.2em] text-white font-serif">Mens New In</h1>
        </div>
      </div>

      {/* Filter & Sort Bar (Static UI) */}
      <div className="border-b border-neutral-200 bg-white sticky top-0 z-40">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 flex justify-between items-center text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-neutral-800">
          <div className="flex gap-6 cursor-pointer">
            <span className="hover:text-[#C5A059] transition-colors flex items-center gap-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              Filter
            </span>
          </div>
          <div className="text-neutral-400 hidden sm:block">{products.length} Products</div>
          <div className="flex gap-2 cursor-pointer hover:text-[#C5A059] transition-colors items-center">
            Sort <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M6 9l6 6 6-6"/></svg>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-[1400px] mx-auto px-1 sm:px-2 py-2 mb-20 text-black">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-2">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="group flex flex-col mb-6 cursor-pointer">
              {/* Image Container with MDV style hover crossover */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
                {/* Secondary Image (Behind) */}
                <Image 
                  src={product.hoverImage} 
                  alt={`${product.name} alternate view`} 
                  fill 
                  className="object-cover object-center absolute inset-0 z-0"
                />
                {/* Primary Image (Front, fades out on hover) */}
                <Image 
                  src={product.mainImage} 
                  alt={product.name} 
                  fill 
                  className="object-cover object-center transition-opacity duration-700 ease-in-out group-hover:opacity-0 relative z-10"
                />
                
                {/* Quick Add Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20 flex justify-center hidden md:flex">
                  <div className="bg-white/95 backdrop-blur-sm px-6 py-3 w-full text-center text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-neutral-900 hover:text-white transition-colors">
                    Quick Add
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="mt-3 sm:mt-4 px-1 flex flex-col">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-[10px] sm:text-[11px] uppercase tracking-[0.1em] text-neutral-900 font-medium leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] tracking-wider text-neutral-600">
                    {product.price}
                  </p>
                </div>
                <div className="mt-1.5 flex justify-between items-center text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-neutral-500">
                  <p>{product.color}</p>
                  <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="hover:text-black transition-colors">S</span>
                    <span className="hover:text-black transition-colors">M</span>
                    <span className="hover:text-black transition-colors">L</span>
                    <span className="hover:text-black transition-colors">XL</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer brand={brandName} columns={footerColumns} socialLinks={socialLinks} />
    </main>
  );
}
