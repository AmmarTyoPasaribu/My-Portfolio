import { ParticleCanvas } from '@/components/ParticleCanvas';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { EducationSection } from '@/components/EducationSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { AchievementsGrid } from '@/components/AchievementsGrid';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { Certifications } from '@/components/Certifications';
import { SkillsMarquee } from '@/components/SkillsMarquee';
import { ContactCards } from '@/components/ContactCards';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { ChatWidget } from '@/components/ChatWidget';

export default function Home() {
  return (
    <>
      <ParticleCanvas />
      <Navbar />
      <Hero />
      <About />
      <EducationSection />
      <ExperienceSection />
      <AchievementsGrid />
      <ProjectsGrid />
      <Certifications />
      <SkillsMarquee />
      <ContactCards />
      <Footer />
      <BackToTop />
      <ChatWidget />
    </>
  );
}
