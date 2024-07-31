import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  padding: 20px;
  margin-bottom: 20px;
`

const Title = styled.h2`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 10px;
`

const Date = styled.p`
  color: #666;
  font-size: 0.9rem;
`

const Description = styled.p`
  color: #444;
  font-size: 1rem;
`

const BlogPostCard = ({ title, date, description, slug }) => (
  <Card>
    <Link to={`/blog${slug}`} style={{ textDecoration: 'none' }}>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <Description>{description}</Description>
    </Link>
  </Card>
)

export default BlogPostCard