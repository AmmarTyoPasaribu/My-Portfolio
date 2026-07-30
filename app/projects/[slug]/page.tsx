import { notFound } from 'next/navigation';
import { projects, getProject } from '@/lib/projects';
import { ParticleCanvas } from '@/components/ParticleCanvas';
import { DetailNav } from '@/components/DetailNav';
import { DetailHero } from '@/components/DetailHero';
import { FeaturesSection } from '@/components/FeaturesSection';
import { TechTableSection } from '@/components/TechTableSection';
import { ScreenshotGallery } from '@/components/ScreenshotGallery';
import { Footer } from '@/components/Footer';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <ParticleCanvas />
      <DetailNav title={project.title} />
      <DetailHero project={project} />
      <FeaturesSection project={project} />
      <TechTableSection project={project} />
      <ScreenshotGallery project={project} />
      <Footer />
    </>
  );
}
