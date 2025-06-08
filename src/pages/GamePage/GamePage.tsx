import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useSound from 'use-sound';
import { GameHeader, KeyBoard, MenuModal, UserGuess } from '../../components';
import { useGameStore } from '../../store/gameStore';

const GamePage = () => {
  const { category } = useParams();
  const {
    isPopUpVisible,
    setCurrentCategoriesData,
    pickRandomGuess,
    handleLetterInput,
    lifeMeter,
    isWinner,
  } = useGameStore();

  const [playKeyPress] = useSound('/audio/key-press.wav', { volume: 0.5 });
  const [playGameOver] = useSound('/audio/you-lose.wav', { volume: 0.5 });
  const [playWin] = useSound('/audio/win.wav', { volume: 0.5 });

  useEffect(() => {
    if (category) {
      setCurrentCategoriesData(category);
    }
  }, [category, setCurrentCategoriesData]);

  useEffect(() => {
    pickRandomGuess();
  }, [pickRandomGuess]);
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();
      if (/^[A-Z]$/.test(key)) {
        playKeyPress(); // Play sound when a valid key is pressed
        handleLetterInput(key);
      }
    };
    if (isPopUpVisible) return;
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleLetterInput, isPopUpVisible, playKeyPress]);

  useEffect(() => {
    if (lifeMeter === 0) {
      playGameOver(); // Play game over sound when life meter reaches 0
    }
  }, [lifeMeter, playGameOver]);

  useEffect(() => {
    if (isWinner) {
      playWin(); // Play win sound when the user wins
    }
  }, [isWinner, playWin]);

  return (
    <div className="relative z-50 flex flex-col">
      <div className="modal-bg fixed inset-0 -z-10 size-full opacity-75" />
      {/* Game Header */}
      <GameHeader />

      {/* User Guess */}
      <UserGuess />

      {/* KeyBoard */}
      <KeyBoard />

      {isPopUpVisible && <MenuModal />}
    </div>
  );
};

export default GamePage;
