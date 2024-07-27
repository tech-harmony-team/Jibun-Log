"use client";

import DiaryCard from "@/components/daiary-card/daiaryCard";
import PageHeader from "@/components/typography/pageHeader";
import { DiaryData } from "@/types/daiaryData";

export default function DiaryPage() {
  const testData: DiaryData[] = [
    {
      id: 1,
      actionName: "朝のランニング",
      actionDetail: "公園を30分間ランニングしました。",
      originality: "新しいランニングルートを試しました。",
      getSomething: "爽やかな気分と達成感",
      questionOne: "今日のランニングの目標は？",
      answerOne: "30分間走ること",
      questionTwo: "ランニング中に気づいたことは？",
      answerTwo: "新しいルートにはたくさんの花が咲いている",
      imgUrl: "https://example.com/running.jpg",
      isBestDiary: 1,
      startTime: "06:00",
      endTime: "06:30",
      date: "2024-07-27",
    },
    {
      id: 2,
      actionName: "昼食作り",
      actionDetail:
        "パスタを作りました。パスタを作りました。パスタを作りました。パスタを作りました。パスタを作りました。パスタを作りました。パスタを作りました。パスタを作りました。",
      originality: "新しいレシピを試しました。",
      getSomething: "美味しいパスタと料理の自信",
      questionOne: "今日の料理の目標は？",
      answerOne: "新しいレシピを成功させること",
      questionTwo: "料理中に気づいたことは？",
      answerTwo: "料理は創造力を刺激する",
      imgUrl: "https://example.com/cooking.jpg",
      isBestDiary: 0,
      startTime: "12:00",
      endTime: "12:45",
      date: "2024-07-27",
    },
    {
      id: 3,
      actionName: "読書",
      actionDetail: "1時間ほど読書をしました。",
      originality: "普段読まないジャンルの本を選びました。",
      getSomething: "新しい知識とリラックスした時間",
      questionOne: "今日の読書の目標は？",
      answerOne: "1時間集中して読むこと",
      questionTwo: "読書中に気づいたことは？",
      answerTwo: "新しいジャンルも面白い",
      imgUrl: "https://example.com/reading.jpg",
      isBestDiary: 0,
      startTime: "15:00",
      endTime: "16:00",
      date: "2024-07-27",
    },
    {
      id: 4,
      actionName: "夕方の散歩",
      actionDetail: "近所を30分散歩しました。",
      originality: "新しいルートを歩いてみました。",
      getSomething: "リフレッシュした気分",
      questionOne: "今日の散歩の目標は？",
      answerOne: "30分間歩くこと",
      questionTwo: "散歩中に気づいたことは？",
      answerTwo: "新しいルートには美しい景色がたくさんある",
      imgUrl: "https://example.com/walking.jpg",
      isBestDiary: 1,
      startTime: "18:00",
      endTime: "18:30",
      date: "2024-07-27",
    },
  ];

  return (
    <div className="w-4/5 max-w-600 h-full mx-auto pt-14 bg-stone-50">
      <PageHeader type="h1" textAlignment="left">
        日記
      </PageHeader>
      <h2 className="text-4xl text-center">7/25 (木)</h2>
      <div className="h-4/5 py-5 flex flex-col items-center gap-y-3 overflow-y-scroll">
        {testData.map((diaryData) => (
          <DiaryCard key={diaryData.id} edit={true} diaryData={diaryData} />
        ))}
      </div>
    </div>
  );
}
