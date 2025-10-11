"use client";

import { useForm, ValidationError } from '@formspree/react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [state, handleSubmit] = useForm("mjkaaykl");

  if (state.succeeded) {
    return (
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[--color-background-dark]">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-4">Thanks for your message!</h2>
          <p className="text-gray-300">I'll get back to you as soon as possible.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[--color-background-dark]">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Have a question or a project in mind? My inbox is always open.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-md border border-gray-700 bg-gray-800 p-3 text-white placeholder-gray-500 focus:border-[--color-accent-teal] focus:outline-none focus:ring-2 focus:ring-[--color-accent-teal]"
            />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-md border border-gray-700 bg-gray-800 p-3 text-white placeholder-gray-500 focus:border-[--color-accent-teal] focus:outline-none focus:ring-2 focus:ring-[--color-accent-teal]"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-left" />
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full rounded-md border border-gray-700 bg-gray-800 p-3 text-white placeholder-gray-500 focus:border-[--color-accent-teal] focus:outline-none focus:ring-2 focus:ring-[--color-accent-teal]"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-left" />
            <button
              type="submit"
              disabled={state.submitting}
              className="neumorphic-button mx-auto flex items-center gap-2 px-8 py-3 font-semibold rounded-lg disabled:cursor-not-allowed disabled:opacity-50"
            >
              {state.submitting ? 'Sending...' : 'Send Message'} <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}