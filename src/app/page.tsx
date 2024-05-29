import { Button } from "@/components";
import { HomeHeader } from "@/modules";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full bg-white">
      <div className="flex items-center justify-center mt-[20vh]">
        <HomeHeader />
      </div>
      <div className="w-full flex justify-center p-5">
        <Button
          variant="black"
          text="Play Now"
          borderless={true}
          href="/mode"
        />
      </div>
    </div>
  );
}
