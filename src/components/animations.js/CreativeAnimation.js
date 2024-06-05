import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "./CreativeAnimation.scss";

const CreativeAnimation = () => {

  return (
    <CreativeAnimationStyled>
      <motion.div
        initial={{ top: 0, left: 0 }}
        animate={{ top: "100vh" }}
        transition={{ duration: 2, delay: 3.2, }}
        className="hiding-box"
      ></motion.div>
            <motion.div
        initial={{ top: "100vh", left: 0 }}
        animate={{ top: 0 }}
        transition={{ duration: 2, delay: 4.2, }}
        className="hiding-box"
      ></motion.div>
      <div>CREATIVE</div>
    </CreativeAnimationStyled>
  );
};

export default CreativeAnimation;

const CreativeAnimationStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 120px;
  overflow: hidden;
`;
