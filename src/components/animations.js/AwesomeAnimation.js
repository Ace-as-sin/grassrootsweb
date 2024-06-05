import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const AwesomeAnimation = () => {
  return (
    <AwesomeStyled>
      <motion.div
        initial={{ y: "-50vh" }}
        animate={{ y: ["-50vh", 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0, "150vh"] }}
        exit={{ x: "-100vw" }}
        transition={{
          ease: [0.7, 0, 0.84, 0],
          duration: 3,
        }}
      >
        A
      </motion.div>
      <motion.div
        initial={{ y: "-50vh" }}
        animate={{ y: ["-50vh", 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0, "150vh"] }}
        exit={{ x: "-100vw" }}
        transition={{
          ease: [0.7, 0, 0.84, 0],
          duration: 3,
        }}
      >
        W
      </motion.div>
      <motion.div
        initial={{ y: "-50vh" }}
        animate={{ y: ["-50vh", 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0, "150vh"] }}
        exit={{ x: "-100vw" }}
        transition={{
          ease: [0.7, 0, 0.84, 0],
          duration: 3,
        }}
      >
        E
      </motion.div>
      <motion.div
        initial={{ y: "-50vh" }}
        animate={{ y: ["-50vh", "-50vh", 0, 0, 0, 0,0,0,0,0,0,0,0,0, "150vh"] }}
        exit={{ x: "-100vw" }}
        transition={{
          ease: [0.7, 0, 0.84, 0],
          duration: 3,
        }}
      >
        S
      </motion.div>
      <motion.div
        initial={{ y: "-50vh" }}
        animate={{ y: ["-50vh", "-50vh", "-50vh", 0, 0, 0,0,0,0,0,0,0,0,0, "150vh"] }}
        exit={{ x: "-100vw" }}
        transition={{
          ease: [0.7, 0, 0.84, 0],
          duration: 3,
        }}
      >
        O
      </motion.div>
      <motion.div
        initial={{ y: "-50vh" }}
        animate={{ y: ["-50vh", "-50vh", "-50vh", "-50vh", 0, 0,0,0,0,0,0,0,0,0, "150vh"] }}
        exit={{ x: "-100vw" }}
        transition={{
          ease: [0.7, 0, 0.84, 0],
          duration: 3,
        }}
      >
        M
      </motion.div>
      <motion.div
        initial={{ y: "-50vh" }}
        animate={{ y: ["-50vh", "-50vh", "-50vh", "-50vh", "-50vh", 0,0,0,0,0,0,0,0,0,0, "150vh"] }}
        exit={{ x: "-100vw" }}
        transition={{
          ease: [0.7, 0, 0.84, 0],
          duration: 3,
        }}
      >
        E
      </motion.div>
    </AwesomeStyled>
  );
};

export default AwesomeAnimation;

const AwesomeStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 120px;
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  caret-color: transparent;
  z-index: 3;
`;
