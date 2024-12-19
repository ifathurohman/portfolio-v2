import React from "react";
import PropTypes from 'prop-types'
import Hero from "../../components/portofolio/Hero";
import Draw from "../../components/portofolio/Draw";
import About from "../../components/portofolio/AboutMe";

/**
 * Represents the Landing page component.
 * Displays the main landing page content including Hero, Drawing, and About sections.
 *
 * @component
 * @param {Object} props - Contains `name` and `tagline` properties
 */
const Landing = ({ name, tagline }) => {
  // Inline styles for the main landing container
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <>
      {/* Main Landing Page */}
      <main className="landing container" style={styles.landing}>
        {/* Display the drawing component */}
        <Draw />

        {/* Display the hero component */}
        <Hero name={name} tagline={tagline} />
      </main>

      {/* Display the about section */}
      <About />
    </>
  );
};

Landing.propTypes = {
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
};

export default Landing;
