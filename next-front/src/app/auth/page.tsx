"use client";

import { useRouter } from "next/navigation";

import { CircleButton } from "@/components/button/circleButton";
import PageHeader from "@/components/typography/pageHeader";
import { CheckRounded } from "@mui/icons-material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useState } from "react";

export default function AuthPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleAuth = async () => {
    //TODO: 新規登録処理を書く
    location.href = "/home";
  };

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="w-4/5 max-w-600 h-full mx-auto pt-14 bg-stone-50">
      <PageHeader type="h1" textAlignment="center">
        新規登録
      </PageHeader>
      <div className="h-3/5 w-4/5 py-5 mx-auto gap-y-3 flex flex-col items-center">
        <input
          type="text"
          placeholder="メールアドレス"
          className="w-full h-12 border border-gray-300 rounded-md px-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="パスワード"
          className="w-full h-12 border border-gray-300 rounded-md px-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="w-4/5 max-w-600 h-1/5 mx-auto flex flex-row gap-x-10 justify-center items-center">
        <CircleButton
          label="戻る"
          fontsize="60px"
          color="#fff"
          backgroundColor="#999999"
          Icon={ArrowBackIosNewIcon}
          onClick={handleBack}
        />
        <CircleButton
          label="登録"
          fontsize="60px"
          color="#fff"
          backgroundColor="#1A85D1"
          Icon={CheckRounded}
          onClick={handleAuth}
        />
      </div>
    </div>
  );
}
