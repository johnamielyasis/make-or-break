import { HomeHeader } from "@/modules";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between w-full">
      <div className="flex items-center justify-center h-full">
        <HomeHeader />
      </div>
      <div className="flex items-end">
        <button>tis button</button>
      </div>
    </div>
  );
}
