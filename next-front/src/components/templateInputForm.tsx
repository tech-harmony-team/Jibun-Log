import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput } from "./textInput/textInput";
import { useCallback } from "react";

const schema = z.object({
	title: z.string().min(1),
	text: z.string().min(1),
});

export type Schema = z.infer<typeof schema>;

export const InputForm = () => {
	const { control, handleSubmit, reset, formState: {errors} } = useForm<Schema>({
		resolver: zodResolver(schema),
		defaultValues: {
			title: "",
			text: "",
		},
	});

	const onSubmit: SubmitHandler<Schema> = (data) => {
		console.log(data);
	};

	const handleReset = useCallback(() => {
		reset();
	}, [reset]);

	return (
		<div className="flex flex-col items-center">
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextInput control={control} name="title" label="タイトル" />
				<TextInput control={control} name="text" label="本文" />
				<button type="button" style={{ margin: "10px" }} onClick={handleReset}>Reset</button>
				<button type="submit" style={{ margin: "10px" }}>Submit</button>
			</form>
		</div>
	);
};