"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput } from "@/components/textInput/textInput";
import { useCallback, useState } from "react";
import PageHeader from "@/components/typography/pageHeader";
import { CircleButton } from "@/components/button/circleButton";
import { CheckRounded } from "@mui/icons-material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

const schema = z.object({
	title: z.string().min(1),
	diary: z.string().min(1),
	effort: z.string(),
});

export type Schema = z.infer<typeof schema>;

export default function InputPage2() {
	const handleBack = () => {
		window.location.href = '/home';
	};

  return (
		<>
		<div className="w-4/5 max-w-600 h-full mx-auto pt-14 bg-stone-50">
			<PageHeader type="h1" textAlignment="left">
				自分Log	
			</PageHeader>
			<PageHeader type="h2" textAlignment="left">
				日記記録完了
			</PageHeader>
			<div className="flex flex-col items-center space-y-4">
				<CircleButton
					fontsize="100px"
					color="#fff"
					backgroundColor="#60D11A"
					Icon={CheckRounded} 
				/>
				<button onClick={handleBack} style={{ textDecoration: 'underline' }}>Homeに戻る</button>
			</div>
    </div>
		</>
  );
}
