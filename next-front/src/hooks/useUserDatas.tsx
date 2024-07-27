"use client";

import { UserData } from "@/types/userData";
import { useCookies } from "react-cookie";

export const useUserDatas = () => {
  const [cookies, setCookie] = useCookies([
    "id",
    "email",
    "response",
    "accessToken",
    "client",
    "uid",
  ]);

  //ユーザーデータをCookieに保存
  const setUserData = (userData: UserData) => {
    const { id, email, response, accessToken, client, uid } = userData;
    setCookie("id", id, { path: "/", sameSite: "strict" });
    setCookie("email", email, { path: "/", sameSite: "strict" });
    setCookie("response", response, { path: "/", sameSite: "strict" });
    setCookie("accessToken", accessToken, { path: "/", sameSite: "strict" });
    setCookie("client", client, { path: "/", sameSite: "strict" });
    setCookie("uid", uid, { path: "/", sameSite: "strict" });
  };

  //ユーザーデータをCookieから削除
  const removeUserName = () => {
    setCookie("id", "", { path: "/", maxAge: 0 });
    setCookie("email", "", { path: "/", maxAge: 0 });
    setCookie("response", "", { path: "/", maxAge: 0 });
    setCookie("accessToken", "", { path: "/", maxAge: 0 });
    setCookie("client", "", { path: "/", maxAge: 0 });
    setCookie("uid", "", { path: "/", maxAge: 0 });
  };

  //ユーザーデータをCookieから取得
  const getUserData = () => {
    return {
      id: cookies.id,
      email: cookies.email,
      response: cookies.response,
      accessToken: cookies.accessToken,
      client: cookies.client,
      uid: cookies.uid,
    };
  };

  return { setUserData, removeUserName, getUserData };
};
