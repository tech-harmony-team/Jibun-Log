import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput } from "./textInput";

const schema = z.object({
	id: z.number().nullable(),
	title: z.record(z.string()),
});

type Schema = z.infer<typeof schema>;

export const InputForm = () => {
	const { control, handleSubmit, reset, formState: {errors} } = useForm<Schema>({});

	const onSubmit: SubmitHandler<Schema> = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextInput control={control} name="title" label="タイトル"  />
			<button type="submit">Submit</button>
		</form>
	);
};