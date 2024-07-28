"use client";

import PageHeader from "@/components/typography/pageHeader";
import { CircleButton } from "@/components/button/circleButton";
import { CheckRounded } from "@mui/icons-material";

export default function Complete({
  setCurrentPage,
  currentPage,
}: {
  setCurrentPage: (page: string) => void;
  currentPage: string;
}) {
  const handleBack = () => {
    window.location.href = "/diary";
  };

  return (
    <>
      <div className="w-4/5 max-w-600 h-full mx-auto pt-14 bg-stone-50">
        <PageHeader type="h1" textAlignment="left">
          自分Log
        </PageHeader>
        <PageHeader type="h2" textAlignment="left">
          日記記録完了
        </PageHeader>
        <div className="flex flex-col items-center space-y-4">
          <CircleButton
            label="振り返り完了"
            fontsize="100px"
            color="#fff"
            backgroundColor="#60D11A"
            Icon={CheckRounded}
          />
          <button onClick={handleBack} style={{ textDecoration: "underline" }}>
            日記一覧に戻る
          </button>
        </div>
      </div>
    </>
  );
}
