"use client";

import { CircleButton } from "@/components/button/circleButton";
import PageHeader from "@/components/typography/pageHeader";
import { useState } from "react";

import { CheckRounded } from "@mui/icons-material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { useRouter } from "next/navigation";
import { UserData } from "@/types/userData";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [blankError, setBlankError] = useState<boolean>(false);

  const handleSignIn = async () => {
    if (email === "" || password === "") {
      setBlankError(true);
      return;
    }
    setBlankError(false);
    //TODO: ログイン処理を書く
    const url = "http://localhost:3000/api/v1/auth/sign_in";
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
            case 401:
              alert("ログインに失敗しました。もう一度お試しください。");
              break;
            case 422:
              alert("ログインに失敗しました。もう一度お試しください。");
              break;
            default:
              throw new Error("Oops, we haven't got JSON!");
          }
        }
        //header内の情報を取得
        const accessToken = res.headers.get("access-token");
        const client = res.headers.get("client");
        const uid = res.headers.get("uid");

        //header内に情報がない場合はエラーを返す
        if (!accessToken || !client || !uid) {
          throw new Error("Oops, we haven't got Headers!");
        }

        const data = await res.json();

        const userData = data.data;

        const userObj: UserData = {
          id: userData.id,
          email: userData.email,
          response: userData.response,
          accessToken: accessToken,
          client: client,
          uid: uid,
        };

        console.log(userObj);
        location.href = "/home";
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
        ログイン
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
          label="ログイン"
          fontsize="60px"
          color="#fff"
          backgroundColor="#1A85D1"
          Icon={CheckRounded}
          onClick={handleSignIn}
        />
      </div>
    </div>
  );
}
