"use client";

export default function Home() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <div className="w-4/5 max-w-600 h-full mx-auto pt-16 bg-stone-50">
        <h1 className="text-blue-500 text-center text-4xl font-bold">
          自分Log
        </h1>
      </div>
    </>
  );
}
