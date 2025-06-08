import { create } from 'zustand';
import data from '../data.json';

type GuessType = {
  name: string;
  selected: boolean;
};

interface GameState {
  currentCategoriesData: GuessType[];
  currentGuess: GuessType | null;
  guessedLetters: string[];
  lifeMeter: number;
  isPopUpVisible: boolean;
  isWinner: boolean;
  isPaused: boolean;
  setIsPaused: (bool: boolean) => void;
  setIsPopupVisible: (bool: boolean) => void;
  setCurrentCategoriesData: (category: string) => void;
  pickRandomGuess: () => void;
  handleLetterInput: (letter: string) => void;
  resetGame: () => void;
}

export const useGameStore = create<GameState>((set, get) => ({
  currentCategoriesData: [],
  currentGuess: null,
  guessedLetters: [],
  lifeMeter: 10,
  isPopUpVisible: false,
  isWinner: false,
  isPaused: false,

  setIsPopupVisible: (bool: boolean) =>
    set({
      isPopUpVisible: bool,
    }),

  setIsPaused: (bool: boolean) =>
    set({
      isPaused: bool,
      isPopUpVisible: true,
    }),

  setCurrentCategoriesData: (category: string) => {
    const categoriesData = Object.entries(data.categories)
      .filter(([key]) => key === category)
      .map(([key, value]) => ({ [key]: value }));

    set({
      currentCategoriesData:
        categoriesData.length > 0 ? categoriesData[0][category] : [],
      lifeMeter: 10,
      isPopUpVisible: false,
      guessedLetters: [],
      currentGuess: null,
    });
  },

  pickRandomGuess: () => {
    const { currentCategoriesData } = get();
    const unselectedWords = currentCategoriesData.filter(
      (item) => !item.selected
    );

    if (unselectedWords.length === 0) {
      set({ currentGuess: null });
      return;
    }

    const randomWords =
      unselectedWords[Math.floor(Math.random() * unselectedWords.length)];
    set({
      currentGuess: randomWords,
      guessedLetters: [],
    });
  },

  handleLetterInput: (letter: string) => {
    const {
      currentGuess,
      guessedLetters,
      currentCategoriesData,
      lifeMeter,
      isWinner,
    } = get();

    if (!currentGuess || guessedLetters.includes(letter)) return;

    const updatedGuesses = [...guessedLetters, letter];
    set({ guessedLetters: updatedGuesses });

    const allLettersGuessed = currentGuess.name
      .toUpperCase()
      .split('')
      .every((char) => char === ' ' || updatedGuesses.includes(char));

    if (!currentGuess.name.toUpperCase().includes(letter)) {
      const newLifeMeter = lifeMeter - 1;
      set({
        lifeMeter: newLifeMeter,
        isPopUpVisible: newLifeMeter === 0,
        isWinner: false,
        isPaused: false,
      });
    }
    if (allLettersGuessed) {
      if (isWinner) return;
      const updatedCategoriesGuesses = currentCategoriesData.map((guess) =>
        guess.name === currentGuess.name ? { ...guess, selected: true } : guess
      );
      set({
        isWinner: true,
        isPopUpVisible: true,
        currentCategoriesData: updatedCategoriesGuesses,
      });
    }
  },
  resetGame: () => {
    set({
      lifeMeter: 10,
      isPopUpVisible: false,
      guessedLetters: [],
      currentGuess: null,
      isWinner: false,
    });
    get().pickRandomGuess();
  },
}));
