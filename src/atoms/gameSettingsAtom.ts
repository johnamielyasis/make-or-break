import { atom } from "recoil";

export interface gameSettings {
  difficulty: string;
  numberOfQuestions: number;
  gameMode: string;
}

export const gameSettingsAtom = atom<gameSettings>({
  key: "gameSettingsAtom",
  default: {
    difficulty: "normal",
    numberOfQuestions: 10,
    gameMode: "1st date",
  },
});
