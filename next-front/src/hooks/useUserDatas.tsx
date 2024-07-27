"use client";

import { useCookies } from "react-cookie";

export const useUserDatas = () => {
  const [cookies, setCookie] = useCookies(["name"]);

  // ユーザー名をCookieに保存
  const setUserName = (name: string) => {
    setCookie("name", name, { path: "/", sameSite: "strict" });
  };

  // ユーザー名をCookieから削除
  const removeUserName = () => {
    setCookie("name", "", { path: "/", maxAge: 0 });
  };

  // ユーザー名をCookieから取得
  const getUserName = () => {
    return cookies.name;
  };

  return { setUserName, removeUserName, getUserName };
};
