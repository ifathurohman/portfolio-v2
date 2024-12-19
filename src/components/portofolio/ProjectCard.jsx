import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "./Image";
import Technology from "./Technology";

/**
 * Represents a project card component.
 *
 * @component
 * @param {string} title - The title of the project.
 * @param {string} image - The image source for the project thumbnail.
 * @param {string} color - The background color of the project card.
 * @param {number} id - The unique identifier of the project.
 */

const ProjectCard = ({ title, image, color, id, techno }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const variants = {
    hidden: { y: "10vw", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <Link
      to={`/portfolio/${title.toLowerCase()}`}
      key={id}
      className="projectLink col-12 col-lg-6"
    >
      <motion.div
        ref={ref}
        className=""
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {/* <div
          style={{ backgroundColor: color }}
          className="projectCard d-flex align-items-center justify-content-center p-5"
          onClick={() => { }}
        >
          <div className="textWrap col-6 d-flex flex-column justify-content-center align-items-center m-5">
            <h3 className="projectTitle">{title}</h3>
            <span className="viewWork">
              View Work <FiArrowUpRight />
            </span>
          </div>
          <div className="imageContainer col-6 d-flex align-items-center justify-content-center">
            <Image src={image} alt="Laptop displaying the application" />
          </div>
        </div>
        <div className="mx-3 pb-3">
          <Technology key={id} techno={techno} />
        </div> */}
        <div className="flex justify-center items-center pb-4">
          <div className="max-w-[720px] mx-auto">
            {/* <!-- Centering wrapper --> */}
            <div style={{ backgroundColor: "black", borderRadius: "0px 0px 0px 30px" }}>
              <div
                className="projectCard d-flex align-items-center justify-content-center p-5"
                onClick={() => {}}
                style={{ backgroundColor: color }}
              >
                <div className="textWrap col-6 d-flex flex-column justify-content-center align-items-center m-5">
                  <h3 className="projectTitle">{title}</h3>
                  <span className="viewWork">
                    View Work <FiArrowUpRight />
                  </span>
                </div>
                <div className="imageContainer col-6 d-flex align-items-center justify-content-center">
                  <Image src={image} alt="Laptop displaying the application" />
                </div>
              </div>
              <div className="mx-3 pb-3">
                <Technology key={id} techno={techno} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
