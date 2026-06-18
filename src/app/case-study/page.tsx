import { redirect } from "next/navigation";
import { sanityFetch } from "@/sanity/fetch";
import { FIRST_CASE_STUDY_SLUG_QUERY } from "@/sanity/queries";

export default async function CaseStudyIndexPage() {
  const slug = await sanityFetch<string | null>({
    query: FIRST_CASE_STUDY_SLUG_QUERY,
  });

  if (slug) {
    redirect(`/case-study/${slug}`);
  }

  redirect("/");
}
