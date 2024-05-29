import { Button } from "@/components";
import { ButtonCluster } from "@/modules";

const modeButtons = [
  { title: "1st date" },
  { title: "in a relationship" },
  { title: "married" },
  { title: "friend zone" },
];
export default function Mode() {
  return (
    <div className="bg-yellow-300 h-screen flex flex-grow flex-col pt-20 px-9 pb-9">
      <div className="bg-slate-50 h-2/6 flex flex-grow flex-col">spacearea</div>
      <div className="bg-slate-300 h-4/6 flex flex-grow flex-col justify-between">
        <ButtonCluster buttons={modeButtons} isStyled />
        <Button text="Next >" variant="black" />
      </div>
    </div>
  );
}
