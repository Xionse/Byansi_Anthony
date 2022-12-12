/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/mosaic.svg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Hi there! My name is Anthony Byansi, and I am a UX/UI designer with a passion for creating intuitive and engaging digital experience. I have a background in design, with a deep understanding of color theory, typography, layout, and user-centered design principles. I also have experience with design tools such as Sketch, Figma, and Adobe Creative Suite.  "
/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "Mobile App Development",
  "User experience",
  "Inclusive design",
  "Focus group testing",
  "Mobile user interfaces",
  "Graphic design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "As a UX and UI designer, I'm passionate about creating intuitive and user-friendly designs that enhance the user experience. my career goal is to improve the way people interact with technology by designing easy-to-use interfaces. I'm constantly exploring new design techniques and staying up-to-date with the latest design trends. I am responsible for designing the user experience and user interface of digital products, such as websites and mobile apps. I create wireframes, prototypes, and high-fidelity designs, as well as conduct user research and testing to ensure that the product is intuitive, user-friendly, and visually appealing. My goal as a UX/UI designer is to create designs that meet the needs of users and improve their overall experience with the product. I believe that great design has the power to drive user engagement, conversion, and satisfaction, and I am committed to helping businesses and organizations achieve their goals through thoughtful and effective design. If you have a project that you think would benefit from my UX/UI design skills, please don't hesitate to get in touch. I would love to discuss your goals and ideas, and help you bring your vision to life. Thank you for considering me for your design needs!";

const About = () => {
  return (
    <section className="light" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
