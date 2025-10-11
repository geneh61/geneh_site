"use client";
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <footer className="py-8 px-4 text-center text-gray-400">
      <div className="container mx-auto">
        <SocialIcons />
        <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} Gene Han. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;