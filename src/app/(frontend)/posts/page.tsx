import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from '@/sanity/lib/queries';
import { PostCard } from '@/components/PostCard';
import { Title } from '@/components/Title';
import CommentSection from "@/components/CommentSection";

export default async function Page() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });

  return (
    <main className="container mx-auto p-6 md:p-12">
      <Title>Post Index</Title>
      <div className="flex flex-col gap-12 py-6 md:py-12">
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
      <CommentSection />
    </main>
  );
}