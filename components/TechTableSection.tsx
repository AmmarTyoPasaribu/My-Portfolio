import type { Project } from '@/lib/projects';
import { Trans } from '@/lib/i18n/Trans';

export function TechTableSection({ project }: { project: Project }) {
  return (
    <section className="relative z-[1] pt-12">
      <div className="mx-auto max-w-[900px] px-6">
        <Trans
          k="detail.tech"
          as="h2"
          className="mb-5 text-[1.35rem] font-bold [&_span]:font-accent [&_span]:font-medium [&_span]:not-italic [&_span]:italic [&_span]:text-accent"
        />
        <table className="w-full border-collapse text-[0.9rem]">
          <tbody>
            {project.techTable.map((row) => (
              <tr key={row.label} className="border-b border-border">
                <td className="w-[140px] py-3.5 pr-4 font-semibold text-text-primary max-md:w-[100px]">{row.label}</td>
                <td className="py-3.5 text-text-secondary">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
