import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'

const BlogPostContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <BlogPostContainer>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div className='blog-text' dangerouslySetInnerHTML={{ __html: post.html }} />
      </BlogPostContainer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default BlogPostTemplate