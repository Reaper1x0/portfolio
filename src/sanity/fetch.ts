import type { QueryParams } from "next-sanity";
import { client } from "./client";

export async function sanityFetch<QueryResponse = unknown>({
  query,
  params = {},
  revalidate = 60,
}: {
  query: string;
  params?: QueryParams;
  revalidate?: number | false;
}): Promise<QueryResponse> {
  return client.fetch(query, params, {
    next: {
      revalidate,
    },
  });
}
