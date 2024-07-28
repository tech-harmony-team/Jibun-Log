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
	{ setCurrentPage, currentPage, questions, answers, setAnswers }: 
	{ setCurrentPage: (page: string) => void; currentPage: string; questions: string[]; answers: string[]; setAnswers: (answers: string[]) => void }) {
  const [error, setError] = useState<boolean>(false);

  const handleBack = () => {
    window.location.href = "/home";
  };

  const handleSubmit = () => {
    if (answers.length !== questions.length) {
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
					{questions.map((question, index) => (
						<div className="space-y-0" key={index}>
							<label key={index}>{question}</label>
							<textarea
								key={index}
								className="w-full p-2 border border-gray-300 rounded-md"
								rows={4}
								onChange={(e) => {
									const newAnswers = [...answers];
									newAnswers[index] = e.target.value;
									setAnswers(newAnswers);
								}}
							/>
						</div>
					))}
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
    </>
  );
}