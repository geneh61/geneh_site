import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/geneh61' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/genehan-cs' },
];

const SocialIcons = () => {
  return (
    <div className="flex justify-center gap-6 mt-8">
      {socialLinks.map((link) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 transition-colors hover:text-white"
          whileHover={{ y: -3 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <link.icon size={24} />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;