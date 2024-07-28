"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput } from "@/components/textInput/textInput";
import { useCallback } from "react";
import PageHeader from "@/components/typography/pageHeader";
import { CircleButton } from "@/components/button/circleButton";
import { ChevronRightRounded, ArrowBackIosNew } from "@mui/icons-material";

const schema = z.object({
	title: z.string().min(1, "タイトルを入力してください"),
	diary: z.string().min(1, "本文を入力してください"),
	effort: z.string().min(1, "工夫を入力してください"),
	gain: z.string().min(1, "得たことを入力してください"),
});

export type Schema = z.infer<typeof schema>;

export default function InputPage() {
	const { control, handleSubmit, reset, formState: {errors} } = useForm<Schema>({
		resolver: zodResolver(schema),
		defaultValues: {
			title: "",
			diary: "",
			effort: "",
			gain: "",
		},
	});

	const handleBack = () => {
		window.location.href = '/home';
	}

	const onSubmit: SubmitHandler<Schema> = useCallback((data) => {
		console.log(data);
		window.location.href = '/input-test-2';
		}, []);

	const handleReset = useCallback(() => {
		reset();
	}, [reset]);

	return (
		<>
		<div className="w-4/5 max-w-600 h-full mx-auto pt-14 bg-stone-50 overflow-auto">
			<PageHeader type="h1" textAlignment="left">
				自分Log	
			</PageHeader>
			<PageHeader type="h2" textAlignment="left">
				日記を書く 1/2
			</PageHeader>
			<form className="flex flex-col w-4/5 mx-auto space-y-4" onSubmit={handleSubmit(onSubmit)}>
				<TextInput control={control} id="outlined-required" name="title" label="タイトル" fullWidth multiline rows={2} margin="normal"/>
				<TextInput control={control} id="outlined-required" name="diary" label="本文" fullWidth multiline rows={5} margin="normal"/>
				<TextInput control={control} id="outlined-required" name="effort" label="工夫" fullWidth multiline rows={5} margin="normal"/>
				<TextInput control={control} id="outlined-required" name="gain" label="得たこと" fullWidth multiline rows={5} margin="normal"/>
				<div className="flex flex-row justify-end space-x-4">
					{/* フォームのリセット用ボタン */}
					{/* <button type="button" onClick={handleReset}>Reset</button> */}
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
						onClick={handleSubmit(onSubmit)}
					/>
				</div>
			</form>
    </div>
		</>
	);
};