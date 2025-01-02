import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from '@/sanity/lib/queries';
import { Post } from '@/components/Post';
import { notFound } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: post } = await sanityFetch({ query: POST_QUERY, params: await params });

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto p-6 md:p-12">
      <div className="grid grid-cols-1 gap-6">
        <Post {...post} />
      </div>
    </main>
  );
}