import { PostSanityDocument } from "@/typings";

import Posts from "@/components/Posts";
import { sanityFetch } from "@/sanity/lib/fetch";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const posts = await sanityFetch<PostSanityDocument[]>({
    query: POSTS_QUERY,
  });

  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
}
