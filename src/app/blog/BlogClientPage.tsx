"use client";

import { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { getPostData } from './actions';

type PostPreview = { slug: string; date: string; title: string; };
type PostContent = { contentHtml: string; date: string; title: string; };

export default function BlogClientPage({ posts }: { posts: PostPreview[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<PostContent | null>(null);

  async function openModal(slug: string) {
    const postData = await getPostData(slug);
    setSelectedPost(postData);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <main className="min-h-screen bg-[--color-background-dark] text-white py-24 px-4">
      <section className="container mx-auto max-w-3xl">
        <h1 className="text-5xl font-bold mb-8 border-b border-gray-700 pb-4">Blog</h1>
        <ul>
          {posts.map(({ slug, date, title }) => (
            <li key={slug} className="mb-6">
              <button onClick={() => openModal(slug)} className="text-left">
                <h2 className="text-2xl font-semibold text-[--color-accent-teal] hover:underline">{title}</h2>
              </button>
              <small className="text-gray-400">{date}</small>
            </li>
          ))}
        </ul>
      </section>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl glass-card p-6 text-left align-middle shadow-xl transition-all">
                  {selectedPost && (
                    <article>
                      <Dialog.Title as="h1" className="text-4xl font-bold mb-2 text-white">
                        {selectedPost.title}
                      </Dialog.Title>
                      <div className="text-gray-400 mb-6">{selectedPost.date}</div>
                      <div
                        className="prose prose-invert lg:prose-xl max-h-[70vh] overflow-y-auto"
                        dangerouslySetInnerHTML={{ __html: selectedPost.contentHtml }}
                      />
                      <div className="mt-6 text-right">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-[--color-accent-teal] px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80 focus:outline-none"
                          onClick={closeModal}
                        >
                          Close
                        </button>
                      </div>
                    </article>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </main>
  );
}