import { motion } from 'motion/react';
import { useCallback } from 'react';
import { useGameStore } from '../../store/gameStore';
import { cn } from '../../utils/clsxMerge';

const UserGuess = () => {
  const { currentGuess, guessedLetters } = useGameStore();

  const wordLetters = useCallback(
    () => currentGuess?.name.split(' ').map((word) => word.split('')),
    [currentGuess]
  );

  return (
    <div className="mt-20 flex flex-wrap items-center justify-center gap-8">
      {wordLetters()?.map((word, wordIndex) => (
        <div
          key={wordIndex}
          className="flex w-full items-center justify-center gap-1 md:gap-4"
        >
          {word.map((letter, letterIndex) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: letterIndex * 0.1,
              }}
              key={letterIndex}
              className={cn(
                'how-to-play-button flex h-16 w-10 flex-col items-center justify-center rounded-[12px] transition-all duration-500 md:h-[112px] md:w-[88px] md:rounded-4xl lg:h-[128px] lg:w-[112px] lg:rounded-[40px]',
                guessedLetters.includes(letter.toUpperCase())
                  ? 'bg-hang-blue'
                  : 'bg-hang-blue/25'
              )}
            >
              <span className="lg:text-heading-l md:text-heading-m text-2xl text-white">
                {guessedLetters.includes(letter.toUpperCase())
                  ? letter.toUpperCase()
                  : ''}
              </span>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default UserGuess;
