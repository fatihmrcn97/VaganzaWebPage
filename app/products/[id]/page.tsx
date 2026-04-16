import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../../../components/navbar";
import { Footer } from "../../../components/footer";
import { brandName, navigationLinks, footerColumns, socialLinks, p } from "../../../data/site-content";
import { ProductGallery } from "../../../components/product-gallery";

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
          <div className="w-full">
            <ProductGallery images={product.gallery} productName={product.name} />
          </div>

          {/* Right Column: Sticky Product Info */}
          <div className="lg:sticky lg:top-24 pt-4 lg:pt-0">
            <h1 className="text-2xl sm:text-3xl uppercase tracking-[0.05em] font-serif mb-3 text-neutral-950 leading-tight">
              {product.name}
            </h1>
            <p className="text-base tracking-widest text-neutral-500 mb-10 font-light">
              {product.price}
            </p>

            {/* Color Selector */}
            <div className="mb-6">
              <div className="text-[9px] uppercase tracking-[0.2em] mb-2.5 text-neutral-400">
                COLOR: <span className="text-neutral-900 font-bold">{product.color}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { name: "BLACK", hex: "#000000" },
                  { name: "NAVY", hex: "#1B2F48" },
                  { name: "DEEP GREEN", hex: "#2A4232" },
                  { name: "BURGUNDY", hex: "#7E1A1A" },
                  { name: "TAN", hex: "#A87C4F" },
                  { name: "CREAM", hex: "#D9C5A0" },
                  { name: "GREY", hex: "#8E918F" },
                ].map((c) => (
                  <button 
                    key={c.name}
                    className={`w-3.5 h-3.5 rounded-sm border ${c.name === product.color ? 'border-black' : 'border-transparent hover:border-neutral-300'}`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3 text-[9px] uppercase tracking-[0.2em]">
                <span className="text-neutral-900 font-bold">Select Size</span>
                <button className="text-neutral-300 hover:text-black transition-colors underline underline-offset-4 decoration-neutral-100">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {["S", "M", "L", "XL"].map((size) => (
                  <button key={size} className="border border-neutral-200 py-3.5 text-[11px] tracking-[0.15em] hover:border-black transition-all flex items-center justify-center bg-white hover:bg-neutral-50 shadow-sm">
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full bg-black text-white py-7 text-[11px] uppercase tracking-[0.4em] hover:bg-neutral-800 transition-all mb-10 shadow-sm">
              Add To Bag
            </button>

            {/* Complete Your Style */}
            <div className="mb-10 border-t border-neutral-100 pt-8">
              <div className="text-[9px] uppercase tracking-[0.2em] mb-4 text-neutral-400 font-semibold">
                Complete Your Style
              </div>
              <div className="grid grid-cols-6 gap-1">
                {[
                  p("/Product3.jpg"),
                  p("/Product4.jpg"),
                  p("/1V6A2226.jpg"),
                  p("/shoes1.webp"),
                  p("/shoes2.webp"),
                  p("/Product2.jpg"),
                ].map((img, idx) => (
                  <div key={idx} className="relative aspect-[3/4] w-full bg-neutral-100 cursor-pointer hover:opacity-80 transition-opacity">
                    <Image src={img} alt={`Match item ${idx}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details List */}
            <div className="border-t border-neutral-100 pt-6 pb-8">
              <ul className="space-y-3 text-[11px] text-neutral-500 font-light tracking-wide lg:max-w-[95%]">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[12px] leading-[1] mt-0.5 opacity-60">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Accordion */}
            <div className="border-t border-b border-neutral-100">
              <div className="py-4 flex justify-between items-center cursor-pointer group hover:bg-neutral-50 px-1 transition-colors">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">Shipping & Returns</span>
                <span className="text-lg font-light">+</span>
              </div>
            </div>
          </div>
        
        </div>

      </div>

      <Footer brand={brandName} columns={footerColumns} socialLinks={socialLinks} />
    </main>
  );
}
