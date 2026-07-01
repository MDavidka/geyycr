import { SectionHero } from '@/components/sections/hero';
import { SectionFeatures } from '@/components/sections/features';
import { SectionPricing } from '@/components/sections/pricing';
import { SectionTestimonials } from '@/components/sections/testimonials';
import { SectionFaq } from '@/components/sections/faq';
import { SectionCta } from '@/components/sections/cta';
import { hostingCompanyData } from '@/lib/data';
import { Check } from 'lucide-react'; // Assuming Check icon is used in pricing or features for lists

export default function HomePage() {
  return (
    <main>
      <SectionHero
        badge={hostingCompanyData.hero.badge}
        title={hostingCompanyData.hero.title}
        description={hostingCompanyData.hero.description}
        primaryCta={hostingCompanyData.hero.primaryCta}
        secondaryCta={hostingCompanyData.hero.secondaryCta}
      />
      <SectionFeatures
        heading={hostingCompanyData.features.heading}
        subheading={hostingCompanyData.features.subheading}
        features={hostingCompanyData.features.features}
      />
      <SectionPricing
        heading={hostingCompanyData.pricing.heading}
        subheading={hostingCompanyData.pricing.subheading}
        tiers={hostingCompanyData.pricing.tiers}
      />
      <SectionTestimonials
        heading={hostingCompanyData.testimonials.heading}
        subheading={hostingCompanyData.testimonials.subheading}
        testimonials={hostingCompanyData.testimonials.testimonials}
      />
      <SectionFaq
        heading={hostingCompanyData.faq.heading}
        subheading={hostingCompanyData.faq.subheading}
        items={hostingCompanyData.faq.items}
      />
      <SectionCta
        title={hostingCompanyData.cta.title}
        description={hostingCompanyData.cta.description}
        primaryCta={hostingCompanyData.cta.primaryCta}
        secondaryCta={hostingCompanyData.cta.secondaryCta}
      />
    </main>
  );
}
