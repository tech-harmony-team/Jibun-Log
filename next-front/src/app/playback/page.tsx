"use client";

import { useState } from "react";
import SelectDiary from "@/features/selectDiary";
import Loading from "@/features/loading";
import Complete from "@/features/complete";
import AnswerQuestion from "@/features/answerQuestion";

export default function App() {
	const [currentPage, setCurrentPage] = useState("selectDiary");
	const [selectedDiary, setSelectedDiary] = useState<string>("");
	const [questions, setQuestions] = useState<string[]>(["今日の目標は何ですか？", "何を達成したかを教えてください。", "何を学んだかを教えてください。"]);
	const [answers, setAnswers] = useState<string[]>([]);

	return (
	<>
		{currentPage === "selectDiary" && <SelectDiary setCurrentPage={setCurrentPage} currentPage={currentPage} selectedDiary={selectedDiary} setSelectedDiary={setSelectedDiary} />}
		{currentPage === "loading" && <Loading setCurrentPage={setCurrentPage} currentPage={currentPage} selectedDiary={selectedDiary} />}
		{currentPage === "complete" && <Complete setCurrentPage={setCurrentPage} currentPage={currentPage} />}
		{currentPage === "answerQuestion" && <AnswerQuestion setCurrentPage={setCurrentPage} currentPage={currentPage} questions={questions} answers={answers} setAnswers={setAnswers} />}
	</>
	);
}