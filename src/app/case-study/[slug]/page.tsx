import { notFound } from "next/navigation";
import { CaseStudyView } from "@/components/CaseStudyView";
import { sanityFetch } from "@/sanity/fetch";
import { CASE_STUDY_BY_SLUG_QUERY, CASE_STUDY_SLUGS_QUERY } from "@/sanity/queries";
import type { CaseStudy } from "@/sanity/types";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await sanityFetch<Array<{ slug: string }>>({
    query: CASE_STUDY_SLUGS_QUERY,
    revalidate: false,
  });

  return slugs.map(({ slug }) => ({ slug }));
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = await sanityFetch<CaseStudy | null>({
    query: CASE_STUDY_BY_SLUG_QUERY,
    params: { slug },
  });

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyView caseStudy={caseStudy} />;
}
