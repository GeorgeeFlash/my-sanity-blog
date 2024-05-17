import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { PostSanityDocument } from "@/typings";
import { urlForImage } from "@/sanity/lib/image"
import { RichTextComponents } from "./RichTextComponents"

export default function Post({ post }: { post: PostSanityDocument }) {
  const { title, mainImage, body } = post

  return (
    // <main className="container mx-auto prose prose-lg p-4">
    //   {title ? <h1>{title}</h1> : null}
    //   {mainImage ? (
    //     <Image
    //       className="float-left m-0 w-1/3 mr-4 rounded-lg"
    //       src={urlFor(mainImage).width(300).height(300).quality(80).url()}
    //       width={300}
    //       height={300}
    //       alt={mainImage.alt || ""}
    //     />
    //   ) : null}
    //   {body ? <PortableText value={body} /> : null}
    // </main>
    <article className="px-10 container pb-28 ">
      <section className="space-y-2 border border-[#E4242a] text-white not-prose">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            {mainImage ? (
              <Image
              className="object-cover object-center mx-auto"
              src={urlForImage(mainImage)}
              alt={mainImage.alt || `${post.author.name}'s cover image`}
              fill
            />
            ) : null}
          </div>

          <section className="p-5 bg-[#E4242a] w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div className="">
                {title ? <h1 className="text-4xl font-extrabold">{post.title}</h1> : null}
                
                <p className="">
                  {new Date(post._createdAt).toLocaleDateString("en-Us",{
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  className="rounded-full"
                  src={urlForImage(post.author.image)}
                  alt={mainImage.alt || `${post.author.name}'s profile photo`}
                  height={40}
                  width={40}
                />
                <div className="">
                  <h3 className="text-lg font-bold">{post.author.name}</h3>
                  <div className="">
                    {/* Later */}
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <h2 className="italic pt-10">{post.description}</h2>
              <div className="flex items-center justify-end mt-auto space-x-2">
                {post.categories.map((category) => (
                  <p 
                    key={category._id}
                    className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4"
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="prose prose-lg mt-5">
        {body ? <PortableText value={body} components={RichTextComponents} /> : null}
      </section>
    </article>
  )
}