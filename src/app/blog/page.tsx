import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogClientPage from './BlogClientPage';

export default async function BlogPage() {
  const posts = getSortedPostsData();
  return <BlogClientPage posts={posts} />;
}

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