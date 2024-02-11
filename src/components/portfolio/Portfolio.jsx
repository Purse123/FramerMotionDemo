import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Python",
    image: "./python.svg",
    description: "I am learning Python",
  },
  {
    id: 2,
    title: "React",
    image: "./React-icon.png",
    description: "I am learning React",
  },
  {
    id: 3,
    title: "Framer-motion",
    image: "./framer-motion.svg",
    description: "I am learning Framer motion",
  },
  {
    id: 4,
    title: "Django",
    image: "./Django_logo.png",
    description: "I am learning Javascript",
  },
];

const Single = ({ items }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-600, 600]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={items.image} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{items.title}</h2>
            <p>{items.description}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Portfolio() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    striffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>

      {items.map((item) => (
        <Single items={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
