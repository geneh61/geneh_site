
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Indie Game Discovery Platform",
    description: "A full-stack site built with the MERN stack, featuring new indie games.",
    image: "/images/indie.jpg",
    tags: ["Typescript", "React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://www.newindiegames.com/",
  },
  {
    id: 2,
    title: "Auto Video Clipper",
    description: "Python script that splits videos into small clips based on user specifications.",
    image: "/images/clip.png",
    tags: ["Python", "FFmpeg"],
    githubUrl: "https://github.com/geneh61/AutoClipper",
  },
  {
    id: 3,
    title: "AI Youtube Translation Extension",
    description: "Real time caption translation extension for Youtube videos, utilizing Gemini API.",
    image: "/images/gemini.png",
    tags: ["Javascript", "HTML", "CSS"],
    liveUrl: "https://chromewebstore.google.com/detail/youtube-caption-translato/galnonhhackeloafnogiijikiilmkjga",
    githubUrl: "https://github.com/geneh61/translate-extension",
  },
];