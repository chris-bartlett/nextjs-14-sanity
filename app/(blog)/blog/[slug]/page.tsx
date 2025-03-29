import { client } from "@/sanity/lib/client";
import { formatDate } from "@/sanity/lib/date";
import { urlFor } from "@/sanity/lib/image";
import { fullBlog } from "@/sanity/lib/interface";
import { PortableText } from "next-sanity";
import Image from "next/image";

export const revalidate = 300; // revalidate at most 300 seconds

async function getData(slug: string) {
    const query = `*[_type == 'blog' && slug.current == '${slug}'] {
        title,
        content,
        titleImage,
        publishedAt,
        "currentSlug": slug.current,
    }[0]`
    const data = await client.fetch(query);
    return data;
}

export default async function BlogArticle({ params }: { params: { slug: string } }) {
    const data:fullBlog = await getData(params.slug);
    const { title, content, titleImage, publishedAt } = data;

    return (
        <div className="mt-8">
        <h1>
          <span className="block text-sm text-center text-primary font-semibold tracking-wide uppercase">
          {formatDate(publishedAt)}
          </span>
          <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
            {title}
          </span>
        </h1>
  
        <Image
          src={urlFor(titleImage).url()}
          width={800}
          height={800}
          alt="Title Image"
          priority
          className="rounded-lg mt-8 border"
        />
  
        <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
          <PortableText value={content} />
        </div>
      </div>
    )
}