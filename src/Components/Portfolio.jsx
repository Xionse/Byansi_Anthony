/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
// first card
import image from "../images/Login And signUp.png";
const imageAltText = "Project 1";

//2nd card
import image from "../images/Frame 1.jpg";
const imageAltText = "Project 1";

// 3rd image
import image from "../images/Frame 2.jpg";
const imageAltText = "Project 1";

// image 4
import image from "../images/christmas.png";

const imageAltText = "Project 1";













// import image from "../images/Login And signUp.png";

// const imageAltText = "Project 1";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */

const projectList = [
  {
    title: "1. Login and signup",
    description:
      "A login and signup screen for An app.",
      // <Card image="https://picsum.photos/200/300" title="Image 1" />,
    // url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  
  {
    title: "2. App Sketch For Addax Uganda light mode",
    description:
      "A tech/medical platform  for all deliveries and services.",
    // url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "3. App Sketch For Addax Uganda Dark mode",
    description:
      "A tech/medical platform  for all deliveries and services.",
      // <Card image="https://picsum.photos/200/300" title="Image 1" />,
    // url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "4. Chrsiatmas App Design 🎉",
    description:
      "A site that where users can purchase christmas gift card for their friends and family.",
    // url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  // {
  //   title: "GitHub Codespaces and github.dev",
  //   description:
  //     "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
  //   url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  // },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
       
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;




