import { forwardRef } from "react";
import type { Resume } from "~/types/resume";
import { formatPeriod } from "~/hooks/useResume";

interface ResumePDFViewProps {
  resume: Resume;
}

/**
 * Print-only sober CV layout. Hidden on screen, shown when printing.
 */
export const ResumePDFView = forwardRef<HTMLDivElement, ResumePDFViewProps>(
  ({ resume }, ref) => {
    const { basics, work, education, skills, projects, publications } = resume;

    return (
      <div
        ref={ref}
        className="print-only"
        style={{
          color: "black",
          background: "white",
          fontFamily: "PT Serif, Georgia, serif",
        }}
      >
        <header
          style={{
            borderBottom: "2px solid black",
            paddingBottom: "10px",
            marginBottom: "16px",
          }}
        >
          <h1 style={{ fontSize: "28px", fontWeight: 700, margin: 0 }}>
            {basics.name}
          </h1>
          <div style={{ fontSize: "14px", marginTop: "2px" }}>
            {basics.label}
          </div>
          <div
            style={{
              fontSize: "11px",
              marginTop: "6px",
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <span>{basics.email}</span>
            {basics.phone && <span>{basics.phone}</span>}
            <span>
              {basics.location.city}
              {basics.location.region ? `, ${basics.location.region}` : ""}
            </span>
            {basics.url && <span>{basics.url}</span>}
            {basics.profiles.map((p) => (
              <span key={p.network}>
                {p.network}: {p.username}
              </span>
            ))}
          </div>
        </header>

        <section style={{ marginBottom: "14px" }}>
          <p style={{ fontSize: "12px", lineHeight: 1.5, margin: 0 }}>
            {basics.summary}
          </p>
        </section>

        <Section title="Experiencia">
          {work.map((j) => (
            <div
              key={`${j.name}-${j.startDate}`}
              style={{ marginBottom: "10px" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "12px",
                }}
              >
                <strong>
                  {j.position} — {j.name}
                </strong>
                <span>{formatPeriod(j.startDate, j.endDate)}</span>
              </div>
              {j.location && (
                <div style={{ fontSize: "11px", fontStyle: "italic" }}>
                  {j.location}
                </div>
              )}
              {j.summary && (
                <div style={{ fontSize: "11px", marginTop: "2px" }}>
                  {j.summary}
                </div>
              )}
              {j.highlights && (
                <ul
                  style={{
                    margin: "4px 0 0 18px",
                    padding: 0,
                    fontSize: "11px",
                  }}
                >
                  {j.highlights.map((h) => (
                    <li key={h} style={{ marginBottom: "2px" }}>
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </Section>

        <Section title="Formación">
          {education.map((e) => (
            <div
              key={e.institution}
              style={{ marginBottom: "6px", fontSize: "12px" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>{e.institution}</strong>
                <span>{formatPeriod(e.startDate, e.endDate)}</span>
              </div>
              <div style={{ fontSize: "11px" }}>
                {e.studyType} · {e.area}
              </div>
            </div>
          ))}
        </Section>

        <Section title="Skills">
          {skills.map((s) => (
            <div key={s.name} style={{ fontSize: "11px", marginBottom: "4px" }}>
              <strong>{s.name}: </strong>
              {s.keywords.join(" · ")}
            </div>
          ))}
        </Section>

        <Section title="Proyectos">
          {projects.map((p) => (
            <div key={p.name} style={{ marginBottom: "6px", fontSize: "11px" }}>
              <strong>{p.name}</strong>
              {p.url && <span> — {p.url}</span>}
              <div>{p.description}</div>
            </div>
          ))}
        </Section>

        <Section title="Publicaciones">
          {publications.map((p) => (
            <div key={p.name} style={{ fontSize: "11px", marginBottom: "4px" }}>
              <strong>{p.name}</strong> — {p.publisher} (
              {new Date(p.releaseDate).getFullYear()})
            </div>
          ))}
        </Section>
      </div>
    );
  },
);
ResumePDFView.displayName = "ResumePDFView";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: "14px" }}>
      <h2
        style={{
          fontSize: "13px",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          borderBottom: "1px solid black",
          paddingBottom: "2px",
          margin: "0 0 8px 0",
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
