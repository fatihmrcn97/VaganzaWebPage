import { Footer } from "../components/footer";
import { HeroPrimary } from "../components/hero-primary";
import { Navbar } from "../components/navbar";
import { NewsletterSection } from "../components/newsletter-section";
import { ProductShowcase } from "../components/product-showcase";
import { StoreSection } from "../components/store-section";
import {
  brandName,
  footerColumns,
  heroPrimary,
  navigationLinks,
  newsletterContent,
  productShowcase,
  socialLinks,
  storeSection,
} from "../data/site-content";

export default function Home() {
  return (
    <main className="page-shell">
      <Navbar brand={brandName} links={navigationLinks} />
      <div className="relative isolate">
        <HeroPrimary content={heroPrimary} />
      </div>
      <ProductShowcase content={productShowcase} />
      <NewsletterSection content={newsletterContent} />
      <StoreSection content={storeSection} />
      <Footer brand={brandName} columns={footerColumns} socialLinks={socialLinks} />
    </main>
  );
}
