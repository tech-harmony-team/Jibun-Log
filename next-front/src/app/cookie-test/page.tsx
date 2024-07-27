"use client";

import { useState } from "react";

import { useUserDatas } from "@/hooks/useUserDatas";

export default function CookieTestPage() {
  const [name, setName] = useState<string>("");
  const [savedName, setSavedName] = useState<string>("");
  const { setUserName, removeUserName, getUserName } = useUserDatas();

  return (
    <div>
      <h1>Cookeの動作確認</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setUserName(name)}>保存</button>
      <br />

      <button onClick={() => setSavedName(getUserName())}>取得</button>
      <br />
      <p>保存されているデータ：{savedName}</p>

      <button onClick={removeUserName}>削除</button>
    </div>
  );
}
