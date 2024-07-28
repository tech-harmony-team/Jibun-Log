"use client";

import { useState } from "react";
import SelectDiary from "@/features/selectDiary";
import Loading from "@/features/loading";
import Complete from "@/features/complete";
import AnswerQuestion from "@/features/answerQuestion";

export default function App() {
	const [currentPage, setCurrentPage] = useState("selectDiary");

	return (
	<>
		{currentPage === "selectDiary" && <SelectDiary setCurrentPage={setCurrentPage} currentPage={currentPage} />}
		{currentPage === "loading" && <Loading setCurrentPage={setCurrentPage} currentPage={currentPage} />}
		{currentPage === "complete" && <Complete setCurrentPage={setCurrentPage} currentPage={currentPage} />}
		{currentPage === "answerQuestion" && <AnswerQuestion setCurrentPage={setCurrentPage} currentPage={currentPage} />}
	</>
	);
}