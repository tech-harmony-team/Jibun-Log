"use client";

import { DiaryData } from "@/types/daiaryData";

import { useChatGpt } from "@/hooks/useChatGpt";
import { useState } from "react";

export default function TestCreateQPage() {
  const [questions, setQuestions] = useState<string[]>([]);

  const { connectChatGpt } = useChatGpt();
  const sampleData: DiaryData = {
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
  };

  const createQuestion = (data: DiaryData) => {
    const pronpt = `次の日記に対して、自己分析につながるような質問3つを考えてください。質問だけをカンマ区切りで出力してください。タイトル: ${data.actionName}, 詳細: ${data.actionDetail}, 工夫点: ${data.originality}, 得られたもの: ${data.getSomething}`;
    connectChatGpt(pronpt).then((res) => {
      //resをカンマ区切りで分割して配列に格納
      const questions = res.split(",");
      console.log(questions);
      setQuestions(questions);
    });
  };

  return (
    <div>
      <h1>作成した問題を出力</h1>
      <button onClick={() => createQuestion(sampleData)}>質問を作成</button>
      {questions.map((question, index) => (
        <p key={index}>{question}</p>
      ))}
    </div>
  );
}
