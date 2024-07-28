"use client";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

import { useRouter } from "next/navigation";

export default function AppBar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const jumpToPage = (page: string) => {
    router.push(page);
  };

  return (
    <div>
      <div className="w-full h-12 py-2 px-5 flex flex-row justify-center items-center bg-white drop-shadow-md z-40 fixed">
        <div className="w-3/4 h-full flex items-center">
          <h1 className="text-3xl font-bold">自分.log</h1>
        </div>
        <div
          className="w-1/4 h-full flex items-center justify-end cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <PersonOutlineIcon fontSize="large" />
        </div>
      </div>
      {/* メニュー */}
      {menuOpen && (
        <div className=" fixed top-0 left-0 w-full h-full z-50 bg-white">
          <div className="w-full h-20 py-2 px-5 flex flex-row justify-end">
            <div
              className="w-full h-auto flex justify-end items-end cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <CloseIcon fontSize="large" />
            </div>
          </div>
          <div className="w-3/4 h-full flex flex-col gap-5 mx-auto my-10">
            <h1 className="text-blue-500 mb-5 text-center text-4xl font-bold">
              自分.Log
            </h1>
            <div
              className="w-full h-10 flex justify-center items-center cursor-pointer"
              onClick={() => jumpToPage("/home")}
            >
              <h2 className="text-2xl">ホーム</h2>
            </div>
            <div
              className="w-full h-10 flex justify-center items-center cursor-pointer"
              onClick={() => jumpToPage("/diary")}
            >
              <h2 className="text-2xl">日記</h2>
            </div>
            <div
              className="w-full h-10 flex justify-center items-center cursor-pointer"
              onClick={() => jumpToPage("/analyze")}
            >
              <h2 className="text-2xl">分析</h2>
            </div>
            <div
              className="w-full h-10 flex justify-center items-center cursor-pointer"
              onClick={() => jumpToPage("/setting")}
            >
              <h2 className="text-2xl">設定</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
