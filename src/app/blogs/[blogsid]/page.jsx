import PostDat from "@/app/components/post";
import React from "react";
const blogsData = [
  {
    id: 1,
    title: "Getting Started with Next.js 15",
    slug: "getting-started-with-nextjs-15",
    excerpt:
      "Learn the fundamentals of Next.js 15, including the App Router, Server Components, and how to build your first project from scratch.",
    image: "https://picsum.photos/seed/nextjs/600/400",
    author: "Rakibul Hasan",
    date: "2026-09-10",
    category: "Web Development",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS for Rapid UI Design",
    slug: "mastering-tailwind-css",
    excerpt:
      "Discover how utility-first CSS with Tailwind can speed up your workflow and help you build consistent, responsive designs faster.",
    image: "https://picsum.photos/seed/tailwind/600/400",
    author: "Tasnim Ahmed",
    date: "2026-09-05",
    category: "CSS",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Understanding React Hooks in Depth",
    slug: "understanding-react-hooks",
    excerpt:
      "A deep dive into useState, useEffect, useContext, and other essential hooks that every React developer should master.",
    image: "https://picsum.photos/seed/reacthooks/600/400",
    author: "Nusrat Jahan",
    date: "2026-08-28",
    category: "React",
    readTime: "7 min read",
  },
  {
    id: 4,
    title: "Building a REST API with Node.js and Express",
    slug: "building-rest-api-nodejs-express",
    excerpt:
      "Step-by-step guide to creating a scalable REST API using Node.js, Express, and MongoDB for your next backend project.",
    image: "https://picsum.photos/seed/nodejs/600/400",
    author: "Shafiul Islam",
    date: "2026-08-15",
    category: "Backend",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "A Beginner's Guide to Git and GitHub",
    slug: "beginners-guide-git-github",
    excerpt:
      "Everything you need to know to start using Git for version control and collaborate with others on GitHub effectively.",
    image: "https://picsum.photos/seed/git/600/400",
    author: "Farhana Akter",
    date: "2026-07-30",
    category: "Tools",
    readTime: "5 min read",
  },
];
const page = async ({ params }) => {
  const { blogsid } = await params;
  if (blogsData.length < blogsid) {
    return <div>lot avail abale</div>;
  }
  const post = blogsData.find((post) => post.id === parseInt(blogsid));
  console.log(post);

  return (
    <div>
      <h1>
        hello box id <PostDat post={post}></PostDat>
      </h1>
    </div>
  );
};

export default page;
