"use client";

import { DiaryData } from "@/types/daiaryData";
import DiaryCard from "@/components/daiary-card/diaryCard";
import PageHeader from "@/components/typography/pageHeader";
import { CircleButton } from "@/components/button/circleButton";
import { Refresh } from "@mui/icons-material";

export default function Loading(
	{ setCurrentPage, currentPage, selectedDiary }: { setCurrentPage: (page: string) => void; currentPage: string; selectedDiary: string }) {
  return (
    <div className="w-4/5 max-w-600 h-full mx-auto pt-14 bg-stone-50">
      <PageHeader type="h1" textAlignment="left">
        ローディングページ
      </PageHeader>
			<div className="flex flex-col items-center space-y-4">
				<p className="text-md text-center">選択した日記</p>
				<p className="text-md text-center">{selectedDiary}</p>
				<p className="text-md text-center">質問を生成中...</p>
				<CircleButton
					label=""
					fontsize="100px"
					color="#fff"
					backgroundColor="#60D11A"
					Icon={Refresh}
					onClick={() => setCurrentPage("answerQuestion")}
				/>
			</div>
    </div>
  );
}
