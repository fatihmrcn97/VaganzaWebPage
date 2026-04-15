import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { brandName, navigationLinks, footerColumns, socialLinks } from "../../data/site-content";

const products = [
  {
    id: 1,
    shortName: "Ellis",
    name: "Luxe Knitted T-Shirt in Black",
    price: "£60",
    colors: ["#FAF9F6", "#333333", "#5C4033", "#556B2F", "#000080"],
    mainImage: "/Product1.webp",
    hoverImage: "/Product1-1.webp",
  },
  {
    id: 2,
    shortName: "Joseph",
    name: "Regular Fit Tailored Trousers in Black",
    price: "£120",
    colors: ["#000080", "#1A1A1A", "#808080", "#C19A6B", "#3E2723"],
    mainImage: "/Product2.webp",
    hoverImage: "/Product1-2.webp",
  },
  {
    id: 3,
    shortName: "Pierre",
    name: "Relaxed Fit Pleated Tailored Trousers in Black",
    price: "£120",
    colors: ["#1A1A1A", "#808080", "#4B5320", "#000080", "#A9A9A9", "#E8E8E8", "#FAF9F6", "#3E2723", "#C19A6B", "#8FBC8F"],
    mainImage: "/Product3.webp",
    hoverImage: "/Product1-3.webp",
  },
  {
    id: 4,
    shortName: "Ellia",
    name: "Luxe Knitted T-Shirt in Brown",
    price: "£60",
    colors: ["#FAF9F6", "#333333", "#5C4033", "#556B2F", "#000080"],
    mainImage: "/Product4.webp",
    hoverImage: "/Product1-1.webp",
  },
  {
    id: 5,
    shortName: "Kael",
    name: "Premium Knit Sweater in Ecru",
    price: "£85",
    colors: ["#FAF9F6", "#1A1A1A", "#D2B48C"],
    mainImage: "/1V6A2226.webp",
    hoverImage: "/lookbook2.webp",
  },
  {
    id: 6,
    shortName: "Mateo",
    name: "Leisure Tailored Pants in Navy",
    price: "£95",
    colors: ["#000080", "#1A1A1A"],
    mainImage: "/shoes2.webp",
    hoverImage: "/shoes3.webp",
  },
  {
    id: 7,
    shortName: "Luca",
    name: "Relaxed Linen Overshirt in Sand",
    price: "£70",
    colors: ["#D2B48C", "#FFFFFF", "#A9A9A9"],
    mainImage: "/Lookbook5.webp",
    hoverImage: "/lookbook1.webp",
  },
  {
    id: 8,
    shortName: "Roman",
    name: "Slim Fit Polo in Khaki",
    price: "£55",
    colors: ["#556B2F", "#1A1A1A", "#FFFFFF", "#000080"],
    mainImage: "/1V6A2496_kopya.webp",
    hoverImage: "/leather2.webp",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar brand={brandName} links={navigationLinks} />
      
      {/* Category Header Hero */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] bg-black isolate flex flex-col justify-center items-center">
        <Image 
          src="/1V6A2000_kopya.webp" 
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
              <div className="mt-2 sm:mt-3 px-1 flex flex-col">
                <div className="text-[10px] sm:text-[11px] italic text-[#A5A5A5] font-serif mb-1 sm:mb-1.5 opacity-80">New In</div>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-3 md:gap-4 lg:gap-5 flex-wrap">
                    <span className="font-serif italic text-base sm:text-[1.15rem] leading-none text-[#1a1a1a]">{product.shortName}</span>
                    <div className="flex items-center gap-[2px]">
                      {product.colors.map((color, idx) => (
                        <div key={idx} className="w-[10px] h-[10px] sm:w-3 sm:h-3 border border-neutral-300/80" style={{ backgroundColor: color }}></div>
                      ))}
                    </div>
                  </div>
                  <button className="text-neutral-500 hover:text-black transition-colors self-start sm:self-center shrink-0 ml-2">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </button>
                </div>
                <h3 className="text-[10px] sm:text-[11px] text-[#A5A5A5] font-light mt-1 mb-0.5 truncate tracking-wide">
                  {product.name}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-[#A5A5A5] font-light tracking-wide">
                  {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer brand={brandName} columns={footerColumns} socialLinks={socialLinks} />
    </main>
  );
}
