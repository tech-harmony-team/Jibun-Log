"use client";

import { useState } from "react";
import PageHeader from "@/components/typography/pageHeader";
import { CircleButton } from "@/components/button/circleButton";
import { CheckRounded, ArrowBackIosNew } from "@mui/icons-material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

export default function InputPage2() {
	const [date, setDate] = useState<Date>();
	const [startTime, setStartTime] = useState<Date>();
	const [endTime, setEndTime] = useState<Date>();
	const [allDay, setAllDay] = useState(false);

	const handleBack = () => {
		window.location.href = '/input-test';
	};

	const onSubmit = () => {
		console.log(date);
		console.log(startTime);
		console.log(endTime);
		console.log(allDay? "終日": "終日ではない");
		if (date && (allDay || (startTime && endTime))) {
			window.location.href = '/input-test-3';
		}
		else
			alert("日付、開始時間、終了時間は必須です");
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
