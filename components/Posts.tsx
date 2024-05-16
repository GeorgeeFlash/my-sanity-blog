import { urlForImage } from "@/sanity/lib/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

type PostSanityDocument = SanityDocument<Post>

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  return (
    // <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
    //   {posts?.length > 0 ? (
    //     posts.map((post) => (
    //       <Link
    //         key={post._id}
    //         href={post.slug.current}
    //       >
    //         <h2 className="p-4 hover:bg-blue-50">{post.title}</h2>
    //       </Link>
    //     ))
    //   ) : (
    //     <div className="p-4 text-red-500">No posts found</div>
    //   )}
    // </main>
    <div className="">
      <hr className="border-[#E4242a] mb-10" />

      <div className="grid grid-cold-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {/* Posts */}
        {posts.map((post) => (
        <Link
          key={post._id}
          href={`post/${post.slug.current}`}
        >
          {/* <h2 className="p-4 hover:bg-blue-50">{post.title}</h2> */}
          <div className="flex flex-col group cursor-pointer" key={post._id}>
            <div className="relative w-full h-80 dro-shadow-xl group-hover:scale-105 transition-transform duration-200">
              <Image
                className="object-cover object-left lg:object-center"
                src={urlForImage(post.mainImage)}
                alt={post.author.name}
                fill
              />
              <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                <div className="">
                  <p className="font-bold">{post.title}</p>
                  <p>
                    {new Date(post._createdAt).toLocaleDateString(
                      "en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }
                    )}
                  </p>
                </div>

                <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                  {post.categories.map((category) => (
                    <div 
                      key={category._id}
                      className="bg-[#E4242a] text-center text-black px-3 py-1 rounded-full text-sm font-semibold" 
                    >
                      <p>{category.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 flex-1">
              <p className="underline text-lg font-bold">{post.title}</p>
              <p className="line-clamp-2 text-gray-500">{post.description}</p>
            </div>
            <p className="mt-5 font-bold flex items-center group-hover:underline">
              Read Post
              <ArrowUpRightIcon className="ml-2 h-4 w-4" />
            </p>
          </div>
        </Link>
        ))}
      </div>
    </div>
  );
}