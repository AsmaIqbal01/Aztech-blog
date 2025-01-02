import Link from "next/link";
import { Title } from "@/components/Title";
import Image from "next/image";

export default async function Page() {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Title>AzTech Blog.</Title>
      <hr />
      <div className="flex justify-center">
        <Image 
          src="/mainimage.jpeg"
          alt="main image"
          width={500}
          height={500}
          className="object-cover w-full max-w-lg" // Adjust max-w-lg as needed
        />
      </div>
      <p className="text-2xl text-center">Welcome to AzTech Blog.</p>
      <Link href="/posts" className="text-center text-blue-500 hover:underline">
        Posts index &rarr;
      </Link>
    </section>
  );
}