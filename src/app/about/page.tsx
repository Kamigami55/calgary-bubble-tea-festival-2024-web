import { AboutSection } from '@/app/about/_sections/AboutSection';
import { ContactUsSection } from '@/sections/ContactUsSection';
import { SponsorshipSection } from '@/sections/SponsorshipSection';

export default function AboutPage() {
  return (
    <div>
      <AboutSection />
      <ContactUsSection />
      <SponsorshipSection />
    </div>
  );
}
