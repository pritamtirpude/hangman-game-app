import { AnimatePresence, motion } from 'motion/react';
import { Link } from 'react-router-dom';
import useSound from 'use-sound';
import { CategoryAndInstructionHeader } from '../../components';
import data from '../../data.json';

const CategoriesPage = () => {
  const categoriesData = Object.entries(data.categories).map(
    ([key, value]) => ({ [key]: value })
  );

  const [playClick] = useSound('/audio/game-start.mp3', { volume: 0.5 });

  const handleClick = () => {
    playClick();
  };

  const MotionLink = motion.create(Link);
  return (
    <div className="relative z-50">
      <div className="fixed inset-0 -z-10 size-full bg-linear-to-b from-slate-900 via-violet-950 via-75% to-violet-950 opacity-75" />
      <CategoryAndInstructionHeader headertitle="Pick a Category" />
      <div className="z-30 mt-20 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {categoriesData.map((category, index) => (
            <MotionLink
              onClick={handleClick}
              key={Object.keys(category)[0]}
              to={`game/${Object.keys(category)[0]}`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 300,
                  damping: 10,
                  delay: index * 0.1,
                }}
                className="bg-hang-blue how-to-play-button flex items-center justify-center rounded-[20px] py-6 transition-colors duration-500 hover:bg-blue-400/75 md:rounded-[40px] md:py-16"
              >
                <span className="text-hang-body md:text-heading-m text-white uppercase">
                  {Object.keys(category)}
                </span>
              </motion.div>
            </MotionLink>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CategoriesPage;
