import React from "react";
import { motion } from "framer-motion";

function Box(props) {
  return (
    <motion.div
      className="box"
      whileHover={{ backgroundColor: "lightgray", color: "black" }}
    >
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <button>Go</button>
    </motion.div>
  );
}

export default Box;
