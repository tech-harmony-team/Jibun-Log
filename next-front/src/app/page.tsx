"use client";

import { Button } from "@mui/material";
import { CircleButton } from "../components/button/circleButton";
import { CheckCircle, AddCircle, FavoriteRounded, ChevronRightRounded} from '@mui/icons-material';

export default function Home() {
	const handleClick = () => {
		console.log("clicked");
	}

  return (
    <>
      <h1 className="text-red-600 text-4xl font-bold">自分Log</h1>
	  	<CircleButton label="登録" fontsize="50px" color="#1A85D1" Icon={CheckCircle} />
			<CircleButton label="日記を書く" fontsize="60px" color="#60D11A" Icon={AddCircle} />
			<CircleButton label="お気に入り" fontsize="50px" color="#fff" backgroundColor="#F08810" Icon={FavoriteRounded} />
			<CircleButton label="次へ" fontsize="50px" color="#fff" backgroundColor="#60D11A" Icon={ChevronRightRounded} onClick={handleClick} />
    </>
  );
}
