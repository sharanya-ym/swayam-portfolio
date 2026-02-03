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
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "FitAura – Fitness at Your Fingertips 🏋️‍♂️",
    description:
      "A MERN stack health and fitness platform providing personalized meal plans and workout routines based on user goals. Integrated external APIs and an XGBoost model for symptom-based health predictions.",
    url: "https://github.com/SidnaleSwayam/Fitaura.git", // replace with actual repo link
  },// replace with actual repo link
  
  {
    title: "EmotiVerse – Social Media Sentiment Analysis 💬",
    description:
      "Built a BERT-based sentiment analysis system to classify social media comments as positive, negative, or neutral. Developed an interactive dashboard using Flask and Streamlit for real-time insights.",
    url: "https://github.com/SidnaleSwayam/EmotiVerse-Unveiling-emotions-on-social-media-platform.git", // replace with actual repo link
  },
  {
    title: "BookAView – Stadium Seat Booking System 🎟️",
    description:
      "A full-stack MERN application for stadium seat booking with real-time seat selection, secure Razorpay payment integration, and responsive UI using React and React Router.",
    url: "https://github.com/SidnaleSwayam/BookAView---Stadium-seat-management.git", // replace with actual repo link
  },
  {
    title: "Twitter Clone – Clone Wars Hackathon 🐦",
    description:
      "Developed a Twitter-like social media application during the Clone Wars Hackathon with real-time features, user authentication, and responsive design.",

  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
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
