import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../../../components/navbar";
import { Footer } from "../../../components/footer";
import { ProductGallery } from "../../../components/product-gallery";
import { brandName, navigationLinks, footerColumns, socialLinks } from "../../../data/site-content";

const getProductData = (id: string) => {
  const productsDB = {
    "1": {
      id: "1", shortName: "Ellis", name: "Luxe Knitted T-Shirt in Black", price: "£60", color: "Black", colors: ["#FAF9F6", "#333333", "#5C4033", "#556B2F", "#000080"], description: "Expertly crafted from soft ribbed knit, offering a contemporary approach to classic comfort. Featuring a refined silhouette, effortless stretch, and a minimalist tailored fit.",
      details: ["100% Premium Cotton Blend", "Soft stretch knit", "Tailored fit", "Machine washable"],
      gallery: ["/Product1.webp", "/Product1-1.webp", "/Product2.webp", "/Product3.webp"]
    },
    // Mocking others to fall back to a default
  };
  const defaultProduct = {
      id, shortName: "Ellis", name: "Luxe Knitted T-Shirt in Black", price: "£60", color: "Black", colors: ["#FAF9F6", "#333333", "#5C4033", "#556B2F", "#000080"], description: "Expertly crafted from soft ribbed knit, offering a contemporary approach to classic comfort. Featuring a refined silhouette, effortless stretch, and a minimalist tailored fit.",
      details: ["100% Premium Cotton Blend", "Soft stretch knit", "Tailored fit", "Machine washable"],
      gallery: ["/Product1.webp", "/Product1-1.webp", "/Product2.webp", "/Product3.webp"]
  };
  
  const productData = productsDB[id as keyof typeof productsDB] || defaultProduct;

  return {
    ...productData,
    recommended: [
      {
        id: "3",
        shortName: "Pierre",
        name: "Relaxed Fit Pleated Tailored Trousers in Black",
        price: "£120",
        colors: ["#1A1A1A", "#808080", "#4B5320", "#000080"],
        image: "/Product3.webp",
        hoverImage: "/Product1-3.webp",
      },
      {
        id: "4",
        shortName: "Ellia",
        name: "Luxe Knitted T-Shirt in Brown",
        price: "£60",
        colors: ["#FAF9F6", "#333333", "#5C4033"],
        image: "/Product4.webp",
        hoverImage: "/Product1-1.webp",
      },
      {
        id: "5",
        shortName: "Kael",
        name: "Premium Knit Sweater in Ecru",
        price: "£85",
        colors: ["#FAF9F6", "#1A1A1A", "#D2B48C"],
        image: "/1V6A2226.webp",
        hoverImage: "/lookbook2.webp",
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

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductData(id);

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
          <ProductGallery images={product.gallery} productName={product.name} />

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
                <div className="mt-2 sm:mt-3 px-1 flex flex-col">
                  <div className="text-[10px] sm:text-[11px] italic text-[#A5A5A5] font-serif mb-1 sm:mb-1.5 opacity-80">New In</div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-3 md:gap-4 lg:gap-5 flex-wrap">
                      <span className="font-serif italic text-base sm:text-[1.15rem] leading-none text-[#1a1a1a]">{rec.shortName}</span>
                      <div className="flex items-center gap-[2px]">
                        {rec.colors.map((color, idx) => (
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
                    {rec.name}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-[#A5A5A5] font-light tracking-wide">
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
