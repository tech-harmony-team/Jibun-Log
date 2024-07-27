"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput } from "@/components/textInput/textInput";
import { useCallback, useState } from "react";
import PageHeader from "@/components/typography/pageHeader";
import { CircleButton } from "@/components/button/circleButton";
import { CheckRounded } from "@mui/icons-material";

const schema = z.object({
	title: z.string().min(1),
	diary: z.string().min(1),
	effort: z.string(),
});

export type Schema = z.infer<typeof schema>;

export default function InputPage2() {
	const [date, setDate] = useState(0);
	const [startTime, setStartTime] = useState(0);
	const [endTime, setEndTime] = useState(0);
	const [allDay, setAllDay] = useState(false);

	const stringToNumer = (str: string) => {
		const _date = new Date(Date.parse(str));
		return _date.getTime();
	}

	const numberToString = (num: number) => {
		const _date = new Date(num);
		return _date.toISOString().slice(0, 10);
	}

	const onSubmit = () => {
		console.log(date);
		console.log(startTime);
		console.log(endTime);
		console.log(allDay? "終日": "終日ではない");
	};

  return (
		<>
		<div className="w-4/5 max-w-600 h-full mx-auto pt-14 bg-stone-50">
			<PageHeader type="h1" textAlignment="left">
				自分Log	
			</PageHeader>
			<PageHeader type="h2" textAlignment="left">
				日記を書く 2/2
			</PageHeader>
			<div className="flex flex-col w-4/5 mx-auto space-y-4">
				<div className="flex flex-row space-x-4">
					<label>日付</label>
					<input
						type="date"
						value={numberToString(date)}
						onChange={(e) => setDate(stringToNumer(e.target.value))}
					/>
				</div>
				<div className="flex flex-row space-x-4">
					<label>開始時間</label>
					<input
						type="time"
						value={numberToString(startTime)}
						onChange={(e) => setStartTime(stringToNumer(e.target.value))}
					/>
				</div>
				<div className="flex flex-row space-x-4">
					<label>終了時間</label>
					<input
						type="time"
						value={numberToString(endTime)}
						onChange={(e) => setEndTime(stringToNumer(e.target.value))}
					/>
				</div>
				<div className="flex flex-row space-x-4">
					<label>終日に設定</label>
					<input type="checkbox" checked={allDay} />
				</div>
				<div className="flex flex-row justify-end space-x-4">
					<CircleButton
						label="完了"
						fontsize="50px"
						color="#fff"
						backgroundColor="#60D11A"
						Icon={CheckRounded} 
						onClick={onSubmit}
					/>
				</div>
			</div>
    </div>
		</>
  );
}
