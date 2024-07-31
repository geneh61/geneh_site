import * as React from 'react';
import Layout from '../components/layout';
import SocialIcons from '../components/socialIcons';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';

export default function About() {
  return <Layout>
    <Seo title="About" />
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">About me.</h1>
        <StaticImage
          src="../images/lilbro.jpg"
          loading="eager"
          width={256}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
        <p className="text-lg about-blurb">Hi there! I'm Gene Han, a passionate software engineer with a knack for creating seamless user experiences and efficient code. With a background in Computer Science at UCSC, I've honed my skills to create a solution that will sate my next curiosity.</p>

        <p className="text-lg about-blurb">I thrive on solving complex problems and turning innovative ideas into reality. My journey in software engineering has taken me through various exciting projects, from dynamic web applications to powerful backend systems. I believe in the power of technology to transform lives and am committed to staying at the forefront of this ever-evolving field.</p>

        <p className="text-lg about-blurb">When I'm not coding, you can find me in a rock climbing gym, at a concert, or at home experimenting with new recipes. Let's connect and build something amazing together! </p>
        <p className="text-lg about-blurb">Here are a few technologies I have been working with recently:</p>
        <ul>
          <li>C++</li>
          <li>Python</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>NextJS</li>
        </ul>
      </div>
    </div>
    <SocialIcons />
  </Layout>
}

