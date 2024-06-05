import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";

const CustomAnimation = () => {
  const word = "CUSTOM";

  return (
    <CustomAnimationStyled>
      {word.split("").map((letter, index) => (
        <AnimatedLetter key={index} letter={letter} index={index} />
      ))}
    </CustomAnimationStyled>
  );
};

const AnimatedLetter = ({ letter, index }) => {
  const controls = useAnimation();

  useEffect(() => {
    async function sequence() {
      await controls.start({
        rotateX: 0,
        transition: { delay: 6 + index * 0.1 },
      });
      setTimeout(() => {
        controls.start({
          opacity: 0,
          transition: { duration: .2 },
        });
      }, 2000); // Delay for 2 seconds after rotation animation finishes
    }

    sequence();
  }, [controls, index]);

  return (
    <motion.div className="letter" initial={{ rotateX: 90 }} animate={controls}>
      {letter}
    </motion.div>
  );
};

export default CustomAnimation;

const CustomAnimationStyled = styled.div`
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

  .letter {
    transform-origin: bottom center;
  }
`;
