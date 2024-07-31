import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import SocialIcons from "../components/socialIcons"

const links = [
  {
    text: "My Blog",
    url: "/blog",
    description:
      "I like to talk about random things.",
  },
  {
    text: "Test Page (About)",
    url: "/about",
    description:
      "Learn about me or something.",
  },
  {
    text: "Projects",
    url: "/projects",
    description:
      "These are some of the things I have worked on."
  },
  {
    text: "Extra Page >:)",
    url: "/extra",
    description:
      "Side project wip"
  },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/boat.jpg"
        loading="eager"
        width={256}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Hey, I'm <b>Gene Han.</b> I use this page to showcase who I am and what I like to work on. I love working with new tech!
      </h1>
      <p className={styles.intro}>
        <br />
      </p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    <SocialIcons />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
