import React, { type DetailedHTMLProps, type HTMLAttributes } from 'react'
import {motion} from 'motion/react';

interface IProps {
    text?: string;
    style?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>['style'];
    image?: string;
    containerRef?: React.RefObject<HTMLDivElement | null>;
};

const Card = ({text, style, image, containerRef} : IProps) => {
  return image && !text ? (
    <motion.img
      className="absolute w-15 cursor-grap"
      src={image}
      alt={text}
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.4}
      />
    ) : (
        <motion.div
        className="absolute bg-accent-foreground px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab"
        style={style}
        whileHover={{ scale: 1.05 }}
        drag
        dragConstraints={containerRef}
        dragElastic={0.4}
    >
      {text}
    </motion.div>
  );
}

export default Card

