import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from '../../components/portofolio/PageHeader';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import resumeIMG from '../../images/resume.jpg';

import './resume.css';

/**
 * Represents the Landing page component.
 * Displays the main landing page content including Hero, Drawing, and About sections.
 *
 * @component
 * @param {Object} props - Contains `name` and `tagline` properties
 */


const Resume = ({ brand, name, color }) => {
  const urlResume =
    'https://drive.google.com/file/d/1t-bVQIskRWZnv87K0QVE-vxNCvsCjyu0/view';
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  // Using react-intersection-observer to determine if the component is in view
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Variants for staggered animations
  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for paragraph animations
  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="resume container">
      <PageHeader title="Resume" description="Uncover my expertise" />
      {/* <p className="brand">{brand}</p>
       */}

      <div className="aboutContainer container">
        <div className="row">
          <motion.div
            className="personalImage col-12 col-lg-6"
            ref={ref}
            initial={{ x: '-10vw', opacity: 0, scale: 0.5 }}
            animate={
              inView
                ? { x: 0, opacity: 1, scale: 1 }
                : { x: '-10vw', opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05 }}>
            {/* Display the personal image */}
            <motion.img src={resumeIMG} alt={name} />
          </motion.div>
          <div className="personalInfo col-12 col-lg-6">
            <motion.div className="contentContainer" variants={staggerVariants}>
              {/* Display greeting and job title with animation */}
              {/* <motion.h5 variants={paragraphVariants}>
                My pleasure I am looking forward to working with you as well
              </motion.h5> */}

              {/* Display content description with animation */}
              <motion.div
                className="contentDescription"
                variants={staggerVariants}
                initial="initial"
                animate={inView ? 'animate' : 'initial'}>
                {/* Paragraphs with animation */}
                <motion.h5 variants={paragraphVariants}>
                  ✨ The combination of the right technical skills
                </motion.h5>
                <motion.p variants={paragraphVariants}>
                  With of technical expertise, creative thinking, and my
                  background in computer science allows me to approach every
                  project with a deep understanding of the end-user perspective,
                  resulting in highly effective user-centered digital products.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  I am currently seeking opportunities as a{' '}
                  <span style={{ color: 'var(--hl-color)' }}>
                    MERN Fullstack Developer, Fullstack Developer, Backend
                    Developer, and Frontend Developer
                  </span>
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  I look forward to finding out more about the position and how
                  my skills and past experiences can contribute to your company.
                </motion.p>
                <br />
                <motion.h4 variants={paragraphVariants}>
                  Do not hesitate to contact me 🤙
                </motion.h4>
              </motion.div>

              {/* Button to view the portfolio */}
              <NavLink>
                <motion.button
                  className="btn"
                  // Apply scale animation on hover
                  whileHover={{ scale: 1.05 }}
                  // Apply scale animation on tap
                  whileTap={{ scale: 0.99 }}
                  style={{ backgroundColor: color }}
                  onClick={() =>
                    openInNewTab(
                      `${urlResume}`,
                    )
                  }>
                  {/* Display the button name */}
                  <p>View Resume</p>
                  <div>
                    {/* Display the arrow icon */}
                    <FiArrowUpRight className="arrow-icon" />
                  </div>
                </motion.button>
              </NavLink>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Define the expected prop types for Resume component
Resume.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};


export default Resume;
