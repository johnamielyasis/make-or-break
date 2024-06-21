"use client";
import { Button } from "@/components";
import { ButtonCluster } from "@/modules";
import { gameSettingsAtom } from "@/atoms/gameSettingsAtom";
import { useRecoilState } from "recoil";

export default function Mode() {
  const [gameSettings, setGameSettings] = useRecoilState(gameSettingsAtom);
  const modeButtons = [
    { title: "1st date", onClick: () => console.log("hw1d") },
    { title: "in a relationship", onClick: () => console.log("hwiar") },
    { title: "married", onClick: () => console.log("hwmr") },
    { title: "friend zone", onClick: () => console.log("hwfz") },
  ];

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
      <div className="h-2/6 flex flex-grow flex-col"> </div>
      <div className="h-4/6 flex flex-grow flex-col justify-between">
        <ButtonCluster buttons={modeButtons} isStyled />
        <span className="text-center">
          <Button text="Next >" variant="black" onClick={() => console.log()} />
        </span>
        <h1>this is the recoil state: {gameSettings.gameMode}</h1>
      </div>
    </div>
  );
}
