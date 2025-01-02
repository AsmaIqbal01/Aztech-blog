import { Author } from '@/components/Author';
import { Categories } from '@/components/Categories';
import { POSTS_QUERYResult } from '@/sanity/types';
import { PublishedAt } from '@/components/PublishedAt';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

export function PostCard(props: POSTS_QUERYResult[0]) {
  const { title, author, mainImage, publishedAt, categories } = props;

  return (
    <Link className="group block" href={`/posts/${props.slug!.current}`}>
      <article className="flex flex-col-reverse gap-4 md:grid md:grid-cols-12 md:gap-6 p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="md:col-span-2 md:pt-1">
          <Categories categories={categories} />
        </div>
        <div className="md:col-span-5 md:w-full">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-800 group-hover:text-pink-600 transition-colors relative">
            <span className="relative z-[1]">{title}</span>
            <span className="bg-pink-50 z-0 absolute inset-0 rounded-lg opacity-0 transition-all group-hover:opacity-100 group-hover:scale-y-110 group-hover:scale-x-105 scale-75" />
          </h2>
          <div className="flex items-center mt-2 md:mt-4 gap-x-4">
            <Author author={author} />
            <PublishedAt publishedAt={publishedAt} />
          </div>
        </div>
        <div className="md:col-start-9 md:col-span-4 rounded-lg overflow-hidden flex">
          {mainImage ? (
            <Image
              src={urlFor(mainImage).width(400).height(200).url()}
              width={400}
              height={200}
              alt={mainImage.alt || title || ''}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          ) : null}
        </div>
      </article>
    </Link>
  );
}