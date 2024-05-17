import { QueryParams } from "next-sanity"
import { PostSanityDocument } from "@/typings";
import { notFound } from "next/navigation"

import { POSTS_QUERY, POST_QUERY } from "@/sanity/lib/queries"
import Post from "@/components/Post"

import { sanityFetch } from "@/sanity/lib/fetch"


export async function generateStaticParams() {
  const posts = await sanityFetch<PostSanityDocument[]>({
    query: POSTS_QUERY,
    perspective: "published",
    stega: false,
  })

  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

export default async function Page({ params }: { params: QueryParams }) {
  const post = await sanityFetch<PostSanityDocument>({ query: POST_QUERY, params })
  if (!post) {
    return notFound()
  }
  return <Post post={post} />
}