import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';
import { useGameStore } from '../../store/gameStore';
import PopUpCard from '../PopUpCard/PopUpCard';

const MenuModal = () => {
  const { isWinner, resetGame, isPaused, setIsPopupVisible, setIsPaused } =
    useGameStore();

  const navigate = useNavigate();

  const [playClick] = useSound('/audio/click.wav', { volume: 0.5 });

  const handleContinueClick = () => {
    playClick();
    setIsPaused(false);
    setIsPopupVisible(false);
  };

  const handlePlayAgainCLick = () => {
    playClick();
    resetGame();
  };

  const handleNewCategoryClick = () => {
    playClick();
    navigate('/hangmangame/categories');
    resetGame();
  };

  const handleQuitClick = () => {
    playClick();
    navigate('/');
    resetGame();
  };

  return (
    <div className="fixed inset-0 flex min-h-screen flex-col items-center justify-center">
      <div className="modal-bg absolute size-full" />
      <PopUpCard
        title={isWinner ? 'You Win' : isPaused ? 'Paused' : 'You Lose'}
        body={
          <div className="flex flex-col items-center justify-center gap-y-8">
            {isPaused ? (
              <motion.button
                whileHover={{ scaleX: 1.1 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.75,
                  type: 'spring',
                  bounce: 0,
                  stiffness: 300,
                  damping: 20,
                  delay: 0.2,
                }}
                onClick={handleContinueClick}
                className="bg-hang-blue how-to-play-button text-heading-s cursor-pointer rounded-full px-16 py-3 text-white uppercase transition-colors duration-500 hover:bg-blue-400/75"
              >
                Continue
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scaleX: 1.1 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.75,
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                  delay: 0.2,
                }}
                onClick={handlePlayAgainCLick}
                className="bg-hang-blue how-to-play-button text-heading-s cursor-pointer rounded-full px-16 py-3 text-white uppercase transition-colors duration-500 hover:bg-blue-400/75"
              >
                Play Again
              </motion.button>
            )}

            <motion.button
              whileHover={{ scaleX: 1.1 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.75,
                type: 'spring',
                stiffness: 300,
                damping: 20,
                delay: 0.3,
              }}
              onClick={handleNewCategoryClick}
              className="bg-hang-blue how-to-play-button text-heading-s cursor-pointer rounded-full px-16 py-3 text-white uppercase transition-colors duration-500 hover:bg-blue-400/75"
            >
              New Category
            </motion.button>

            <motion.button
              whileHover={{ scaleX: 1.1 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.75,
                type: 'spring',
                stiffness: 300,
                damping: 20,
                delay: 0.4,
              }}
              onClick={handleQuitClick}
              className="quit-button text-heading-s cursor-pointer rounded-full bg-linear-to-b from-fuchsia-400 to-blue-400 px-16 py-3 text-white uppercase transition-colors duration-500 hover:bg-white"
            >
              Quit Game
            </motion.button>
          </div>
        }
      />
    </div>
  );
};

export default MenuModal;
