import { motion } from "framer-motion";

const Technology = ({ techno }) => {

    return (
        <div>
            <motion.h3
                className="techTitile"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                Technology Use
            </motion.h3>
            <div className="technoDetails">
                <div className="tech-card">
                    {techno.map((technology, i) => (
                        <motion.span
                            key={i}
                            className="technology"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.1,
                                ease: 'easeInOut',
                            }}>
                            {technology + ' '}
                        </motion.span>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Technology;
