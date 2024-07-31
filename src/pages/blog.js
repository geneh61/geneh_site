import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import BlogPostCard from '../components/BlogPostCard'
import styled from 'styled-components'
import SocialIcons from '../components/socialIcons'
import Seo from '../components/seo'

const BlogContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <Seo title="Blog" />
      <BlogContainer>
        <h1>Blog Posts</h1>
        {posts.map(({ node }) => (
          <BlogPostCard
            key={node.id}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            description={node.frontmatter.description}
            slug={node.fields.slug}
          />
        ))}
      </BlogContainer>
      <SocialIcons />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
        edges {
            node {
                id
                frontmatter {
                    title
                    date(formatString: "MMMM DD, YYYY")
                    description
                }
                fields {
                    slug
                }
            }
        }
    }
}
`

export default BlogPage