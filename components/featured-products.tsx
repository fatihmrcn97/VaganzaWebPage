import Image from "next/image";
import Link from "next/link";

export type FeaturedProduct = {
  id: string;
  name: string;
  price: string;
  image: string;
  colors: string[];
};

type FeaturedProductsProps = {
  title?: string;
  products: FeaturedProduct[];
};

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="section-shell">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-4 md:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="mt-6 flex flex-col items-start">
                <h3 className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#1a1a1a] sm:text-[12px]">
                  {product.name}
                </h3>
                <p className="mt-2 text-[10px] tracking-[0.1em] text-[#666] sm:text-[11px]">
                  {product.price}
                </p>
                <div className="mt-4 flex gap-1.5">
                  {product.colors.map((color, i) => (
                    <div
                      key={i}
                      className="h-3 w-3 border border-gray-200"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-center">
          <div className="h-[1px] flex-grow bg-gray-200" />
          <Link
            href="/products"
            className="mx-8 text-[11px] font-medium uppercase tracking-[0.4em] text-[#1a1a1a] hover:opacity-70 transition-opacity"
          >
            SHOW MORE
          </Link>
          <div className="h-[1px] flex-grow bg-gray-200" />
        </div>
      </div>
    </section>
  );
}
