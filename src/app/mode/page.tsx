"use client";
import { Button, Typography } from "@/components";
import { ButtonCluster } from "@/modules";
import { gameSettingsAtom } from "@/atoms/gameSettingsAtom";
import { useRecoilState } from "recoil";
import questions from "@/data/questions.json";

export default function Mode() {
  const [gameSettings, setGameSettings] = useRecoilState(gameSettingsAtom);
  const modeButtons = [
    {
      title: "quickie",
      onClick: () =>
        setGameSettings({
          ...gameSettings,
          gameMode: "quickie",
          numberOfQuestions: 10,
        }),
    },
    {
      title: "just right",
      onClick: () =>
        setGameSettings({
          ...gameSettings,
          gameMode: "just right",
          numberOfQuestions: 20,
        }),
    },
    {
      title: "extended play",
      onClick: () =>
        setGameSettings({
          ...gameSettings,
          gameMode: "extended play",
          numberOfQuestions: 40,
        }),
    },
    {
      title: "all night long",
      onClick: () =>
        setGameSettings({
          ...gameSettings,
          gameMode: "all night long",
          numberOfQuestions: questions.length,
        }),
    },
  ];

  const modeLengthQuip = (() => {
    switch (gameSettings.gameMode) {
      case "quickie":
        return "In a hurry";
      case "just right":
        return "Average length";
      case "extended play":
        return "In for the long haul";
      case "all night long":
        return "What's for breakfast?";
      default:
        return "";
    }
  })();

  return (
    <div className="h-screen flex flex-grow flex-col pt-20 px-9 pb-9">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        muted
        loop
      >
        <source src="mode/mode-video.mp4" type="video/mp4" />
      </video>
      <div className="h-2/6 flex flex-grow flex-col justify-end items-center">
        <Typography>
          {modeLengthQuip}: {gameSettings.numberOfQuestions} questions
        </Typography>
      </div>
      <div className="h-4/6 flex flex-grow flex-col justify-center">
        <ButtonCluster buttons={modeButtons} isStyled radio />
        <span className="text-center">
          <Button text="Next" variant="black" onClick={() => console.log()} />
        </span>
      </div>
    </div>
  );
}
