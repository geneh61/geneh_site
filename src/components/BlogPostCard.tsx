// src/components/BlogPostCard.tsx
"use client";

import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { getPostData } from '@/app/blog/actions';
import { motion } from 'framer-motion';

type PostPreview = { slug: string; date: string; title: string; };
type PostContent = { contentHtml: string; date: string; title: string; };

export default function BlogPostCard({ post }: { post: PostPreview }) {
  const [isOpen, setIsOpen] = useState(false);
  // State to hold the full post content, separate from what's displayed
  const [fullPostContent, setFullPostContent] = useState<PostContent | null>(null);

  // Pre-fetch the post content on hover
  const handleMouseEnter = async () => {
    if (!fullPostContent) { // Only fetch if we haven't already
      const postData = await getPostData(post.slug);
      setFullPostContent(postData);
    }
  };

  // Open the modal using the pre-fetched content
  const openModal = () => {
    if (fullPostContent) {
      setIsOpen(true);
    } else {
      // Fallback in case the hover event didn't fire (e.g., on mobile)
      handleMouseEnter().then(() => setIsOpen(true));
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.div
        className="glass-card flex h-full cursor-pointer flex-col p-6"
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={openModal}
        onMouseEnter={handleMouseEnter} // <-- Pre-fetch on hover
      >
        <h3 className="flex-grow text-xl font-bold text-white">{post.title}</h3>
        <p className="mt-4 text-sm text-gray-400">{post.date}</p>
      </motion.div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl glass-card p-6 text-left align-middle shadow-xl transition-all will-change-transform">
                  {fullPostContent && (
                    <article>
                      <Dialog.Title as="h1" className="text-4xl font-bold text-white mb-2">{fullPostContent.title}</Dialog.Title>
                      <div className="text-gray-400 mb-6">{fullPostContent.date}</div>
                      <div className="prose prose-invert lg:prose-xl max-h-[70vh] overflow-y-auto" dangerouslySetInnerHTML={{ __html: fullPostContent.contentHtml }} />
                      <div className="mt-6 text-right">
                        <button type="button" className="inline-flex justify-center rounded-md border border-transparent bg-[--color-accent-teal] px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80" onClick={closeModal}>Close</button>
                      </div>
                    </article>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}