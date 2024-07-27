"use client";

import { Button } from "@mui/material";
import { CircleButton } from "../components/button/circleButton";
import { CheckRounded, AddRounded, FavoriteRounded, ChevronRightRounded} from '@mui/icons-material';

export default function Home() {
	const handleClick = () => {
		console.log("clicked");
	}

  return (
    <>
      <h1 className="text-red-600 text-4xl font-bold">自分Log</h1>
	  	<CircleButton label="登録" fontsize="50px" color="#fff" backgroundColor="#1A85D1" Icon={CheckRounded} />
		<CircleButton label="日記を書く" fontsize="50px" color="#fff" backgroundColor="#60D11A" Icon={AddRounded} />
		<CircleButton label="お気に入り" fontsize="50px" color="#fff" backgroundColor="#F08810" Icon={FavoriteRounded} />
		<CircleButton label="次へ" fontsize="50px" color="#fff" backgroundColor="#60D11A" Icon={ChevronRightRounded} onClick={handleClick} />
    </>
  );
}
