import AppBar from "@/components/app-bar/appBar";

export default function HomePage() {
  return (
    <>
      <AppBar />
      <div className="w-4/5 max-w-600 h-full mx-auto pt-16 bg-stone-50">
        <p className="text-3xl text-center">こんにちは。今日は</p>
        <p className="text-5xl text-center">7/25 (木)</p>
      </div>
    </>
  );
}
