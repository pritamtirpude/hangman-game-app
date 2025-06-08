import { motion } from 'motion/react';
import { useParams } from 'react-router-dom';
import useSound from 'use-sound';
import { useGameStore } from '../../store/gameStore';

const GameHeader = () => {
  const { lifeMeter, setIsPaused } = useGameStore();

  const { category } = useParams();

  const [playClick] = useSound('/audio/click.wav', { volume: 0.5 });

  const handleClick = () => {
    playClick();
    setIsPaused(true);
  };
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-4 md:gap-x-8 lg:gap-x-14">
        <motion.button
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
          className="back-button-play flex size-10 cursor-pointer items-center justify-center rounded-full md:size-16 lg:size-24"
        >
          <img
            src="/images/icon-menu.svg"
            className="size-4 md:size-6 lg:size-auto"
            alt="icon-menu"
          />
        </motion.button>
        <span className="lg:text-heading-l md:text-heading-m text-heading-s text-white">
          {category}
        </span>
      </div>

      <div className="flex items-center gap-x-4 md:gap-x-10">
        <div className="flex h-[16px] w-[57px] flex-col items-start justify-center rounded-4xl bg-white px-1 md:h-[31px] md:w-[160px] md:px-2.5 lg:h-[31px] lg:w-[240px]">
          <div
            className="bg-dark-navy h-2 rounded-4xl transition-all duration-300 md:h-3"
            style={{ width: `${(lifeMeter / 10) * 100}%` }}
          />
        </div>
        <motion.img
          animate={{
            scale: lifeMeter !== 0 ? [1, 1.2, 1] : 1,
          }}
          transition={{
            duration: 0.3,
            repeat: lifeMeter !== 0 ? 1 : 0,
            ease: 'easeInOut',
          }}
          key={lifeMeter}
          src="/images/icon-heart.svg"
          className="size-6 md:size-14"
          alt="icon heart"
        />
      </div>
    </div>
  );
};

export default GameHeader;
