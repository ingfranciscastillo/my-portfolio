import { useEffect } from "react";
import { useResume } from "~/hooks/useResume";
import { Navbar } from "~/components/portfolio/Navbar";
import { Hero } from "~/components/portfolio/Hero";
import { About } from "~/components/portfolio/About";
import { Skills } from "~/components/portfolio/Skills";
import { WorkTimeline } from "~/components/portfolio/WorkTimeline";
import { Projects } from "~/components/portfolio/Projects";
import { Education } from "~/components/portfolio/Education";
import { Publications } from "~/components/portfolio/Publications";
import { Footer } from "~/components/portfolio/Footer";
import { ResumePDFView } from "~/components/portfolio/ResumePDFView";

const Index = () => {
  const resume = useResume();
  const { basics } = resume;

  useEffect(() => {
    document.title = `${basics.name} — ${basics.label}`;
    const desc =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    desc.setAttribute("content", basics.summary.slice(0, 155));
    if (!desc.parentNode) document.head.appendChild(desc);

    // JSON-LD Person schema
    const ldId = "person-jsonld";
    document.getElementById(ldId)?.remove();
    const script = document.createElement("script");
    script.id = ldId;
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: basics.name,
      jobTitle: basics.label,
      email: basics.email,
      url: basics.url,
      address: {
        "@type": "PostalAddress",
        addressLocality: basics.location.city,
        addressRegion: basics.location.region,
        addressCountry: basics.location.countryCode,
      },
      sameAs: basics.profiles.map((p) => p.url),
    });
    document.head.appendChild(script);
  }, [basics]);

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar name={basics.name} onDownload={handleDownload} />
      <main>
        <Hero basics={basics} />
        <About basics={basics} />
        <Skills skills={resume.skills} />
        <WorkTimeline work={resume.work} />
        <Projects projects={resume.projects} />
        <Education education={resume.education} />
        <Publications publications={resume.publications} />
      </main>
      <Footer basics={basics} />
      <ResumePDFView resume={resume} />
    </div>
  );
};

export default Index;
