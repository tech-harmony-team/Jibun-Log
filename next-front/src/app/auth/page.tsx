"use client";

import { useRouter } from "next/navigation";

import { CircleButton } from "@/components/button/circleButton";
import PageHeader from "@/components/typography/pageHeader";
import { CheckRounded } from "@mui/icons-material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useState } from "react";
import { UserData } from "@/types/userData";

export default function AuthPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [blankError, setBlankError] = useState<boolean>(false);

  const handleAuth = async () => {
    if (email === "" || password === "") {
      setBlankError(true);
      return;
    }
    setBlankError(false);
    //TODO: 新規登録処理を書く

    const url = "http://localhost:3000/api/v1/auth";
    const obj = {
      email: email,
      password: password,
    };

    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      }).then(async (res) => {
        const contentType = res.headers.get("content-type");
        if (!res.ok) {
          const statusCode = res.status;
          if (!contentType || !contentType.includes("application/json")) {
            throw new Error("Oops, we haven't got JSON!");
          }
          switch (statusCode) {
            case 422:
              alert("すでに登録されたユーザーです。");
              break;
            default:
              throw new Error("Oops, we haven't got JSON!");
          }
        }

        const data = await res.json();
        const status = data.status;
        if (status === "error") {
          alert("何らかのエラーが発生しました");
          return;
        }

        const userData = data.data;

        const userObj: UserData = {
          id: userData.id,
          email: userData.email,
          response: userData.response,
          accessToken: "",
          client: "",
          uid: "",
        };

        console.log(userObj);
        location.href = "/sign-in";
      });
    } catch (error) {
      console.error("Error:", error);
    }
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
        {blankError && (
          <div className="w-full h-12 bg-red-600 text-white text-center rounded-md">
            メールアドレスとパスワード両方を入力してください
          </div>
        )}
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
