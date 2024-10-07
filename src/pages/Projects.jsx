// src/pages/Projects.js
import React from 'react';
import { Typography, Box } from '@mui/material';
import ProjectCard from '../components/ProjectCard'; // Import the ProjectCard component
import projectImage1 from '../images/CoreJava.jpg'; // Replace with your actual image paths
import projectImage2 from '../images/dsa_winner.jpg';
import EventmanagementProject from '../images/ProjectEvent.jpeg';
import InstaProject from '../images/ProjectInsta.jpeg';
import NetflixProject from '../images/ProjectNetflix.jpeg';

function Projects() {
    const projects = [
        {
          image: EventmanagementProject, // Replace with your image variable
          name: "Event Management App for SRC",
          description: "The Event Management App is a collaborative project I developed during a Hackathon organized by the Department of Computer Science and Engineering, RGUKT RK Valley. The app allows organizers to add details about both past and upcoming events, enabling coordinators and students to easily view all events in one place. Key features include user authentication through Firebase, a splash screen showcasing the SRC logo, seamless navigation between multiple activities, and data/image uploads to Firebase for efficient event management.",
          technologies: ["Kotlin","Jetpack Compose", "Firebase"],
          frontendLink: "https://github.com/revanthkumarJ/SRC_Hackathon",
          backendLink: null, // No backend link
          videoLink: "https://www.linkedin.com/posts/jilakararevanthkumar_excited-to-share-my-progress-in-android-activity-7223550064177135616-QmtR?utm_source=share&utm_medium=member_desktop"
        },
        {
          image: InstaProject, // Replace with your image variable
          name: "Instagram UI Prototype",
          description: "In this project, I designed an Instagram-inspired UI prototype using Jetpack Compose. The prototype features a modern layout with a bottom navigation bar and several dynamic pages that showcase different aspects of the app. I implemented navigation using TabRow and NavHost, allowing users to switch between various sections effortlessly. This project has been a fantastic opportunity to explore UI design patterns and the capabilities of Jetpack Compose.",
          technologies: ["Kotlin","Jetpack Compose"],
          frontendLink: "https://github.com/revanthkumarJ/InstaUI",
          backendLink: null, // No backend link
          videoLink: "https://www.linkedin.com/posts/jilakararevanthkumar_androiddevelopment-jetpackcompose-uiuxdesign-activity-7219177444170248194-KBl6?utm_source=share&utm_medium=member_desktop"
        },
        {
          image: NetflixProject, // Replace with your image variable
          name: "Netflix Home Page UI Prototype",
          description: "This project features a prototype of the Netflix home page, developed using Jetpack Compose. I focused on creating a visually appealing layout that includes a navigation bar and multiple categories of content, such as 'Watch it Again,' 'Anime,' and more. Utilizing Jetpack Compose concepts like LazyRow and various UI components, this project has significantly enhanced my understanding of modern Android UI design techniques.",
          technologies: ["Kotlin","Jetpack Compose"],
          frontendLink: "https://github.com/revanthkumarJ/NetFlixUI",
          backendLink: null, // No backend link
          videoLink: "https://www.linkedin.com/posts/jilakararevanthkumar_androiddevelopment-jetpackcompose-uiuxdesign-activity-7216054864601055232-R0yI?utm_source=share&utm_medium=member_desktop"
        },
        // {
        //   image: projectImage1, // Replace with your image variable
        //   name: "DevPro",
        //   description: "DevPro is my first comprehensive web development project, designed to serve as a learning hub for users interested in HTML, CSS, and JavaScript. The site features a user authentication system with secure sign-up and login processes, tutorial pages for each technology, and interactive quizzes to assess users’ knowledge. Additionally, the platform includes various simple JavaScript projects, showcasing the code and allowing users to execute the projects directly. This project represents a significant step in my web development journey, blending practical skills with user-centric design.",
        //   technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "SQL"],
        //   frontendLink: null, // Add frontend link if available
        //   backendLink: null, // No backend link
        //   videoLink: "https://www.linkedin.com/posts/jilakararevanthkumar_webdevelopment-learning-html-activity-7200797395209625600-bSpZ?utm_source=share&utm_medium=member_desktop"
        // },
      ];
      
      

  return (
    <Box 
      sx={{ 
        padding: '20px', // Adjust padding if needed
        backgroundColor: '#121212', 
        color: '#ffffff'
      }}
    >
      <Typography 
        variant="h4" 
        sx={{ fontWeight: 'bold', fontFamily: 'Roboto, sans-serif', marginBottom: '20px' }}
      >
        Projects
      </Typography>
      
      {/* Project Cards Layout */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between', // Ensure even space distribution
          gap: '20px' // Space between project cards
        }}
      >
        {projects.map((project, index) => (
          <Box 
            key={index} 
            sx={{ 
              flex: '1 0 calc(33.33% - 20px)', // Each card takes 1/3 of the width with a gap
              marginBottom: '20px' // Ensure space at the bottom for wrap
            }}
          >
            <ProjectCard 
              image={project.image} 
              name={project.name} 
              description={project.description} 
              technologies={project.technologies} 
              frontendLink={project.frontendLink} 
              backendLink={project.backendLink} 
              videoLink={project.videoLink} 
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Projects;
