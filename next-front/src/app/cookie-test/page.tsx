"use client";

import { useState } from "react";

import { useUserDatas } from "@/hooks/useUserDatas";
import { UserData } from "@/types/userData";

export default function CookieTestPage() {
  const [savedData, setSavedData] = useState<UserData | null>(null);
  const { setUserData, removeUserData, getUserData } = useUserDatas();

  const setUserDataCookie = () => {
    const userData: UserData = {
      id: 1,
      email: "test@example.com",
      response: "分析結果",
      accessToken: "XXXXXXXXX",
      client: "YYYYYYYYY",
      uid: "ZZZZZZZZZ",
    };

    setUserData(userData);
  };

  const getUserDataCookie = () => {
    const userData = getUserData();
    if (!userData.id) {
      console.log("データがありません");
      setSavedData(null);
      return;
    }
    console.log("結果" + userData);
    setSavedData(userData);
  };

  const showUserData = () => {
    console.log(savedData);
  };

  const removeUserDataCookie = () => {
    removeUserData();
  };

  return (
    <div>
      <h1>Cookeの動作確認</h1>
      <button onClick={setUserDataCookie}>保存</button>
      <br />

      <button onClick={getUserDataCookie}>取得</button>
      <br />

      <button onClick={showUserData}>表示</button>

      <button onClick={removeUserDataCookie}>削除</button>
    </div>
  );
}
