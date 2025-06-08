import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import useSound from 'use-sound';

const PlayBody = () => {
  const [playClick] = useSound('/audio/click.wav', { volume: 0.5 });

  const handleClick = () => {
    playClick();
  };

  const MotionLink = motion.create(Link);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.75,
      }}
      className="mt-14 flex flex-col items-center justify-center gap-y-14"
    >
      <MotionLink
        whileHover={{ scale: 1.1 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          ease: 'easeInOut',
          type: 'spring',
          stiffness: 300,
          damping: 10,
        }}
        to="categories"
        className="play-button cursor-pointer rounded-full p-14 md:p-16"
        onClick={handleClick}
      >
        <img src="/images/icon-play.svg" alt="icon play" />
      </MotionLink>
      <MotionLink
        whileHover={{ scaleX: 1.1 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          ease: 'easeInOut',
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
        to="gameinstructions"
        className="bg-hang-blue how-to-play-button text-heading-s cursor-pointer rounded-full px-16 py-3 text-white uppercase transition-colors duration-500 hover:bg-blue-400/75"
        onClick={handleClick}
      >
        How to play
      </MotionLink>
    </motion.div>
  );
};

export default PlayBody;
