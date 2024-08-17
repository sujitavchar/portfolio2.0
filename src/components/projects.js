import React from "react";
import ProjectCard from "./ProjectCard";
import p1img from "./images/project1-img.png";
import p2img from "./images/project2-img.png";
import p3img from "./images/project3-img.png";
import p4img from "./images/prj4.png";
import "../App.css";

const projectsData = [
  {
    name: "Retro",
    image: p1img,
    description: "This is a simple music player with basic functionalities.",
    details:
      "Retro is a basic yet functional music player designed with a nostalgic touch, reflecting the classic look and feel of vintage audio devices. The user interface is intuitive, making it easy for users to navigate through their playlists and enjoy their favorite tracks with a touch of retro aesthetics.",
    learning1: "User Interaction with JavaScript.",
    learning2: "Audio file handling and synchronization.",
    learning3: "Software Design.",
    
      link: "https://sujitavchar.github.io/Retro---Feel-Your-Music-/",
 
  },
  {
    name: "Money Morpher",
    image: p2img,
    description: "API based simple Currency Converter    .",
    details:
      "Money Morpher is a versatile and user-friendly currency converter designed to streamline financial transactions and facilitate seamless international monetary exchanges. With its intuitive interface and robust functionality, Money Morpher empowers users to effortlessly convert between different currencies with accuracy and speed.",
 /*   learning1: "User Interaction with JavaScript.",
    learning2: "Audio file handling and synchronization.",
    learning3: "Software Design.",*/
    
      link: "https://sujitavchar.github.io/Currency-Converter/",
  },
  {
    name: "EchoScript",
    image: p3img,
    description: "Python based  audio to text converter (Hindi and English)    .",
    details:
      "EchoScript represents a cutting-edge solution for converting audio files into text using advanced Python-based technologies. This innovative tool leverages powerful algorithms to transcribe spoken words from audio recordings into written text with high accuracy and efficiency. ",
  /*  learning1: "User Interaction with JavaScript.",
    learning2: "Audio file handling and synchronization.",
    learning3: "Software Design.",*/
    
      link: "https://github.com/sujitavchar/DARPG-hackathon",
  },
  {
    name: "BlogBook",
    image: p4img,
    description: "E- Notebook on the cloud which supports CRUD operations  .",
    details:
      "BlogBook is an online platform where you can create,edit and update your notes/blogs. [Note :- Wait for some time on the home page. It takes time to load content from the database",
 
    
      link: "https://blogbook-saprojects.netlify.app",
  },

  // more projects
];

function projects() {
  return (
    <div>
      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <div className="project-list">
          <div className="projects-container">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default projects;
