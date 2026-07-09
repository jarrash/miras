import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { TopicsGrid } from '@/components/TopicsGrid';
import { EpisodesSection } from '@/components/EpisodesSection';
import { GuestsSection } from '@/components/GuestsSection';
import { NewsletterSection } from '@/components/NewsletterSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <TopicsGrid />
      <EpisodesSection />
      <GuestsSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
