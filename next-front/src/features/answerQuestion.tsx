"use client";

import { useState } from "react";
import PageHeader from "@/components/typography/pageHeader";
import { CircleButton } from "@/components/button/circleButton";
import {
  ChevronRightRounded,
  ArrowBackIosNew,
  CheckRounded,
} from "@mui/icons-material";
import { set } from "react-hook-form";


export default function AnswerQuestion(
	{ setCurrentPage, currentPage }: { setCurrentPage: (page: string) => void; currentPage: string }) {
  const [title, setTitle] = useState<string>("");
  const [diary, setDiary] = useState<string>("");
  const [effort, setEffort] = useState<string>("");
  const [gain, setGain] = useState<string>("");

  const [error, setError] = useState<boolean>(false);

  const handleBack = () => {
    window.location.href = "/home";
  };

  const handleSubmit = () => {
    if (!title || !diary || !effort || !gain) {
      setError(true);
      return;
    }
    setError(false);
    setCurrentPage("complete");
  };

  return (
    <>
      <div className="w-4/5 max-w-600 h-full mx-auto pt-14 bg-stone-50 overflow-auto">
        <PageHeader type="h1" textAlignment="left">
          自分Log
        </PageHeader>
        <PageHeader type="h2" textAlignment="left">
          日記を書く 1/2
        </PageHeader>
        <div className="flex flex-col w-4/5 mx-auto space-y-4">
          <div className="flex flex-col w-full mx-auto space-y-4">
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="本文"
              value={diary}
              rows={4}
              onChange={(e) => setDiary(e.target.value)}
            />
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="工夫したこと"
              value={effort}
              rows={4}
              onChange={(e) => setEffort(e.target.value)}
            />
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="得たこと"
              value={gain}
              rows={4}
              onChange={(e) => setGain(e.target.value)}
            />
            {error && <p className="text-red-500">すべて入力してください。</p>}
            <div className="flex flex-row justify-end space-x-4">
              <CircleButton
                label="戻る"
                fontsize="50px"
                color="#fff"
                backgroundColor="#999999"
                Icon={ArrowBackIosNew}
                onClick={handleBack}
              />
              <CircleButton
                label="次へ"
                fontsize="50px"
                color="#fff"
                backgroundColor="#60D11A"
                Icon={ChevronRightRounded}
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}