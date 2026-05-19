import { create } from "zustand";

export type Lesson = {
  id: string;
  title: string;
  type: "translate" | "multipleChoice" | "tapPairs";
  question: string;
  options?: string[];
  correctAnswer: string;
  pairs?: { left: string; right: string }[];
};

export type Unit = {
  id: string;
  title: string;
  color: string;
  lessons: Lesson[];
  completed: boolean;
  locked: boolean;
};

type GameStore = {
  hearts: number;
  xp: number;
  streak: number;
  currentUnit: Unit | null;
  currentLesson: Lesson | null;
  currentLessonIndex: number;
  lessonQueue: Lesson[];
  score: number;
  progress: number;

  setCurrentUnit: (unit: Unit) => void;
  startLesson: (lessons: Lesson[]) => void;
  answerCorrect: () => void;
  answerWrong: () => void;
  nextQuestion: () => boolean; // returns true if lesson done
  resetLesson: () => void;
  addXP: (amount: number) => void;
};

export const useGameStore = create<GameStore>((set, get) => ({
  hearts: 5,
  xp: 0,
  streak: 7,
  currentUnit: null,
  currentLesson: null,
  currentLessonIndex: 0,
  lessonQueue: [],
  score: 0,
  progress: 0,

  setCurrentUnit: (unit) => set({ currentUnit: unit }),

  startLesson: (lessons) =>
    set({
      lessonQueue: lessons,
      currentLessonIndex: 0,
      currentLesson: lessons[0],
      score: 0,
      progress: 0,
    }),

  answerCorrect: () => {
    const { score, lessonQueue, currentLessonIndex } = get();
    const progress = ((currentLessonIndex + 1) / lessonQueue.length) * 100;
    set({ score: score + 10, progress });
  },

  answerWrong: () => {
    const { hearts } = get();
    if (hearts > 0) set({ hearts: hearts - 1 });
  },

  nextQuestion: () => {
    const { currentLessonIndex, lessonQueue } = get();
    const nextIndex = currentLessonIndex + 1;
    if (nextIndex >= lessonQueue.length) {
      return true; // lesson complete
    }
    set({
      currentLessonIndex: nextIndex,
      currentLesson: lessonQueue[nextIndex],
      progress: (nextIndex / lessonQueue.length) * 100,
    });
    return false;
  },

  resetLesson: () =>
    set({
      currentLesson: null,
      currentLessonIndex: 0,
      lessonQueue: [],
      score: 0,
      progress: 0,
    }),

  addXP: (amount) => set((state) => ({ xp: state.xp + amount })),
}));