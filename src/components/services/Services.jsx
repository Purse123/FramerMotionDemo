import React, { useRef } from "react";
import "./services.scss";
import { motion, useInView} from "framer-motion";
import Box from "./Box";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
}


function Services() {

  const ref = useRef();

  return (
    <motion.div className="services" variants={variants} initial="initial" ref={ref}>
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on growing your business <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.avif" alt="business" />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your</b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <Box
          title="Branding"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi similique perferendis eveniet aliquam eum sequi assumenda modi ut tenetur illum?"
        />
        <Box
          title="Branding"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi similique perferendis eveniet aliquam eum sequi assumenda modi ut tenetur illum?"
        />
        <Box
          title="Branding"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi similique perferendis eveniet aliquam eum sequi assumenda modi ut tenetur illum?"
        />
        <Box
          title="Branding"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi similique perferendis eveniet aliquam eum sequi assumenda modi ut tenetur illum?"
        />
      </motion.div>
    </motion.div>
  );
}

export default Services;
