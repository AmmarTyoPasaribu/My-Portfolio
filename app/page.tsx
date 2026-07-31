import { ParticleCanvas } from '@/components/ParticleCanvas';
import SplashCursor from '@/components/SplashCursor';
import { WalkingRobotBar } from '@/components/RobotBerjalan';
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
      <SplashCursor 
        COLOR="#ff4620" 
        RAINBOW_MODE={false} 
        SPLAT_RADIUS={0.05} 
        DENSITY_DISSIPATION={6.0} 
        VELOCITY_DISSIPATION={4.0} 
      />
      <WalkingRobotBar />
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
