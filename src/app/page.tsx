import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import BlogSection from "@/components/sections/BlogSection";
import Contact from "@/components/sections/Contact";

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function getSortedPostsData() {
  const postsDirectory = path.join(process.cwd(), '_posts');
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug,
      ...(data as { date: string; title: string }),
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default function Home() {
  const allPosts = getSortedPostsData();

  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <BlogSection allPosts={allPosts} />
      <Contact />
    </main>
  );
}