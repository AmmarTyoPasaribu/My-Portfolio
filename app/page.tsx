import PosterHero from "@/components/brutal/PosterHero";
import { Hero, Marquee } from "@/components/brutal/Intro";
import AboutSection from "@/components/brutal/AboutSection";
import { CertificationsSection, ExperienceSection, OrganizationsSection, VolunteerSection } from "@/components/brutal/ListSections";
import ProjectsSection from "@/components/brutal/ProjectsSection";
import SkillsSection from "@/components/brutal/SkillsSection";
import ContactSection from "@/components/brutal/ContactSection";
import BrickLoader from "@/components/brutal/BrickLoader";
import RevealObserver from "@/components/brutal/RevealObserver";

export default function Home() {
  return (
    <main id="main-content">
      <BrickLoader />
      <PosterHero />
      <Hero />
      <Marquee />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <OrganizationsSection />
      <VolunteerSection />
      <CertificationsSection />
      <SkillsSection />
      <ContactSection />
      <RevealObserver />
    </main>
  );
}
