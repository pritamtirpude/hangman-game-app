import { motion } from 'motion/react';
import useSound from 'use-sound';
import { useGameStore } from '../../store/gameStore';
import { cn } from '../../utils/clsxMerge';

const KeyBoard = () => {
  const { handleLetterInput, guessedLetters } = useGameStore();

  const [playClick] = useSound('/audio/key-press.wav', { volume: 0.5 });

  const handleBoxClick = (letter: string) => {
    handleLetterInput(letter);
    playClick();
  };

  return (
    <div className="mt-32 grid grid-cols-9 gap-6">
      {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map(
        (letter, index) => {
          const isGuessed = guessedLetters.includes(letter);
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isGuessed ? 0.25 : 1 }}
              transition={{
                delay: !isGuessed ? index * 0.05 : 0,
                type: 'spring',
                stiffness: 300,
                damping: 10,
              }}
              onClick={() => handleBoxClick(letter)}
              key={letter}
              className={cn(
                'hover:bg-hang-blue group flex h-14 w-7 cursor-pointer flex-col items-center justify-center rounded-[8px] bg-white p-3 transition-all duration-500 md:h-[84px] md:w-16 md:rounded-3xl lg:h-[84px] lg:w-[109px] lg:max-2xl:h-[84px] lg:max-2xl:w-16 lg:max-2xl:rounded-3xl'
              )}
            >
              <span className="md:text-heading-m text-dark-navy text-2xl group-hover:text-white">
                {letter}
              </span>
            </motion.div>
          );
        }
      )}
    </div>
  );
};

export default KeyBoard;
