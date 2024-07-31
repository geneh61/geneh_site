import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  padding: 20px;
  margin-bottom: 20px;
  transition: box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  }
`

const Title = styled.h2`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 10px;
`

const Description = styled.p`
  color: #444;
  font-size: 1rem;
`

const ProjectCard = ({ title, description, githubUrl }) => (
  <Card onClick={() => window.open(githubUrl, '_blank', 'noopener,noreferrer')}>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Card>
)

export default ProjectCard