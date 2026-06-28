import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectPage } from "@/components/project-page";
import { projects } from "@/data/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Generates the static routes for Vercel
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

// Dynamically creates the SEO title and description based on the project data
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Aron Reji",
    };
  }

  const metaTitle = `${project.title} | Aron Reji`;

  // THE FIX: Added 'as any' so TypeScript stops throwing a fit about the 'never' type
  const imageUrl = typeof project.image === 'string' 
    ? project.image 
    : (project.image as any)?.src || "/opengraph-image.png";

  return {
    title: metaTitle,
    description: project.summary,
    openGraph: {
      title: metaTitle,
      description: project.summary,
      url: `https://www.aronreji.com/work/${slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 800,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectPage project={project} />;
}