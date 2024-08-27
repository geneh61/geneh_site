import React from 'react'
import Layout from '../components/layout'
import ProjectCard from '../components/ProjectCard'
import styled from 'styled-components'
import SocialIcons from '../components/socialIcons'
import Seo from '../components/seo'

const ProjectsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`

const ProjectsTitle = styled.h1`
  color: #02137A;
  margin-bottom: 20px;
`

const ProjectsPage = () => {
  const projects = [
    {
      title: "YouTube Caption Translator",
      description: "Browser extension that translates YouTube captions using Gemini API.",
      githubUrl: "https://chromewebstore.google.com/detail/youtube-caption-translato/galnonhhackeloafnogiijikiilmkjga"
    },
    {
      title: "Online Custom Quiz Lobby",
      description: "Kahoot Clone that utilizes web sockets.",
      githubUrl: "https://github.com/yesh0907/Toohak-BE"
    },
    {
      title: "Stock Recommender",
      description: "Uses Sentiment Analysis and Yahoo Finance API to tell you to buy or sell",
      githubUrl: "https://github.com/geneh61/Stock-Project"
    },
    {
      title: "Text Editor",
      description: "It's a text editor! Built in C!",
      githubUrl: "https://github.com/geneh61/Text-Editor-C"
    },
    {
      title: "Personal Website",
      description: "You're on it right now, but this'll link to something new in the future!",
      githubUrl: "/projects"
    }
  ]

  return (
    <Layout>
      <Seo title="Projects" />
      <ProjectsContainer>
        <ProjectsTitle>My Projects</ProjectsTitle>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            githubUrl={project.githubUrl}
          />
        ))}
      </ProjectsContainer>
      <SocialIcons />
    </Layout>
  )
}

export default ProjectsPage