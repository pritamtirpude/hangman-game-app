import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import useSound from 'use-sound';

type CategoryAndInstructionHeaderProps = {
  headertitle: string;
};

const CategoryAndInstructionHeader = ({
  headertitle,
}: CategoryAndInstructionHeaderProps) => {
  const [playClick] = useSound('/audio/click.wav', { volume: 0.5 });

  const handleClick = () => {
    playClick();
  };

  const MotionLink = motion.create(Link);

  return (
    <div className="flex items-center">
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
        onClick={handleClick}
        to="/"
        className="back-button-play size-10 rounded-full p-2.5 md:size-24 md:p-6"
      >
        <img src="/images/icon-back.svg" className="" alt="icon back" />
      </MotionLink>

      <motion.div
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
        className="relative ml-auto md:mx-auto md:max-w-[600px]"
      >
        <h2 className="lg:text-heading-xl relative z-30 bg-linear-to-b from-[#67b6ff] to-white bg-clip-text text-5xl text-transparent md:text-8xl">
          {headertitle}
        </h2>

        <h2 className="header-title lg:text-heading-xl absolute top-0 left-0 text-5xl md:text-8xl">
          {headertitle}
        </h2>
      </motion.div>
    </div>
  );
};

export default CategoryAndInstructionHeader;
