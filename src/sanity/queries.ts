import { defineQuery } from "next-sanity";

const orderClause = "| order(order asc)";

export const STATS_QUERY = defineQuery(`*[_type == "stat"] ${orderClause} { _id, value, label }`);

export const SECTORS_QUERY = defineQuery(
  `*[_type == "sector"] ${orderClause} { _id, title, icon, description, tags, colSpan }`,
);

export const FEATURED_CASE_STUDIES_QUERY = defineQuery(
  `*[_type == "caseStudy" && featured == true] ${orderClause} {
    _id,
    title,
    "slug": slug.current,
    category,
    metric,
    description
  }`,
);

export const PROCESS_STEPS_QUERY = defineQuery(
  `*[_type == "processStep"] ${orderClause} { _id, icon, title, text }`,
);

export const PRINCIPLES_QUERY = defineQuery(
  `*[_type == "principle"] ${orderClause} { _id, icon, title, text }`,
);

export const TIMELINE_QUERY = defineQuery(
  `*[_type == "timelineEntry"] ${orderClause} { _id, period, role, text, active }`,
);

export const SKILLS_QUERY = defineQuery(
  `*[_type == "skill"] ${orderClause} { _id, name, score }`,
);

export const TOOLS_QUERY = defineQuery(`*[_type == "tool"] ${orderClause} { _id, name }`);

export const CERTIFICATIONS_QUERY = defineQuery(
  `*[_type == "certification"] ${orderClause} { _id, icon, title, description }`,
);

export const CASE_STUDY_SLUGS_QUERY = defineQuery(
  `*[_type == "caseStudy" && defined(slug.current)]{ "slug": slug.current }`,
);

export const CASE_STUDY_BY_SLUG_QUERY = defineQuery(
  `*[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    year,
    category,
    metric,
    description,
    techStack[] { _key, icon, label },
    clientInfo,
    deliverables,
    bottleneckTitle,
    bottleneckBody,
    bottleneckImage,
    approachSteps[] { _key, step, title, text },
    architectureTitle,
    architectureDescription,
    architectureHighlights[] { _key, icon, title, text, featured },
    topologyImage,
    performanceMetrics[] { _key, value, description }
  }`,
);

export const FIRST_CASE_STUDY_SLUG_QUERY = defineQuery(
  `*[_type == "caseStudy" && defined(slug.current)] | order(order asc)[0].slug.current`,
);
