
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
import profile from "./assets/profile.png"; // Ensure you have the correct profile image
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import sass from "./assets/techstack/sass.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import c from "./assets/techstack/c.png";
import python from "./assets/techstack/Python.png"; 
import java from "./assets/techstack/Java.png";     
import typescript from "./assets/techstack/TypeScript.png"; 
import linux from "./assets/techstack/linux.png";   
import csharp from "./assets/techstack/CSharp.png";   

import FlightImage from "./assets/projects/FlightImage.png"; 
import GoNatureImage from "./assets/projects/GoNatureImage.png";
import nutriImg from "./assets/projects/nutri.png";

export const logos = {
  logogradient: logogradient,
  logo: logo,
};

export const personalDetails = {
  name: "Yossi Shem Tov",
  tagline: "Software engineering student",
  img: profile,
  about: `Final-year software engineering student. Detail-oriented and proficient in programming. I am a fast learner and a team player, eager to apply my acquired knowledge in a creative environment.`,
};

export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/yossi-shem-tov/",
  github: "https://github.com/yossishemtov",
 
};

export const workDetails = [
  {
    Position: "Tutor",
    Company: "Self-Employed",
    Location: "Online",
    Type: "Part-Time",
    Duration: "2020 - Present",
    Description: "Tutoring students in programming and mathematics, enhancing their understanding and skills in various subjects."
  },
  {
    Position: "Software Developer",
    Company: "Elbit Naval Systems",
    Location: "Haifa",
    Type: "Part-Time",
    Duration: "2024 - Present",
    Description: "As a software development student, I develop microservices that are integrated into various systems. My responsibilities include identifying issues and troubleshooting problems related to these integrations, utilizing technologies such as Docker and Kubernetes."
  },
];


export const eduDetails = [
  {
    Position: "Bachelor's Degree in Software Engineering",
    Company: "Braude College of Engineering",
    Location: "Israel",
    Type: "Full Time",
    Duration: "2021 - 2025",
    GPA: "92",
  },
  {
    Position: "High School Diploma",
    Company: "Ofek High School",
    Location: "Israel",
    Type: "Full Time",
    Duration: "2014 - 2017",
  },
];

export const programmingLanguages = [
  "Python",
  "Java",
  "JavaScript",
  "SQL",
  "VBA",
  "C",
  "C#",
  "TypeScript",
];

export const militaryService = {
  Service: "Full military service as a combat soldier in Golani.",
  Duration: "2014 - 2017"
};

export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  npm: npm,
  git: git,
  github: github,
  python: python,        
  java: java,            
  typescript: typescript, 
  linux: linux,  
  csharp:csharp,  
  c:c      
};

export const projectDetails = [
  {
    title: "Flight Deals Notifier",
    image: FlightImage, 
    description: `Flight Deals Notifier is a Python program that helps users find and track the lowest flight prices for their desired travel destinations. It utilizes the Kiwi API for flight searches, the Sheety API for data storage in Google Sheets, and the Twilio API for SMS notifications, providing real-time updates on flight prices.`,
    techstack: "Python, Flask, API Integration, Twilio",
    previewLink: "",
    githubLink: "https://github.com/yossishemtov/flight-deals.git",
  },
  {
    title: "GoNature Park Management Software",
    image: GoNatureImage, 
    description: `GoNature is a Java-based application designed with JavaFX for the GUI and utilizes the OCSF (Object Client-Server Framework) for effective client-server communication. Structured around the MVC (Model-View-Controller) architecture, it addresses the complex needs of managing park facilities and services, focusing on system design, implementation, and UML documentation.`,
    techstack: "Java, JavaFX, OCSF, MySQL",
    previewLink: "https://youtu.be/QcyWfw_7XsQ?si=WFcvEFqIXvlcc4Q8",
    githubLink: "https://github.com/yossishemtov/SemesterProjectGoNature.git",
  },
  {
    title: "Nutri+",
    image: nutriImg,  
    description: `Nutri+ is a web application designed to help users manage their nutrition and meal planning effectively. Users can register, share recipes, add ingredients to their shopping list, and plan meals while calculating calorie intake. The application features a user-friendly interface and integrates several functionalities for optimal meal management.`,
    techstack: "React, Node.js, Express.js, MongoDB, Tailwind CSS",
    previewLink: "https://youtu.be/lFJu2q-Gqb8",
    githubLink: "https://github.com/yossishemtov/Nutri-Nutrition-app.git",
  },
];


export const contactDetails = {
  email: "yossishem7@gmail.com",
  phone: "+972-52-7962746",
  resume: "/resume.pdf",
};
