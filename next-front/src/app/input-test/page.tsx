"use client";

import { useState } from "react";
import PageHeader from "@/components/typography/pageHeader";
import { CircleButton } from "@/components/button/circleButton";
import { ChevronRightRounded, ArrowBackIosNew, CheckRounded } from "@mui/icons-material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"


export default function InputPage() {
	const [title, setTitle] = useState<string>("");
	const [diary, setDiary] = useState<string>("");
	const [effort, setEffort] = useState<string>("");
	const [gain, setGain] = useState<string>("");
	const [date, setDate] = useState<Date>();
	const [startTime, setStartTime] = useState<Date>();
	const [endTime, setEndTime] = useState<Date>();
	const [allDay, setAllDay] = useState(false);

	const [error, setError] = useState<boolean>(false);

	const handleBack = () => {
		window.location.href = '/home';
	}

	const handleSubmit =  () => {
		if (!title || !diary || !effort || !gain) {
			setError(true);
			return;
		}
		if (!date || !(allDay || (startTime && endTime))) {
			alert("日付、開始時間、終了時間は必須です");
			return;
		}
		setError(false);
		// console.log(title);
		// console.log(diary);
		// console.log(effort);
		// console.log(gain);
		// console.log(date);
		// console.log(startTime);
		// console.log(endTime);
		// console.log(allDay? "終日": "終日ではない");
		window.location.href = '/input-test-3';
	}
	
	return (
		<>
		<div className="w-4/5 max-w-600 h-full mx-auto pt-14 bg-stone-50 overflow-auto">
			<PageHeader type="h1" textAlignment="left">
				自分Log	
			</PageHeader>
			<PageHeader type="h2" textAlignment="left">
				日記を書く 1/2
			</PageHeader>
			<div className="flex flex-col w-4/5 mx-auto space-y-4">
				<div className="flex flex-row space-x-4">
					<label>日付</label>
					<DatePicker
						selected={date}
						onChange={(date) => setDate(date!)}
						showDateSelect
						dateFormat={"MM/dd"}
					/>
				</div>
				<div className="flex flex-row space-x-4">
					<label>開始時間</label>
					<DatePicker
						selected={startTime}
						onChange={(date) => setStartTime(date!)}
						showTimeSelect
						showTimeSelectOnly
						timeIntervals={15}
						timeCaption="Time"
						dateFormat="HH:mm"
					/>
				</div>
				<div className="flex flex-row space-x-4">
					<label>終了時間</label>
					<DatePicker
						selected={endTime}
						onChange={(date) => setEndTime(date!)}
						showTimeSelect
						showTimeSelectOnly
						timeIntervals={15}
						timeCaption="Time"
						dateFormat="HH:mm"
					/>
				</div>
				<div className="flex flex-row space-x-4">
					<label>終日に設定</label>
					<input type="checkbox" checked={allDay} style={{ width: '20px', height: '20px' }} onChange={() => setAllDay(!allDay)} />
				</div>
			<div className="flex flex-col w-full mx-auto space-y-4">
				<input
					type="text"
					className="w-full p-2 border border-gray-300 rounded-md"
					placeholder="タイトル"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<textarea
					className="w-full p-2 border border-gray-300 rounded-md"
					placeholder="本文"
					value={diary}
					rows={4}
					onChange={(e) => setDiary(e.target.value)}
				/>
				<textarea
					className="w-full p-2 border border-gray-300 rounded-md"
					placeholder="工夫したこと"
					value={effort}
					rows={4}
					onChange={(e) => setEffort(e.target.value)}
				/>
				<textarea
					className="w-full p-2 border border-gray-300 rounded-md"
					placeholder="得たこと"
					value={gain}
					rows={4}
					onChange={(e) => setGain(e.target.value)}
				/>
				{error && <p className="text-red-500">すべて入力してください。</p>}
				<div className="flex flex-row justify-end space-x-4">
					<CircleButton
						label="戻る"
						fontsize="50px"
						color="#fff"
						backgroundColor="#999999"
						Icon={ArrowBackIosNew}
						onClick={handleBack}
        	/>
					<CircleButton
						label="次へ"
						fontsize="50px"
						color="#fff"
						backgroundColor="#60D11A"
						Icon={ChevronRightRounded}
						onClick={handleSubmit}
					/>
				</div>
			</div>
			</div>
    </div>
		</>
	);
};